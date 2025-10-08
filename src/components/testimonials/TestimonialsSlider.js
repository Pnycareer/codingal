"use client"

import Slider from "react-slick"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "../data/TestimonialsData"

// absolutely import slick styles (without these, mobile looks busted)
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Arrow = ({ onClick, dir }) => (
  <button
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    className="
      absolute top-1/2 z-10 -translate-y-1/2 rounded-lg
      bg-rose-300/80 p-2 text-white shadow hover:bg-rose-400
      focus:outline-none hidden md:inline-flex
    "
    style={{ [dir === "left" ? "left" : "right"]: "-18px" }}
  >
    {dir === "left" ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
  </button>
)

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <Arrow dir="right" />,
  prevArrow: <Arrow dir="left" />,
  dots: false,
  autoplay: false,
  adaptiveHeight: true,

  // nicer touch UX
  swipe: true,
  swipeToSlide: true,
  touchThreshold: 12,

  // center on mobile so cards don’t hug the gutter
  centerMode: false,

  appendDots: dots => (
    <div style={{ bottom: "-56px" }}>
      <ul className="!m-0 flex items-center justify-center gap-2">{dots}</ul>
    </div>
  ),
  customPaging: () => <div className="h-1 w-8 rounded-full border border-rose-500" />,

  responsive: [
    // <= 1280
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    // <= 1024
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    // <= 768 (tablets & big phones)
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.1,     // show a “peek” of next slide
        arrows: false,         // fat-finger safe
        dots: true,
        centerMode: true,
        centerPadding: "16px", // tailwind px-4 equivalent
      },
    },
    // <= 480 (small phones)
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.05,    // slightly tighter peek
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: "12px",
      },
    },
  ],
}

const TestimonialsSlider = () => {
  return (
    <section className="bg-[#F3F8FC] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-3xl md:text-4xl">
            Students and parents love Codingal’s training program
            <br className="hidden sm:block" />
            and curriculum
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          {/* prevent horizontal scroll bleed on mobile */}
          <div className="-mx-2 sm:mx-0">
            <Slider {...settings}>
              {testimonials.map(t => (
                <div key={t.id} className="px-2 sm:px-4">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSlider
