'use client';

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { cn } from "@/lib/utils";

// This component handles the state and logic for sliding the review cards.
export default function ReviewCarousel({ reviews }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Define the base width class for mobile/small screens (shows 1.2 cards to hint scrolling)
  // This layout matches the original slick behavior of showing 1 card fully and a bit of the next.
  const getWidthClass = () => {
    if (typeof window === 'undefined') return "w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4";
    
    // NOTE: For reviews, we use the mobile-first approach where:
    // < 540px: Show 1 card (w-full)
    // >= 540px: Show 2 cards (w-1/2)
    // >= 820px: Show 3 cards (w-1/3)
    // >= 1100px: Show 4 cards (w-1/4)
    // >= 1440px: Show 5 cards (w-1/5)

    if (window.matchMedia('(min-width: 1440px)').matches) return "w-1/5"; 
    if (window.matchMedia('(min-width: 1100px)').matches) return "w-1/4"; 
    if (window.matchMedia('(min-width: 820px)').matches) return "w-1/3";
    if (window.matchMedia('(min-width: 540px)').matches) return "w-1/2";
    
    return "w-full"; // default: mobile
  };
  
  // Calculate the amount to scroll based on the current width class.
  const getCardWidthAmount = () => {
    if (!scrollRef.current) return 0;
    const widthClass = getWidthClass();
    
    // Simple way to get width fractions in Tailwind's context
    const fractions = { "w-full": 1, "w-1/2": 2, "w-1/3": 3, "w-1/4": 4, "w-1/5": 5 };
    const numCards = fractions[widthClass];

    return scrollRef.current.clientWidth / numCards;
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    
    window.addEventListener("resize", handleResize);
    scrollRef.current?.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollRef.current?.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollCarousel = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = getCardWidthAmount();
    const distance = direction === 'left' ? -scrollAmount : scrollAmount;
    
    scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
  };
  
  // Custom Arrow Component
  const ArrowButton = ({ dir, onClick, disabled }) => (
    <button
      aria-label={dir === "left" ? "Previous review" : "Next review"}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 shadow ring-1 ring-zinc-200 hover:bg-white transition-opacity duration-300 md:flex",
        dir === "left" ? "-left-4 lg:-left-6" : "-right-4 lg:-right-6",
        disabled && "opacity-40 cursor-not-allowed"
      )}
    >
      {dir === "left" ? <ChevronLeft className="h-5 w-5 text-zinc-700" /> : <ChevronRight className="h-5 w-5 text-zinc-700" />}
    </button>
  );

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="relative">
      
      {/* Scrollable container: */}
      <div 
        ref={scrollRef} 
        className={cn(
          "flex overflow-x-scroll scroll-smooth snap-x snap-mandatory [-ms-overflow-style:'none'] [scrollbar-width:'none']", // Hide scrollbar
          "[&::-webkit-scrollbar]:hidden" // Hide scrollbar in WebKit
        )}
      >
        {reviews.map((r) => (
          <div 
            key={r.id} 
            // Apply the responsive width classes here
            className={cn(
              "flex-shrink-0 snap-start px-3 py-1",
              getWidthClass(), 
            )}
          >
            <ReviewCard r={r} />
          </div>
        ))}
        {/* Helper element */}
        <div className="flex-shrink-0 w-8 md:w-0" />
      </div>

      {/* Navigation Buttons (Hidden on mobile) */}
      <ArrowButton dir="left" onClick={() => scrollCarousel('left')} disabled={!canScrollLeft} />
      <ArrowButton dir="right" onClick={() => scrollCarousel('right')} disabled={!canScrollRight} />

    </motion.div>
  );
}
