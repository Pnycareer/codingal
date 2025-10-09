import BenefitsList from "./BenefitsList";
import { benefits } from "../data/BenefitsData" // Data is imported on the server

const BenefitsSection = () => {
  return (
    <section className="bg-[#F4FAFF] py-16">
      {/* The component with interactivity is rendered here */}
      <BenefitsList benefits={benefits} />
    </section>
  )
}

export default BenefitsSection