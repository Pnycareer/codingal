// src/components/Home/CourseGrid.js
'use client';

import { motion } from "framer-motion"
import CourseCard from "../cards/CourseCard"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const CourseGrid = ({ visibleCourses }) => { // Takes pre-rendered data as a prop
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
            {visibleCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </motion.div>
    )   
}

export default CourseGrid;