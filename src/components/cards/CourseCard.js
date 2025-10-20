"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Activity,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  GraduationCap,
  PlayCircle,
} from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

const Meta = ({ icon: Icon, children }) => {
  if (!children) {
    return null
  }

  return (
    <span className="flex items-center gap-2 text-sm text-zinc-700 sm:text-[15px]">
      <Icon className="h-4 w-4 text-red-500" />
      <span className="truncate">{children}</span>
    </span>
  )
}

const Outcome = ({ text }) => (
  <li className="flex items-start gap-2 text-[15px] leading-6 text-zinc-800">
    <CheckCircle2 className="mt-[2px] h-4 w-4 flex-none text-red-500" />
    <span>{text}</span>
  </li>
)

const CourseCard = ({ course }) => {
  if (!course) {
    return null
  }

  const {
    title,
    image,
    age,
    grade,
    activities,
    lessons,
    duration,
    description,
    outcomes = [],
    ribbonText = "AI",
    hasPreview = true,
  } = course

  const safeDescription = description?.trim()
  const visibleOutcomes = outcomes.filter(Boolean).slice(0, 5)

  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-red-200/60 bg-white/95 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-red-100">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {ribbonText && (
            <div className="absolute left-3 top-3 rounded-md bg-red-600 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
              {ribbonText}
            </div>
          )}

          {age && (
            <div className="absolute right-3 top-3 rounded-full bg-zinc-900/80 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur">
              {age}
            </div>
          )}

          {hasPreview && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              <PlayCircle className="h-12 w-12 text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]" />
            </div>
          )}
        </div>

        <CardContent className="flex grow flex-col px-5 py-6 sm:px-6">
          <div className="mb-4 space-y-2">
            <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl">
              {title}
            </h3>
            {safeDescription && (
              <p className="text-sm leading-6 text-zinc-600 sm:text-[15px]">
                {safeDescription}
              </p>
            )}
          </div>

          <div className="mb-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 sm:text-[15px]">
            <Meta icon={GraduationCap}>{grade}</Meta>
            <Meta icon={Activity}>{activities}</Meta>
            <Meta icon={BookOpen}>{lessons}</Meta>
            <Meta icon={Clock}>{duration}</Meta>
          </div>

          {visibleOutcomes.length > 0 && (
            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold text-zinc-900 sm:text-base">
                Learning outcomes
              </p>
              <ul className="space-y-2">
                {visibleOutcomes.map((item, index) => (
                  <Outcome key={`${item}-${index}`} text={item} />
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
           
            <Button className="h-11  bg-transparent border-2 rounded-2xl  px-6 text-sm font-semibold text-red-600 hover:bg-red-100 sm:text-base">
              Try a free lesson
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CourseCard
