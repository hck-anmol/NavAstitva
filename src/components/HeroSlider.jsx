import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const slides = [
  {
    image: img1,
    title: "BREAKING THE STIGMA",
    description: "OUR MENSTRUAL HYGIENE MANAGEMENT INITIATIVE.",
    cta: "DONATE NOW",
    link: "/donate",
  },
  {
    image: img2,
    title: "EMPOWERING COMMUNITIES, CHANGING LIVES",
    description: "JOIN US IN MAKING A DIFFERENCE.",
    cta: "GET INVOLVED",
    link: "/get-involved",
  },
  {
    image: img3,
    title: "TOGETHER WE CAN END HUNGER",
    description: "NAF'S SAI KI RASOI PROGRAM.",
    cta: "BECOME A VOLUNTEER",
    link: "/become-a-volunteer",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    if (index !== current) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((current - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((current + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Sliding Background with smoother transition */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Enhanced gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

      {/* Content Container - Better vertical centering with navbar spacing */}
      <div className="absolute inset-0 flex items-center justify-start pt-20 md:pt-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Glassmorphism Card with improved spacing and transitions */}
            <div
              className={`
                relative overflow-hidden
                bg-white/40 backdrop-blur-xl
                border border-white/30
                shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                px-6 py-7 sm:px-7 sm:py-8 md:px-9 md:py-10 lg:px-12 lg:py-12
                max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
                transition-all duration-500 ease-out
                hover:bg-white/45 hover:backdrop-blur-2xl hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)]
                ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
              `}
              style={{
                borderRadius: "24px",
              }}
            >
              {/* Subtle glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

              {/* Heading with better line-height */}
              <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-5 tracking-tight">
                {slides[current].title}
              </h1>

              {/* Description with improved spacing */}
              <p className="relative text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-medium">
                {slides[current].description}
              </p>

              {/* CTA Button with enhanced hover effect */}
              <div className="relative">
                <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-7 sm:px-8 md:px-9 py-3 md:py-3.5 rounded-full hover:bg-gray-800 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:scale-105 text-sm sm:text-base md:text-lg font-semibold">
                  {slides[current].cta}
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-gray-900 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Better positioned and styled */}
      <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${current === index
                ? "w-10 md:w-12 h-2.5 md:h-3 bg-white shadow-lg"
                : "w-2.5 md:w-3 h-2.5 md:h-3 bg-white/60 hover:bg-white/90"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Better positioned and styled */}
      {/* Navigation Arrows - Glassmorphism Style */}
      <div className="absolute bottom-10 right-8 md:right-12 flex gap-3 z-30">
        <button
          onClick={handlePrevious}
          className="
      w-12 h-16 flex items-center justify-center 
      bg-white/20 backdrop-blur-md 
      border border-white/30 rounded-xl
      shadow-[0_4px_12px_rgba(0,0,0,0.1)]
      hover:bg-white/30 hover:border-white/50 
      transition-all duration-300 group
    "
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="
      w-12 h-16 flex items-center justify-center 
      bg-white/20 backdrop-blur-md 
      border border-white/30 rounded-xl
      shadow-[0_4px_12px_rgba(0,0,0,0.1)]
      hover:bg-white/30 hover:border-white/50 
      transition-all duration-300 group
    "
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>  
    </section>
  );
};

export default HeroSlider;
