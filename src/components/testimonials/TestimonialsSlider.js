import CustomTestimonialCarousel from "./CustomTestimonialCarousel";
import { testimonials } from "../data/TestimonialsData"

export default function TestimonialsSlider() {
  // Data fetching/import happens on the server
  const len = testimonials.length

  if (len === 0) return null; // Safety check

  return (
    <section className="bg-[#F3F8FC] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl">
            Students and parents love Codingal’s training program
            <br />and curriculum
          </h2>
        </div>

        {/* The client-side carousel handles the interactivity */}
        <CustomTestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}