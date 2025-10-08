"use client"

import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { reviews } from "../data/ReviewsData"
import ReviewCard from "./ReviewCard"
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Arrow = ({ dir, onClick }) => (
  <button
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    className="absolute top-1/2 z-10 hidden sm:inline-flex -translate-y-1/2 rounded-full bg-white/80 p-2 shadow ring-1 ring-zinc-200 hover:bg-white"
    style={{ [dir === "left" ? "left" : "right"]: "-32px" }}
  >
    {dir === "left" ? <ChevronLeft className="h-5 w-5 text-zinc-700" /> : <ChevronRight className="h-5 w-5 text-zinc-700" />}
  </button>
)

export default function ReviewsSection() {
  const sliderRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const len = reviews.length

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const t = setTimeout(() => {
      window.dispatchEvent(new Event("resize"))
      if (sliderRef.current?.innerSlider) {
        sliderRef.current.innerSlider.onWindowResized()
      }
    }, 0)
    return () => clearTimeout(t)
  }, [mounted])

  const settings = {
    mobileFirst: true,
    speed: 450,
    arrows: true,
    prevArrow: <Arrow dir="left" />,
    nextArrow: <Arrow dir="right" />,
    dots: false,

    slidesToShow: Math.min(len, 1),
    slidesToScroll: 1,
    infinite: len > 1,

    responsive: [
      { breakpoint: 540,  settings: { slidesToShow: Math.min(len, 2), infinite: len > 2 } },
      { breakpoint: 820,  settings: { slidesToShow: Math.min(len, 3), infinite: len > 3 } },
      { breakpoint: 1100, settings: { slidesToShow: Math.min(len, 4), infinite: len > 4 } },
      { breakpoint: 1440, settings: { slidesToShow: Math.min(len, 5), infinite: len > 5 } },
    ],
  }

  return (
    <section className="bg-[#F3F8FC] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="relative">
          {/* only render slider after mount */}
          {mounted && (
            <Slider ref={sliderRef} {...settings}>
              {reviews.map(r => (
                <div key={r.id} className="px-3">
                  <ReviewCard r={r} />
                </div>
              ))}
            </Slider>
          )}
        </motion.div>

        <div className="mt-6 text-center text-sm text-zinc-700">
          Rated <span className="font-semibold">4.7</span> / 5 based on{" "}
          <span className="font-semibold">298 reviews</span>. Showing our 5 star reviews.
          <div className="mt-2 inline-flex items-center gap-2 text-zinc-800">
            <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
            <span className="font-semibold">Trustpilot</span>
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="outline" className="h-12 w-full rounded-2xl border-2 border-zinc-300 text-base font-semibold text-zinc-700 hover:bg-white sm:w-1/2">
            See more reviews
          </Button>
          <Button className="h-12 w-full rounded-2xl bg-rose-500 text-base font-semibold text-white hover:bg-rose-600 sm:w-1/2">
            Try a free lesson
          </Button>
        </div>
      </div>
    </section>
  )
}
