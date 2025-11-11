"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  const images = [
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=911",
    "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1471",
    "https://plus.unsplash.com/premium_photo-1713163890188-6807aa2641de?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764",
    "https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470",
    "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000); // 5 seconds display
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, images.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-900 relative group/card border border-black/[0.1] dark:border-white/[0.2] rounded-xl p-6 w-auto sm:w-[30rem] h-auto">
          <CardItem translateZ={50} className="text-xl font-bold text-white">
            Make things float in air & many more things
          </CardItem>

          <CardItem as="p" translateZ={60} className="text-gray-200 text-sm max-w-sm mt-2">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>

          <CardItem translateZ={100} className="w-full mt-4 relative h-60">
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  height={1000}
                  width={1000}
                  alt={`carousel-image-${currentIndex}`}
                  className="h-60 w-full object-cover rounded-xl absolute group-hover/card:shadow-xl"
                  initial={{ 
                    rotateY: 90,
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{ 
                    rotateY: 0,
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{ 
                    rotateY: -90,
                    opacity: 0,
                    scale: 0.8
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </AnimatePresence>
            </div>
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="a"
              href="#"
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Try now →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}