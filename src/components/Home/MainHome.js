'use client'

import React from 'react'
import Header from './Header'
import CoursesSection from './CoursesSection'
import PricingSection from './PricingSection'
import BenefitsSection from '../benefits/BenefitsSection'
import ReviewsSection from '../reviews/ReviewsSection'
import LearnToCodeSection from '../sections/LearnToCodeSection'
import TestimonialsSlider from '../testimonials/TestimonialsSlider'

const MainHome = () => {
  return (
    <>
    {/* <Header/>
    <CoursesSection/>
    <PricingSection/>
    <BenefitsSection/> */}
    <TestimonialsSlider />
     {/* <ReviewsSection />
     <LearnToCodeSection/> */}
    </>
  )
}

export default MainHome
