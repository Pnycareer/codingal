// src/components/Home/PricingGrid.js
'use client'

import { motion } from "framer-motion"
import PricingCard from "./PricingCard"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const PricingGrid = ({ plans }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
    >
      {plans.map((p) => (
        <PricingCard key={p.id} plan={p} />
      ))}
    </motion.div>
  )
}

export default PricingGrid