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
      <div id="courses">
        <CoursesSection />
      </div>
      <div id="plans">
        <PricingSection />
      </div>
      <BenefitsSection />
      {/* <TestimonialsSlider /> */}
      <ReviewsSection />
      <div id="projects">
        <StudentProjectsShowcase />
      </div>
    </>
  );
};

export default MainHome;
