import React, { useState, useEffect } from "react";
import logo from "../assets/image.png";

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
      <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6 pt-4 md:pt-6 lg:pt-8">
        <nav
          className={`mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8 rounded-2xl lg:rounded-3xl 
          flex items-center justify-between gap-4
          transition-all duration-500
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-lg shadow-lg py-3 lg:py-3"
              : "bg-pink-800 py-3 lg:py-4"
          }`}
        >
          {/* Logo - Responsive sizing */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links - Hidden on mobile/tablet */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-3 xl:gap-5 max-w-4xl mx-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className={`group font-medium whitespace-nowrap transition-colors
                text-sm xl:text-base
                ${isScrolled ? "text-pink-800 hover:text-pink-600" : "text-white hover:text-pink-100"}`}
              >
                <span className="relative inline-block pb-1">
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-full scale-x-0 origin-left transition-transform duration-300
                    ${
                      isScrolled ? "bg-pink-700" : "bg-white"
                    } group-hover:scale-x-100`}
                  />
                </span>
              </a>
            ))}
          </div>

          {/* Donate Button - Desktop only */}
          <div className="hidden lg:block shrink-0">
            <button
              className={`px-6 xl:px-8 py-2.5 rounded-full font-semibold transition-all text-sm xl:text-base
              ${
                isScrolled
                  ? "bg-yellow-500 text-black hover:bg-yellow-600 hover:shadow-lg"
                  : "bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg"
              }`}
            >
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Open menu"
          >
            <svg
              className={`h-6 w-6 ${
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-pink-50 flex flex-col items-center justify-center gap-5 font-medium transition-all duration-300 z-[60] lg:hidden
        ${
          isMenuOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 p-2 text-pink-800 hover:text-pink-600"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center gap-4 w-full px-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-pink-800 hover:text-pink-600 text-lg sm:text-xl font-medium transition-colors w-full text-center py-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Donate Button */}
        <button 
          className="mt-4 bg-yellow-500 text-black px-10 py-3 rounded-full hover:bg-yellow-600 font-semibold transition-all hover:shadow-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          Donate
        </button>
      </div>
    </>
  );
};

export default Navbar;