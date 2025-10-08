"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const TestimonialCard = ({ t }) => {
  return (
    <Card className="flex h-full py-0 flex-col overflow-hidden  border border-zinc-200 bg-white shadow-sm">
      {/* TOP: full-width colored area */}
      <div className={`relative h-[250px] w-full  ${t.color} px-6 pt-8 text-center text-white`}>
        <p className="mx-auto max-w-[260px] text-lg font-extrabold leading-snug uppercase tracking-wide drop-shadow">
          {t.quote} 
        </p>

        {/* avatar overlaps the colored block; no play button */}
        <div className="absolute left-1/2 -bottom-16 h-40 w-40 -translate-x-1/2 overflow-hidden rounded-full ring-4 ring-white">
          <Image
            src={t.thumb}
            alt={t.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* BOTTOM: text with more spacing */}
      <CardContent className="flex grow flex-col items-center justify-end pb-8 pt-20 text-center">
        <h4 className="mb-2 text-xl font-extrabold text-zinc-900">{t.name}</h4>
        <p className="mb-1 text-sm text-zinc-600">{t.grade}</p>
        <p className="mb-6 text-sm text-zinc-500">{t.role}</p> {/* extra mb */}
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
