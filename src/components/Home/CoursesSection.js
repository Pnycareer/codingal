"use client"

import { motion } from "framer-motion"
import CourseCard from "../cards/CourseCard"
import { coursesData } from "../data/CoursesData"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const CoursesSection = () => {
  // first 4 only (exactly like your screenshot). add more data entries later;
  // grid will keep 4 per row: 1st row = first 4, 2nd row = next 4, etc.
  const visible = coursesData.slice(0, 4)

  return (
    <section className="bg-[#F7F7FB] py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl">
            Choose an <span className="text-red-600">AI &amp; coding course</span> that
            excites your child
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection
