"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  BookOpen,
  Activity,
  Clock,
  CheckCircle2,
  Download,
  PlayCircle,
} from "lucide-react"

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

const Meta = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 text-[15px] text-zinc-700">
    <Icon className="h-4 w-4 text-red-500" />
    <span>{children}</span>
  </div>
)

const CourseCard = ({ course }) => {
  return (
    <motion.div variants={item} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-red-200/60 bg-white shadow-sm transition-all hover:shadow-xl">
        {/* media */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />

          {/* AI ribbon */}
          <div className="absolute left-3 top-3 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white shadow">
            AI
          </div>

          {/* Age pill */}
          <div className="absolute right-3 top-3 rounded-full bg-zinc-900/80 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur">
            {course.age}
          </div>

          {/* play icon (like screenshot) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayCircle className="h-12 w-12 text-white/95 drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]" />
          </div>
        </div>

        {/* content */}
        <CardContent className="flex grow flex-col">
          <h3 className="mb-3 text-xl font-bold">
            {course.title}
          </h3>

          {/* 4 spec items with icons */}
          <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2">
            <Meta icon={GraduationCap}>{course.grade}</Meta>
            <Meta icon={Activity}>{course.activities}</Meta>
            <Meta icon={BookOpen}>{course.lessons}</Meta>
            <Meta icon={Clock}>{course.duration}</Meta>
          </div>

          <p className="mb-4 text-[15px] leading-6 text-zinc-700">
            {course.description}
          </p>

          {/* outcomes */}
          <div className="mb-5">
            <p className="mb-2 font-semibold text-zinc-900">Learning outcomes</p>
            <ul className="space-y-2">
              {course.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-[15px] text-zinc-800">
                  <CheckCircle2 className="mt-[2px] h-4 w-4 flex-none text-red-500" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA — pinned to bottom so card heights match */}
          <div className="mt-auto flex flex-col gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 text-red-600 hover:text-red-700"
            >
              <span className="text-[15px] font-semibold">Download curriculum</span>
              <Download className="h-4 w-4" />
            </button>

            <Button
              variant="outline"
              className="h-12 rounded-2xl border-2 border-red-500 text-base font-semibold text-red-600 hover:bg-red-50"
            >
              Try a free lesson
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CourseCard
