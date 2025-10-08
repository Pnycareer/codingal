// TestimonialsSlider.jsx
"use client"
import { useEffect, useRef } from "react"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "../data/TestimonialsData"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



const Arrow = ({ onClick, dir }) => (
  <button
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    className="absolute top-1/2 z-10 -translate-y-1/2 rounded-lg bg-rose-300/80 p-2 text-white shadow hover:bg-rose-400 focus:outline-none"
    style={{ [dir === "left" ? "left" : "right"]: "-18px" }}
  >
    {dir === "left" ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
  </button>
)


export default function TestimonialsSlider() {
  const sliderRef = useRef(null)
  const len = testimonials.length

  const settings = {
    // start from mobile
    mobileFirst: true,
    dots: false,
    arrows: true,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    autoplay: false,
    speed: 500,
    cssEase: "ease-in-out",

    // clamp to data length
    slidesToShow: Math.min(len, 1),
    slidesToScroll: 1,
    infinite: len > 1,

    responsive: [
      {
        breakpoint: 640, // >=640px
        settings: {
          slidesToShow: Math.min(len, 2),
          slidesToScroll: 1,
          infinite: len > 1,
        },
      },
      {
        breakpoint: 1024, // >=1024px
        settings: {
          slidesToShow: Math.min(len, 3),
          slidesToScroll: 1,
          infinite: len > 2,
        },
      },
      {
        breakpoint: 1280, // optional: >=1280px
        settings: {
          slidesToShow: Math.min(len, 4),
          slidesToScroll: 1,
          infinite: len > 3,
        },
      },
    ],

    // (keep your custom dots if you want)
    appendDots: dots => (
      <div style={{ bottom: "-70px" }}>
        <ul className="!m-0 flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-1 w-8 rounded-full border border-rose-500" />
    ),
  }

  // nudge slick after hydration so it recalcs on real phones
  useEffect(() => {
    const t = setTimeout(() => {
      window.dispatchEvent(new Event("resize"))
      if (sliderRef.current?.innerSlider) {
        sliderRef.current.innerSlider.onWindowResized()
      }
    }, 0)
    return () => clearTimeout(t)
  }, [])

  return (
    <Slider ref={sliderRef} {...settings}>
      {testimonials.map(t => (
        <div key={t.id} className="px-4">
          <TestimonialCard t={t} />
        </div>
      ))}
    </Slider>
  )
}
