"use client"

import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "../data/TestimonialsData"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Arrow = ({ onClick, dir }) => (
  <button
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    className="absolute top-1/2 z-10 hidden sm:inline-flex -translate-y-1/2 rounded-lg bg-rose-300/80 p-2 text-white shadow"
    style={{ [dir === "left" ? "left" : "right"]: "-18px" }}
  >
    {dir === "left" ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
  </button>
)

export default function TestimonialsSlider() {
  const sliderRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const len = testimonials.length

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    // nudge slick after hydration
    const t = setTimeout(() => {
      window.dispatchEvent(new Event("resize"))
      if (sliderRef.current?.innerSlider) {
        sliderRef.current.innerSlider.onWindowResized()
      }
    }, 0)
    return () => clearTimeout(t)
  }, [mounted])

 const settings = {
  mobileFirst: true, // FIX: Use mobile-first approach
  infinite: len > 1,
  speed: 500,
  arrows: true,
  nextArrow: <Arrow dir="right" />,
  prevArrow: <Arrow dir="left" />,
  dots: false,
  autoplay: false,

  slidesToShow: Math.min(len, 1), // FIX: Set default to 1 for mobile screens
  slidesToScroll: 1,

  // MIN-width breakpoints (will correctly apply settings at or above these widths)
  responsive: [
    // Tablet (min-width: 768px)
    { breakpoint: 768,  settings: { slidesToShow: Math.min(len, 2) } },
    // Desktop (min-width: 1200px)
    { breakpoint: 1200, settings: { slidesToShow: Math.min(len, 3) } },
    // Large Desktop (min-width: 1536px)
    { breakpoint: 1536, settings: { slidesToShow: Math.min(len, 4) } },
  ],
}


  return (
    <section className="bg-[#F3F8FC] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl">
            Students and parents love Codingal’s training program
            <br />and curriculum
          </h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="relative">
          {mounted && (
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map(t => (
                <div key={t.id} className="px-4">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </Slider>
          )}
        </motion.div>
      </div>
    </section>
  )
}