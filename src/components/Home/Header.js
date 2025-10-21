"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe2, Rocket, ShieldCheck, Sparkles, Star, Users } from "lucide-react"
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

// Define the custom purple color for use in the radial gradient (Hex: #6633FF)
// We will use a highly transparent version for a "light" gradient effect.
const PURPLE_ACCENT_RGBA = "rgba(102, 51, 255, 0.08)"

const sellingPoints = [
  {
    icon: Sparkles,
    title: "Personalised learning pods",
    description:
      "Live mentors tailor every session to your child's pace and passion.",
  },
  {
    icon: ShieldCheck,
    title: "Certified global curriculum",
    description:
      "Project-based journeys built by educators from MIT, Google, and industry leaders.",
  },
  {
    icon: Rocket,
    title: "Future-ready outcomes",
    description:
      "Learners publish portfolios, compete globally, and unlock scholarships worldwide.",
  },
]

const stats = [
  { icon: Star, value: "4.9/5", label: "Parent satisfaction" },
  { icon: Users, value: "12K+", label: "Learners coached" },
  { icon: Globe2, value: "25", label: "Countries represented" },
]

const Header = () => {
  return (
    // Background remains light for contrast and readability
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-100">
      {/* subtle vignette - color adjusted to the new purple with low opacity for a light glow */}
      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(600px_320px_at_20%_10%,${PURPLE_ACCENT_RGBA},transparent_65%)]`}
      />
      <div className="pointer-events-none absolute -top-24 right-1/3 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-14 md:px-10 lg:py-24">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Award-winning campus for young innovators
          </motion.div>

          {/* EXACT HEADLINE & LINE-BREAKS */}
          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-[42px] lg:text-[48px]"
          >
            Top-rated
            <span className="relative mx-2 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">
                online coding & AI
              </span>
              <span className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-gradient-to-r from-indigo-300/60 to-sky-200/60" />
            </span>
            journeys for curious kids
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Unlock a premium blended experience where imagination meets enterprise-grade
            tools. We pair live instructors with adaptive curriculum so every learner
            graduates with a standout portfolio and the confidence to lead tomorrow.
          </motion.p>

          <div className="mt-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {sellingPoints.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-sky-500/10 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-slate-900">
                      {title}
                    </p>
                    <p className="text-sm text-slate-600">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={item}
              className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center"
            >
              <Button className="h-12 w-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 px-7 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 sm:w-auto">
                Book a discovery class
              </Button>
              <a
                href="https://wa.me/923014497903"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="group h-12 w-full rounded-full border-slate-200 bg-white/90 px-6 text-base font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300 sm:w-auto"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5 text-emerald-500 transition-transform group-hover:rotate-3" />
                  Talk to a learning advisor
                </Button>
              </a>
            </motion.div>

            {/* STATS */}
            <motion.ul
              variants={item}
              className="flex flex-col gap-5 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-md backdrop-blur sm:flex-row sm:items-center sm:justify-between"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-sky-500/15 text-indigo-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xl font-semibold text-slate-900">
                      {value}
                    </p>
                    <p className="text-sm text-slate-600">{label}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <Card className="relative overflow-hidden rounded-3xl border-0 bg-white/80 shadow-2xl shadow-indigo-100 backdrop-blur">
            <CardContent className="space-y-5 p-5 md:p-7">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-900/90">
                <Image
                  src="/headerimage.jpg"
                  alt="Kids collaborating during a Codingal live session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide opacity-80">
                      Live cohort in session
                    </p>
                    <p className="text-lg font-semibold">Intermediate AI Lab</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">
                  Curriculum tracks
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm font-semibold text-slate-800">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">
                    Python & Automation
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">
                    Scratch Story Labs
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">
                    Game Design in C++
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">
                    Applied AI & Ethics
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* floating accent chips */}
          <motion.div
            aria-hidden
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-8 -top-8 hidden rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-md backdrop-blur md:block"
          >
            Project-first pedagogy
          </motion.div>
          <motion.div
            aria-hidden
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="pointer-events-none absolute -right-7 top-1/3 hidden -translate-y-1/2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-md backdrop-blur md:block"
          >
            Guided by senior engineers
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
