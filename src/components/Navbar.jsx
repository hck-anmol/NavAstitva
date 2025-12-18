import React, { useState, useEffect } from "react";
import logo_dark from "../assets/logo_dark.png";
import logo_light from "../assets/h (1).png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Our Work", path: "/" },
    { name: "Support Us", path: "/" },
    { name: "Achievements", path: "/" },
    { name: "Career", path: "/" },
    { name: "Resources", path: "/" },
    { name: "Gallery", path: "/" },
    { name: "Contact", path: "/" },
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
      <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6 lg:px-8 pt-4 md:pt-5 lg:pt-6">
        <nav
          className={`mx-auto max-w-7xl
          px-5 sm:px-6 lg:px-8 rounded-2xl lg:rounded-3xl 
          flex items-center justify-between gap-4
          transition-all duration-500 ease-out
          ${
            isScrolled
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
          <div className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-6 max-w-4xl mx-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className={`group font-medium whitespace-nowrap transition-all duration-300
                text-sm xl:text-base
                ${
                  isScrolled
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
              </a>
            ))}
          </div>

          {/* Donate Button - Enhanced hover effect */}
          <div className="hidden lg:block shrink-0">
            <button
              className={`px-7 xl:px-9 py-3 rounded-full font-semibold transition-all duration-300 text-sm xl:text-base
              hover:scale-105 active:scale-95
              ${
                isScrolled
                  ? "bg-yellow-500 text-black hover:bg-yellow-600 shadow-lg hover:shadow-xl"
                  : "bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg hover:shadow-xl"
              }`}
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
              className={`h-6 w-6 transition-colors duration-300 ${
                isScrolled ? "text-pink-800" : "text-white"
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
        ${
          isMenuOpen
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
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-pink-800 hover:text-pink-600 text-xl sm:text-2xl font-semibold transition-all duration-300 w-full text-center py-3 rounded-xl hover:bg-pink-50
              ${isMenuOpen ? 'animate-fade-in' : ''}`}
              style={{
                animationDelay: isMenuOpen ? `${i * 50}ms` : '0ms',
              }}
            >
              {link.name}
            </a>
          ))}
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
