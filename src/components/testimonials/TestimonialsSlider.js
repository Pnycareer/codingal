"use client"

import Slider from "react-slick"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "../data/TestimonialsData"

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
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
  // custom dots: thin dashed line look
  appendDots: dots => (
    <div style={{ bottom: "-70px" }}>
      <ul className="!m-0 flex items-center justify-center gap-2">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="h-1 w-8 rounded-full  border border-rose-500" />
  ),
}

const TestimonialsSlider = () => {
  return (
    <section className="bg-[#F3F8FC] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl">
            Students and parents love Codingal’s training program
            <br />
            and curriculum
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          <Slider {...settings}>
            {testimonials.map(t => (
              <div key={t.id} className="px-4">
                <TestimonialCard t={t} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSlider
