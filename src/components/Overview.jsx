import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// Import your assets
import our_initiative from "../assets/our_initiative.png";
import our_milestones from "../assets/our_milestones.png";
import survey_reports from "../assets/survey_reports.png";
import project_reports from "../assets/h.png";
import audit_reports from "../assets/audit_reports.png";
import growth from "../assets/growth.png";

const Overview = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  
  // State for interaction
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cardData = [
    { title: "OUR INITIATIVES", image: our_initiative, link: "/initiatives" },
    { title: "OUR MILESTONES", image: our_milestones, link: "/milestones" },
    { title: "SURVEY REPORTS", image: survey_reports, link: "/survey-reports" },
    { title: "PROJECT REPORTS", image: project_reports, link: "/project-reports" },
    { title: "AUDIT REPORTS", image: audit_reports, link: "/audit-reports" },
    { title: "10+ YEAR'S JOURNEY", image: growth, link: "/journey" },
  ];

  // Logic to handle the infinite manual scroll loop
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // If we scroll too far to the right (reach the end of the second set)
    // Jump back to the start of the second set (the middle)
    if (scrollLeft + clientWidth >= scrollWidth - 1) {
      scrollRef.current.scrollLeft = scrollLeft - (scrollWidth / 2);
    } 
    // If we scroll too far to the left
    else if (scrollLeft <= 0) {
      scrollRef.current.scrollLeft = scrollWidth / 2;
    }
  };

  // Drag Logic for Desktop
  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Smooth auto-scroll animation */
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 40s linear infinite;
        }

        .paused-animation {
          animation-play-state: paused !important;
        }

        .card-inner {
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .card-inner:hover {
          transform: translateY(-10px);
        }
      `}</style>

      {/* Heading Section */}
      <div className="pt-20 md:pt-24 pb-8 md:pb-12 px-6 md:px-10 flex flex-col gap-3 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight">
          QUICK OVERVIEW OF NAF
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-700/90 uppercase">
          A Journey of a Decade
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-2" />
      </div>

      {/* Outer Container */}
      <div 
        className="relative w-full overflow-hidden pb-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDown(false); }}
      >
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white via-white/40 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white via-white/40 to-transparent" />

        {/* Scrollable Viewport */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* We use THREE sets of data for a truly unbreakable loop during fast manual scrolling */}
          <div className={`marquee-track ${isPaused ? "paused-animation" : ""}`}>
            {[...cardData, ...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="group mx-4 flex flex-col items-center w-64 md:w-72 shrink-0 select-none"
                onClick={() => {
                  if (!isDown) {
                    navigate(card.link);
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <div className="card-inner relative h-80 md:h-96 w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable="false"
                  />
                  
                  {/* Overlay UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
                  
                  <div className="absolute inset-0 flex items-end justify-center p-6 transition-all duration-500 group-hover:items-center group-hover:bg-pink-900/20 group-hover:backdrop-blur-[2px]">
                    <p className="text-white text-lg md:text-xl font-bold text-center leading-tight">
                      {card.title}
                    </p>
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400/30 rounded-2xl transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;