"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

// simple variants for staggered fade-up
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const Header = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFECEC]">
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(255,170,150,0.25),transparent_60%)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-14 md:px-10 lg:py-20">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          {/* EXACT HEADLINE & LINE-BREAKS */}
          <motion.h1
            variants={item}
            className="text-[36px] font-extrabold leading-[1.12] text-zinc-900 md:text-[32px]"
          >
            Top-rated{" "}
            <span className="relative inline-block">
              <span className="relative z-10">online</span>
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-orange-300"></span>
            </span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10">programming</span>
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-orange-300"></span>
            </span>
            ,<br />
            <span> Coding &amp; AI classes for kids </span>
            <br />
            <span> become the innovators of tomorrow</span>
          </motion.h1>

          {/* BENEFITS */}
          <motion.ul
            variants={item}
            className="mt-6 space-y-4 text-lg text-zinc-800 md:mt-8"
          >
            <li className="flex items-center gap-3">
              <span className="text-red-500">🔴</span>
              <span>Engaging live video lessons</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-600">🏅</span>
              <span>Learn from top-rated, world-class instructors</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-500">📈</span>
              <span>Boost confidence with measurable progress</span>
            </li>
          </motion.ul>

          {/* WHATSAPP CTA */}
          <motion.div variants={item} className="mt-6 md:mt-8">
            <a
              href="https://wa.me/923001234567" // TODO: replace with your number (no +)
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="group h-12 rounded-2xl bg-emerald-500 px-6 text-base font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-emerald-600 active:scale-[0.99]"
              >
                <FaWhatsapp className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6" />
                Contact Us
              </Button>
            </a>
          </motion.div>

          {/* SUBTEXT */}
          <motion.p
            variants={item}
            className="mt-4 text-sm text-zinc-600 md:mt-5"
          >
            ⚡ Join 1000+ students who took a lesson in the last 24 hours!
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-8 text-zinc-900 md:mt-8"
          >
            <div>
              <p className="text-xl font-extrabold">1 Million+</p>
              <p className="text-zinc-600">Students</p>
            </div>
            <div>
              <p className="text-xl font-extrabold">70+</p>
              <p className="text-zinc-600">Countries</p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <p className="text-zinc-700">4.6 / 5 stars</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <Card className="rounded-2xl border-0 shadow-xl">
            <CardContent className="p-4 md:p-6">
              {/* Replace with your hero collage image */}
              <div className="relative mx-auto aspect-[16/9] w-full max-w-[680px] overflow-hidden rounded-xl">
                <Image
                  src="https://img.lovepik.com/element/40083/7618.png_1200.png"
                  alt="Kids learning"
                  unoptimized={true}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-zinc-700 md:text-base">
                Python • Scratch • C++ • AI
              </p>
            </CardContent>
          </Card>

          {/* floating accent chips */}
          <motion.div
            aria-hidden
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-6 -top-6 hidden rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur md:block"
          >
            🚀 Innovate
          </motion.div>
          <motion.div
            aria-hidden
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="pointer-events-none absolute -right-5 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur md:block"
          >
            🧠 AI
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
