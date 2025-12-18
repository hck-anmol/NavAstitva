import React, { useState, useEffect } from "react";
import logo_dark from "../assets/logo_dark.png";
import logo_light from "../assets/h (1).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/" },
    { name: "Support Us", path: "/" },
    { name: "Achievements", path: "/achievements" },
    { name: "Career", path: "/career" },
    { name: "Resources", path: "/resources" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Fixed Wrapper with proper spacing */}
      <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6 lg:px-8 pt-4 md:pt-5 lg:pt-6 overflow-visible">
        <nav
          className={`mx-auto max-w-7xl
          px-4 sm:px-5 lg:px-6 rounded-2xl lg:rounded-3xl 
          flex items-center justify-between gap-2 lg:gap-3
          transition-all duration-500 ease-out
          ${isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-xl py-3.5 lg:py-4 border border-gray-100/50"
              : "bg-pink-800 py-4 lg:py-5 shadow-lg"
            }`}
        >
          {/* Logo - Better scaling and transition */}
          <a href="/" className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src={isScrolled ? logo_dark : logo_light}
              alt="Logo"
              className="h-9 sm:h-10 md:h-11 lg:h-14 w-auto object-contain transition-all duration-500"
            />
          </a>

          {/* Desktop Nav Links - Improved spacing and transitions */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-3 xl:gap-4 max-w-3xl mx-4 min-w-0 relative">
            {navLinks.map((link, i) => {
              // Special handling for Achievements dropdown
              if (link.name === "Achievements") {
                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => setIsAchievementsOpen(true)}
                    onMouseLeave={() => setIsAchievementsOpen(false)}
                  >
                    <button
                      className={`group font-medium whitespace-nowrap transition-all duration-300
                      text-sm xl:text-base flex items-center gap-1
                      ${isScrolled
                          ? "text-pink-800 hover:text-pink-600"
                          : "text-white hover:text-pink-50"
                        }`}
                    >
                      <span className="relative inline-block pb-1">
                        {link.name}
                        <span
                          className={`absolute left-0 bottom-0 h-0.5 w-full scale-x-0 origin-left transition-all duration-300 ease-out
                          ${isScrolled ? "bg-pink-700" : "bg-white"}
                          group-hover:scale-x-100`}
                        />
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isAchievementsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    {isAchievementsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[100] animate-fade-in">
                        <Link
                          to="/milestones"
                          className="block px-6 py-3 text-pink-800 hover:bg-pink-50 transition-colors duration-200 font-medium text-sm"
                          onClick={() => setIsAchievementsOpen(false)}
                        >
                          Our Milestones
                        </Link>
                        <Link
                          to="/journey"
                          className="block px-6 py-3 text-pink-800 hover:bg-pink-50 transition-colors duration-200 font-medium text-sm border-t border-gray-100"
                          onClick={() => setIsAchievementsOpen(false)}
                        >
                          10+ Year's Journey
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              // Regular links
              return (
                <Link
                  key={i}
                  to={link.path}
                  className={`group font-medium whitespace-nowrap transition-all duration-300
                  text-sm xl:text-base
                  ${isScrolled
                      ? "text-pink-800 hover:text-pink-600"
                      : "text-white hover:text-pink-50"
                    }`}
                >
                  <span className="relative inline-block pb-1">
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 w-full scale-x-0 origin-left transition-all duration-300 ease-out
                      ${isScrolled ? "bg-pink-700" : "bg-white"}
                      group-hover:scale-x-100`}
                    />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Donate Button - Enhanced hover effect */}
          <div className="hidden lg:block shrink-0 ml-2">
            <button
              className={`px-5 xl:px-7 py-2.5 xl:py-3 rounded-full font-semibold transition-all duration-300 text-xs xl:text-sm whitespace-nowrap
              hover:scale-105 active:scale-95
              ${isScrolled
                  ? "bg-yellow-500 text-black hover:bg-yellow-600 shadow-lg hover:shadow-xl"
                  : "bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg hover:shadow-xl"
                }`}
              onClick={() => window.location.href = '/donate'}
            >
              Donate
            </button>
          </div>

          {/* Mobile Menu Button - Better hover state */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2.5 -mr-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            aria-label="Open menu"
          >
            <svg
              className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-pink-800" : "text-white"
                }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay - Improved animations */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-50/50 flex flex-col items-center justify-center gap-6 font-medium transition-all duration-400 ease-out z-[60] lg:hidden
        ${isMenuOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
          }`}
      >
        {/* Close Button - Better positioned and styled */}
        <button
          className="absolute top-6 right-6 p-3 text-pink-800 hover:text-pink-600 rounded-full hover:bg-pink-100 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Menu Links - Staggered fade-in effect */}
        <div className="flex flex-col items-center gap-3 w-full px-6">
          {navLinks.map((link, i) => {
            // Special handling for Achievements dropdown in mobile
            if (link.name === "Achievements") {
              return (
                <div key={i} className="w-full">
                  <button
                    onClick={() => setIsAchievementsOpen(!isAchievementsOpen)}
                    className={`text-pink-800 hover:text-pink-600 text-xl sm:text-2xl font-semibold transition-all duration-300 w-full text-center py-3 rounded-xl hover:bg-pink-50 flex items-center justify-center gap-2
                    ${isMenuOpen ? 'animate-fade-in' : ''}`}
                    style={{
                      animationDelay: isMenuOpen ? `${i * 50}ms` : '0ms',
                    }}
                  >
                    {link.name}
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${isAchievementsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Mobile Dropdown */}
                  {isAchievementsOpen && (
                    <div className="mt-2 space-y-2 w-full">
                      <Link
                        to="/milestones"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsAchievementsOpen(false);
                        }}
                        className="block text-pink-700 hover:text-pink-600 text-lg font-medium transition-all duration-300 w-full text-center py-2 rounded-lg hover:bg-pink-50"
                      >
                        Our Milestones
                      </Link>
                      <Link
                        to="/journey"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsAchievementsOpen(false);
                        }}
                        className="block text-pink-700 hover:text-pink-600 text-lg font-medium transition-all duration-300 w-full text-center py-2 rounded-lg hover:bg-pink-50"
                      >
                        10+ Year's Journey
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
            // Regular links
            return (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-pink-800 hover:text-pink-600 text-xl sm:text-2xl font-semibold transition-all duration-300 w-full text-center py-3 rounded-xl hover:bg-pink-50
                ${isMenuOpen ? 'animate-fade-in' : ''}`}
                style={{
                  animationDelay: isMenuOpen ? `${i * 50}ms` : '0ms',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Donate Button - Enhanced styling */}
        <button
          className="mt-6 bg-yellow-500 text-black px-12 py-4 rounded-full hover:bg-yellow-600 font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          onClick={() => setIsMenuOpen(false)}
        >
          Donate
        </button>
      </div>

      {/* Keyframe animation for menu items */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;