import React from "react";
import dmi from "../assets/partners/dmi.png";
import indianRedCross from "../assets/partners/indian_red_cross_society.png";
import biharSarkar from "../assets/partners/bihar_sarkar.png";
import random from "../assets/partners/random.png";
import lionsInt from "../assets/partners/lions_int.png";
import indianRail from "../assets/partners/indian_rail.png";
import jeevika from "../assets/partners/jeevika.png";
import sikshaVibhag from "../assets/partners/siksha_vibhag.png";
import unicef from "../assets/partners/unicef.png";
import ntpc from "../assets/partners/ntpc.png";
import brbcl from "../assets/partners/brbcl.png";
import relianceFoundation from "../assets/partners/reliance_foundation.png";

const Partners = () => {
  const companyLogos = [
    { src: dmi, name: "DMI" },
    { src: indianRedCross, name: "Indian Red Cross Society" },
    { src: biharSarkar, name: "Bihar Sarkar" },
    { src: random, name: "Random" },
    { src: lionsInt, name: "Lions International" },
    { src: indianRail, name: "Indian Railways" },
    { src: jeevika, name: "Jeevika" },
    { src: sikshaVibhag, name: "Siksha Vibhag" },
    { src: unicef, name: "UNICEF" },
    { src: ntpc, name: "NTPC" },
    { src: brbcl, name: "BRBCL" },
    { src: relianceFoundation, name: "Reliance Foundation" },
  ];

  // Error handler for images
  const handleImageError = (e, logoName) => {
    console.error(`Failed to load image: ${logoName}`);
    e.target.style.display = 'none'; // Hide broken image
  };

  return (
    <>
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

        .logo-item {
          transition: all 0.3s ease-out;
        }

        .logo-item:hover {
          transform: scale(1.15);
          filter: grayscale(0%) brightness(1.1);
        }
      `}</style>

      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
              OUR PARTNERS
            </h2>
            <p className="text-lg text-gray-600">
              Organizations supporting our mission
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
          </div>
        </div>

        <div className="overflow-hidden w-full relative max-w-6xl mx-auto select-none">
          <div className="absolute left-0 top-0 h-full w-24 md:w-32 lg:w-40 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />

          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: "20s" }}
          >
            <div className="flex items-center">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div
                  key={index}
                  className="logo-item flex items-center justify-center px-8 md:px-10 lg:px-12 h-24 md:h-28"
                  
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-[140px] max-h-[80px] w-auto h-auto object-contain"
                    draggable={false}
                    onError={(e) => handleImageError(e, logo.name)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-24 md:w-32 lg:w-40 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />
        </div>
      </section>
    </>
  );
};

export default Partners;