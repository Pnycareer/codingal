"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"
import { motion } from "framer-motion"
import clsx from "clsx"

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

const Bullet = ({ type, children }) => {
  const Icon = type === "bad" ? XCircle : CheckCircle2
  return (
    <li className="flex items-start gap-2 text-[15px] leading-6">
      <Icon
        className={clsx(
          "mt-[2px] h-4 w-4 shrink-0",
          type === "bad" ? "text-red-500" : "text-emerald-600"
        )}
      />
      <span className="text-zinc-800">{children}</span>
    </li>
  )
}

const PricingCard = ({ plan }) => {
  return (
    <motion.div variants={item} className="h-full">
      <Card
        className={clsx(
          "flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm ring-1",
          plan.color.ring
        )}
      >
        {/* colored header bar WITH LABEL */}
        <div
          className={clsx(
            "flex h-12 w-full items-center justify-center",
            plan.color.header
          )}
        >
          <span className="text-white text-lg font-extrabold tracking-wide">
            {plan.name}
          </span>
        </div>

        <CardContent className="flex h-full flex-col p-6">
          {/* removed the separate <h3> below the bar */}

          {/* price row */}
          <div className="mb-3 text-center">
            <div className="text-[22px] font-extrabold text-zinc-900">
              {plan.price}
            </div>
            <div className="mt-1 text-base text-zinc-500 line-through">
              {plan.oldPrice}
            </div>
            <div className="mx-auto mt-2 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
              {plan.discount}
            </div>
          </div>

          {/* CTA */}
          <div className="my-4">
            <Button
              variant="outline"
              className="w-full rounded-xl border-red-500 text-red-600 hover:bg-red-50"
            >
              {plan.ctaText}
            </Button>
          </div>

          {/* subtitle like a link */}
          {plan.subtitle && (
            <p className="mb-3 text-center text-[15px] font-semibold text-zinc-900 underline underline-offset-4">
              {plan.subtitle}
            </p>
          )}
          {plan.subtitleNote && (
            <p className="mb-3 text-center text-sm text-zinc-700">
              {plan.subtitleNote}
            </p>
          )}

          {/* bullets */}
          <ul className="mb-2 space-y-2">
            {plan.bullets.map((b, i) => (
              <Bullet key={i} type={b.type}>
                {b.text}
              </Bullet>
            ))}
          </ul>

          <div className="mt-auto" />
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default PricingCard
