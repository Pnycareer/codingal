import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { reviews } from "../data/ReviewsData"
import ReviewCarousel from "./ReviewCarousel" // New import

// Removed all react-slick imports (Slider, Chevron, etc) and lifecycle hooks (useEffect, useRef, useState)

export default function ReviewsSection() {
  const len = reviews.length
  
  if (len === 0) return null; // Safety check

  return (
    <section className="bg-[#F3F8FC] py-14">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* The client-side carousel handles the interactivity and animation */}
        <ReviewCarousel reviews={reviews} />

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
