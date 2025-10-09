export const pricingData = [
  {
    id: "prime",
    name: "Prime Plan",
    color: { header: "bg-rose-500", ring: "ring-rose-300" },
    // Price: PKR 3,999 / session @ 35% off. Old Price calculated: 3999 / (1 - 0.35) = 6152.31
    price: "PKR 3,999 / session",
    oldPrice: "PKR 6,152.31", 
    discount: "35% off",
    subtitle: "Private 1-on-1 Tutoring",
    subtitleNote: "Personalized live classes (120 minutes each)",
    ctaText: "Try a Free Lesson",
    bullets: [
      { type: "good", text: "100% personal attention in every class" },
      { type: "good", text: "2–3 lessons per week — flexible scheduling tailored for your child" },
      { type: "good", text: "Unlimited rescheduling for convenience" },
      { type: "good", text: "Ideal for focused learners who need individual attention" },
    ],
  },
  {
    id: "premier",
    name: "Premier Plan",
    color: { header: "bg-violet-600", ring: "ring-violet-300" },
    // Price: PKR 2,500 / session @ 30% off. Old Price calculated: 2500 / (1 - 0.30) = 3571.43
    price: "PKR 2,500 / session",
    oldPrice: "PKR 3,571.43",
    discount: "30% off",
    subtitle: "Micro Group (3–5 Students)",
    subtitleNote: "Small group live sessions (120 minutes each)",
    ctaText: "Try a Free Lesson",
    bullets: [
      { type: "good", text: "2 lessons per week — 8 engaging classes per month" },
      { type: "good", text: "Focused attention with peer interaction" },
      { type: "good", text: "Flexible rescheduling with class buddies" },
      { type: "good", text: "Perfect balance of collaboration & guidance" },
    ],
  },
  {
    id: "plus",
    name: "Plus Plan",
    color: { header: "bg-sky-600", ring: "ring-sky-300" },
    // Price: PKR 1,250 / session @ 25% off. Old Price calculated: 1250 / (1 - 0.25) = 1666.67
    price: "PKR 1,250 / session",
    oldPrice: "PKR 1,666.67",
    discount: "25% off",
    subtitle: "Small Group (8–10 Students)",
    subtitleNote: "Fun, interactive live group sessions (120 minutes each)",
    ctaText: "Try a Free Lesson",
    bullets: [
      { type: "good", text: "2 lessons per week — 8 classes per month" },
      { type: "good", text: "Active participation and teamwork" },
      { type: "bad", text: "Hybrid classes, No rescheduling available" },
      { type: "good", text: "Best for social learners who enjoy group energy" },
    ],
  },
]
