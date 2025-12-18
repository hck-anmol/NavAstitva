import React, { useState } from "react";

import our_initiative from "../assets/our_initiative.png";
import our_milestones from "../assets/our_milestones.png";
import survey_reports from "../assets/survey_reports.png";
import project_reports from "../assets/h.png";
import audit_reports from "../assets/audit_reports.png";
import growth from "../assets/growth.png";

const Overview = () => {
  const [stopScroll, setStopScroll] = useState(false);

  const cardData = [
    { title: "OUR INITIATIVES", image: our_initiative, link: "/initiatives" },
    { title: "OUR MILESTONES", image: our_milestones, link: "/milestones" },
    { title: "SURVEY REPORTS", image: survey_reports, link: "/survey-reports" },
    { title: "PROJECT REPORTS", image: project_reports, link: "/project-reports" },
    { title: "AUDIT REPORTS", image: audit_reports, link: "/audit-reports" },
    { title: "10+ YEAR'S JOURNEY", image: growth, link: "/journey" },
  ];

  return (
    <>
      {/* Enhanced Marquee Animation */}
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        /* Smooth card scale animation */
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .card-hover:hover {
          animation: card-float 0.6s ease-in-out;
        }
      `}</style>

      {/* Heading Section - Better spacing and hierarchy */}
      <div className="pt-20 md:pt-24 pb-8 md:pb-12 px-6 md:px-10 flex flex-col gap-3 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight">
          QUICK OVERVIEW OF NAF
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-700/90">
          A JOURNEY OF A DECADE
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-2" />
      </div>

      {/* Marquee Container - Improved fade edges */}
      <div
        className="overflow-hidden px-6 md:px-10 w-full relative max-w-7xl mx-auto mt-6 md:mt-8 pb-16 md:pb-20"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Enhanced Left Fade with gradient */}
        <div className="absolute left-0 top-0 h-full w-24 md:w-32 lg:w-40 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Marquee Track */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${cardData.length * 3000}ms`,
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="group mx-5 flex flex-col items-center w-64 cursor-pointer"
                onClick={() => window.location.href = card.link}
              >
                {/* Card with enhanced hover effects */}
                <div className="card-hover relative h-80 w-full overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg">
                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay - Always visible, enhanced on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/70" />

                  {/* Title Overlay - Slides up on hover */}
                  <div className="absolute inset-0 flex items-end justify-center p-6 transition-all duration-500 group-hover:items-center group-hover:bg-black/40 group-hover:backdrop-blur-sm">
                    <p className="text-white text-lg font-bold text-center leading-tight transition-all duration-500 group-hover:text-xl">
                      {card.title}
                    </p>
                  </div>

                  {/* Accent border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400/50 rounded-2xl transition-colors duration-500" />
                </div>

               
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Right Fade with gradient */}
        <div className="absolute right-0 top-0 h-full w-24 md:w-32 lg:w-40 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
    </>
  );
};

export default Overview;
