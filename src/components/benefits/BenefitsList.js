'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
}

const BenefitsList = ({ benefits }) => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* success banner with mascot */}
      <div className="relative mx-auto mb-6 max-w-xl">
        {/* mascot */}
        <div className="pointer-events-none absolute -top-13 left-1/2 z-10 -translate-x-1/2">
          {/* swap with your mascot image if you have one */}
          <Image
            src="https://em-content.zobj.net/source/microsoft-teams/363/owl_1f989.png"
            alt="Mascot"
            width={56}
            height={56}
            className="drop-shadow"
            unoptimized
          />
        </div>

        {/* Keeping this as a success banner style, adjusting colors slightly for harmony */}
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-center text-sm text-emerald-900 shadow-sm">
          <span className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">
            Complete
          </span>
          <span className="ml-2">
            a free trial lesson to unlock additional scholarships!
          </span>
        </div>
      </div>

      {/* soft card panel - Updated to white background and blue border */}
      <div className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm md:p-10">
        {/* corner sparkle - Updated to dark blue text */}
        <div className="mb-4 flex items-center gap-2 text-blue-800">
          <Sparkles className="h-5 w-5" />
        </div>

        <h3 className="mb-6 text-center text-xl font-extrabold text-zinc-900 md:text-[22px]">
          Every student at PNY GENIUS gets these amazing benefits!
        </h3>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl space-y-3 text-[15px] leading-7 text-zinc-800"
        >
          {benefits.map((b, i) => (
            <motion.li
              key={i}
              variants={item}
              className="relative pl-5"
            >
              {/* blue dot like screenshot - Updated to dark blue bullet */}
              <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-blue-800" />
              {b.text}
            </motion.li>
          ))}
        </motion.ul>

        {/* bottom line + CTA - Divider color updated */}
        <div className="mt-8 border-t border-blue-200 pt-6 text-center">
          <p className="mb-4 text-sm text-zinc-600">
            Start your journey today with a free trial class at your preferred date &amp; time.
            No commitments, fees, or credit card required.
          </p>

          {/* Button color updated to PNY Genius's Golden Yellow accent */}
          <Button className="mx-auto h-12 rounded-2xl bg-amber-400 px-6 text-base font-semibold text-white hover:bg-amber-500">
            Try a Free Demo class
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BenefitsList;
