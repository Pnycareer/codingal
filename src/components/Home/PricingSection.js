"use client"

import { motion } from "framer-motion"
import PricingCard from "../pricing/PricingCard"
import { pricingData } from "../data/PricingData"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const PricingSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">
            3 flexible plans to suit your child’s{" "}
            <span className="underline decoration-2 decoration-amber-400">
              learning style & schedule
            </span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {pricingData.map((p) => (
            <PricingCard key={p.id} plan={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
