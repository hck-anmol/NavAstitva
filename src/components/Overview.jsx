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
        {
            title: "OUR INITIATIVES",
            image: our_initiative,
        },
        {
            title: "OUR MILESTONES",
            image: our_milestones,
        },
        {
            title: "SURVEY REPORTS",
            image: survey_reports,
        },
        {
            title: "PROJECT REPORTS",
            image: project_reports,
        },
        {
            title: "AUDIT REPORTS",
            image: audit_reports,
        },
        {
            title: "10+ YEAR'S JOURNEY",
            image: growth,
        },
    ];

    return (
        <>
            {/* Marquee Animation */}
            <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

            {/* Heading Section */}
            <div className="pt-16 px-6 md:px-10 flex flex-col gap-4 max-w-7xl mx-auto">
                <h1 className="text-4xl font-semibold text-pink-800">
                    QUICK OVERVIEW OF NAF
                </h1>
                <h2 className="text-2xl font-semibold text-pink-800">
                    A JOURNEY OF DECADE
                </h2>
            </div>

            {/* Marquee Container */}
            <div
                className="overflow-hidden px-6 md:px-10 w-full relative max-w-6xl mx-auto mt-10"
                onMouseEnter={() => setStopScroll(true)}
                onMouseLeave={() => setStopScroll(false)}
            >
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

                {/* Marquee */}
                <div
                    className="marquee-inner flex w-fit"
                    style={{
                        animationPlayState: stopScroll ? "paused" : "running",
                        animationDuration: `${cardData.length * 2500}ms`,
                    }}
                >
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div
                                key={index}
                                className="w-56 mx-4 h-[20rem] relative group transition-all duration-300 hover:scale-95"
                            >
                                {/* Image */}
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-xl"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                                    <p className="text-white text-lg font-semibold text-center px-4">
                                        {card.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};

export default Overview;
