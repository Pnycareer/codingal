"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// Assuming you have Next.js Image component available, which is necessary.
import Image from "next/image";

const TrustStars = ({ count = 5 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="inline-flex h-5 w-6 items-center justify-center rounded-[3px] bg-emerald-600"
        >
          <Star className="h-3.5 w-3.5 fill-white text-white" />
        </span>
      ))}
    </div>
  )
}

const ReviewCard = ({ r }) => {
  return (
    <Card
      padding="p-0"
      shadow="shadow-sm"
      border="border border-zinc-200"
      className="rounded-xl bg-white"
    >
      <CardContent className="p-4">
        <TrustStars count={r.stars} />

        <h4 className="mt-3 line-clamp-1 text-[15px] font-bold text-zinc-900">
          {r.title}
        </h4>

        {/* Display the full review body */}
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-700">
          {r.body}
        </p>

        {/* AUTHOR and IMAGE SECTION */}
        <div className="mt-4 border-t border-zinc-100 pt-3 flex items-center gap-3">
          
          {/* Student Thumbnail */}
          {r.imageUrl && (
            <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
                <Image
                    src={r.imageUrl}
                    alt={r.author}
                    fill
                    className="object-contain"
                />
            </div>
          )}

          {/* Author Name and Date */}
          <div className="text-xs text-zinc-500">
            <p className="font-semibold text-zinc-700 text-sm">{r.author}</p>
            <p>{r.date}</p>
          </div>
        </div>
        
      </CardContent>
    </Card>
  )
}

export default ReviewCard
