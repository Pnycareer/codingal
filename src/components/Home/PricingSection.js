import PricingGrid from "../pricing/PricingGrid"
import { pricingData } from "../data/PricingData" // Data is imported on the server

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

        {/* The component with animation is rendered here */}
        <PricingGrid plans={pricingData} />
      </div>
    </section>
  )
}

export default PricingSection