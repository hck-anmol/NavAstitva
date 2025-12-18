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
  },
  {
    image: img2,
    title: "EMPOWERING COMMUNITIES, CHANGING LIVES",
    description: "JOIN US IN MAKING A DIFFERENCE.",
    cta: "GET INVOLVED",
  },
  {
    image: img3,
    title: "TOGETHER WE CAN END HUNGER",
    description: "NAF'S SAI KI RASOI PROGRAM.",
    cta: "BECOME A VOLUNTEER",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Sliding Background */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
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

      {/* Gradient Overlay for better text contrast */}
      {/* Dark overlay on background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center top-80">
        <div className="w-full px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Glassmorphism Card */}
            <div
              className="
          relative overflow-hidden
          bg-white/50
          backdrop-blur-2xl
          border border-white/30
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-9 lg:px-10 lg:py-10
          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
          transition-all duration-700
          hover:bg-white/30 hover:backdrop-blur-3xl
        "
              style={{
                borderRadius: "24px 32px 28px 20px",
              }}
            >
              {/* Glass light reflection */}
              <span className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none" />

              {/* Heading */}
              <h1 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900/90 leading-tight mb-3 md:mb-4">
                {slides[current].title}
              </h1>

              {/* Description */}
              <p className="relative text-gray-800/90 text-sm sm:text-base md:text-lg leading-relaxed mb-5 md:mb-6">
                {slides[current].description}
              </p>

              {/* CTA Button */}
              <div className="relative">
                <button className="inline-flex items-center gap-2.5 bg-gray-900/90 text-white px-5 sm:px-6 md:px-7 py-2.5 md:py-3 rounded-full hover:bg-gray-900 transition-all duration-300 group shadow-lg hover:shadow-xl text-sm sm:text-base font-semibold">
                  {slides[current].cta}
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-900 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 text-base sm:text-lg">
                    →
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Slide Indicators - Bottom center */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${current === index
              ? "w-8 md:w-10 h-2 md:h-2.5 bg-white"
              : "w-2 md:w-2.5 h-2 md:h-2.5 bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-8/10 top-8/9 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 group z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="hidden md:flex absolute left-9/10 top-8/9 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 group z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSlider;