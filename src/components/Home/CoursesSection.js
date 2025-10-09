import CourseGrid from "./CourseGrid"
import { coursesData } from "../data/CoursesData" // Data is loaded on the server

const CoursesSection = () => {
  // Data processing happens on the server!
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
        
        {/* Render the Client Component here, passing data as props */}
        <CourseGrid visibleCourses={visible} />
      </div>
    </section>
  )
}

export default CoursesSection