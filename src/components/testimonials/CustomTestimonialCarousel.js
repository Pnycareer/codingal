'use client';

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { cn } from "@/lib/utils";

// This component handles the state and logic for sliding the cards.
export default function CustomTestimonialCarousel({ testimonials }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Constants for slide width, determined by Tailwind CSS breakpoints
  // We'll use a fixed percentage to calculate scroll distance
  const CARD_WIDTH_PERCENT = {
    // Mobile: 1 card + 2 * px-4 padding = 100% width
    sm: 100, 
    md: 50, // Tablet: 2 cards
    xl: 33.333, // Desktop: 3 cards
    "2xl": 25, // Large Desktop: 4 cards (tailwind merge default is often 1536px, so we'll use 1280px or higher)
  };

  const getCardWidthPercentage = () => {
    if (typeof window === 'undefined') return CARD_WIDTH_PERCENT.sm;
    
    // Check breakpoints in reverse order (desktop first)
    if (window.matchMedia('(min-width: 1280px)').matches) return CARD_WIDTH_PERCENT["2xl"]; // xl: 1280px
    if (window.matchMedia('(min-width: 1024px)').matches) return CARD_WIDTH_PERCENT.xl; // lg: 1024px
    if (window.matchMedia('(min-width: 768px)').matches) return CARD_WIDTH_PERCENT.md; // md: 768px
    
    return CARD_WIDTH_PERCENT.sm; // default: mobile
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Check if scroll is at the very start
      setCanScrollLeft(scrollLeft > 0);
      // Check if scroll is at the very end (allow a small buffer for floating point issues)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    
    // Add event listeners for resizing and scrolling to update button visibility
    window.addEventListener("resize", handleResize);
    scrollRef.current?.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollRef.current?.removeEventListener("scroll", checkScroll);
    };
  }, []);


  const scrollCarousel = (direction) => {
    if (!scrollRef.current) return;

    // Determine how far to scroll based on current viewport size
    const cardWidthPercentage = getCardWidthPercentage();
    const scrollAmount = scrollRef.current.clientWidth * (cardWidthPercentage / 100);

    const distance = direction === 'left' ? -scrollAmount : scrollAmount;
    
    scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
  };
  
  // Custom Arrow Component
  const ArrowButton = ({ dir, onClick, disabled }) => (
    <button
      aria-label={dir === "left" ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-rose-500/80 p-2 text-white shadow transition-opacity duration-300 md:flex",
        dir === "left" ? "-left-4 lg:-left-6" : "-right-4 lg:-right-6",
        disabled && "opacity-40 cursor-not-allowed"
      )}
    >
      {dir === "left" ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
    </button>
  );

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="relative">
      
      {/* Scrollable container: Uses flex for card layout and overflow-x-scroll for native scrolling */}
      <div 
        ref={scrollRef} 
        className={cn(
          "flex overflow-x-scroll scroll-smooth snap-x snap-mandatory [-ms-overflow-style:'none'] [scrollbar-width:'none']", // Hide scrollbar in modern browsers and Tailwind for scroll-snap behavior
          // Custom class to completely hide the scrollbar (for WebKit browsers like Chrome/Safari)
          "[&::-webkit-scrollbar]:hidden"
        )}
      >
        {testimonials.map((t) => (
          <div 
            key={t.id} 
            className="flex-shrink-0 w-full snap-start px-4 md:w-1/2 lg:w-1/3 xl:w-1/4" // Tailwind classes define card width responsively
          >
            <TestimonialCard t={t} />
          </div>
        ))}
        {/* Helper element to ensure smooth snapping on the last element if it doesn't fill the space */}
        <div className="flex-shrink-0 w-8 md:w-0" /> 
      </div>

      {/* Navigation Buttons (Hidden on mobile for native touch/scroll behavior) */}
      <ArrowButton dir="left" onClick={() => scrollCarousel('left')} disabled={!canScrollLeft} />
      <ArrowButton dir="right" onClick={() => scrollCarousel('right')} disabled={!canScrollRight} />

    </motion.div>
  );
}
