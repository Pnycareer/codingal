import React from "react";
import Header from "./Header";
import CoursesSection from "./CoursesSection";
import PricingSection from "./PricingSection";
import BenefitsSection from "../benefits/BenefitsSection";
import TestimonialsSlider from "../testimonials/TestimonialsSlider";
import ReviewsSection from "../reviews/ReviewsSection";
import StudentProjectsShowcase from "../projects/StudentProjectsShowcase";

const MainHome = () => {
  return (
    <>
      <Header />
      <CoursesSection />
      <PricingSection />
      <BenefitsSection />
      {/* <TestimonialsSlider /> */}
      <ReviewsSection />
      <StudentProjectsShowcase />
    </>
  );
};

export default MainHome;
