"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: 1,
    title: "Develop key skills",
    desc:
      "Learning to code helps improve a child’s logical thinking and problem-solving skills by 70%, also enabling them to perform better at school.",
    img: "https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imgAlt: "Kid thinking pose",
    side: "left",
  },
  {
    id: 2,
    title: "Prepare for the future",
    desc:
      "Children need to learn coding and develop digital skills if they want to be successful in the technology-driven job market of the future.",
    img: "https://images.pexels.com/photos/4145032/pexels-photo-4145032.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imgAlt: "Future city toy set",
    side: "right",
  },
  {
    id: 3,
    title: "Learn through coding",
    desc:
      "Our STEM-focused curriculum makes coding a learning aid and helps kids develop a deeper understanding of the subjects they study at school.",
    img: "https://images.pexels.com/photos/8613024/pexels-photo-8613024.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imgAlt: "Kid with abacus",
    side: "left",
  },
]

const CircleImage = ({ src, alt }) => (
  <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full ring-8 ring-white md:h-48 md:w-48">
    <Image src={src} alt={alt} fill className="object-cover" unoptimized />
  </div>
)

const FeatureRow = ({ item }) => {
  const content = (
    <div className="max-w-xl">
      <h4 className="text-[17px] font-bold text-zinc-900 md:text-lg">{item.title}</h4>
      <p className="mt-2 text-[13.5px] leading-6 text-zinc-600 md:text-sm">{item.desc}</p>
    </div>
  )

  return (
    <div className="flex items-center justify-center gap-6 md:gap-10">
      {item.side === "left" ? (
        <>
          <CircleImage src={item.img} alt={item.imgAlt} />
          {content}
        </>
      ) : (
        <>
          {content}
          <CircleImage src={item.img} alt={item.imgAlt} />
        </>
      )}
    </div>
  )
}

const LearnToCodeSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Top: Earn coding certifications */}
        <div className="grid items-center gap-8 md:grid-cols-[320px_1fr_84px] md:gap-10">
          {/* left image */}
          <div className="relative mx-auto h-40 w-56 overflow-hidden rounded-3xl md:h-48 md:w-72">
            <Image
              src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Kids holding certificates"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* copy */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 md:text-[22px]">
              Earn <a href="#" className="underline decoration-amber-400 decoration-2 underline-offset-4">coding certifications</a> that make you stand out
            </h3>
            <p className="mt-3 text-[13.5px] leading-6 text-zinc-600 md:text-sm">
              Our young learners from grades 1–12 earn STEM.org-accredited coding
              certificates that celebrate their achievements while unlocking special badges and
              leaderboard rankings, making programming a fun and rewarding experience. Our curriculum
              allows students to earn a variety of certifications across specializations like Scratch
              Developer, Young Python Programmer, Young Web Developer, Java Developer, and Coding
              Champion. Certificates are easy to download and share, are STEM.org accredited, and can
              be added to your child’s learning portfolio for school and social media.
            </p>
          </div>

          {/* right tiny sticker/emoji (optional) */}
          <div className="hidden md:block">
            <div className="mx-auto h-16 w-16 rounded-xl bg-amber-100/70 p-2 text-center text-2xl">
              🎓
            </div>
          </div>
        </div>

        {/* divider spacing */}
        <div className="my-14 border-t border-zinc-100" />

        {/* Why children should learn to code */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-zinc-900 md:text-[22px]">
            Why children should <a href="#" className="underline decoration-amber-400 decoration-2 underline-offset-4">learn to code</a>
          </h3>
        </div>

        <div className="mt-10 space-y-14">
          {features.map((f) => (
            <FeatureRow key={f.id} item={f} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button className="h-10 rounded-xl bg-rose-500 px-6 text-sm font-semibold text-white hover:bg-rose-600">
            Try a free lesson
          </Button>
        </div>
      </div>
    </section>
  )
}

export default LearnToCodeSection
