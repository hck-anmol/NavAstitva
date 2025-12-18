import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";
import logo_light from "../assets/h (1).png";

const Footer = () => {
    const aboutLinks = [
        { name: "Our Registrations", path: "/" },
        { name: "About Organization", path: "/" },
        { name: "Vision & Mission", path: "/" },
        { name: "Our Founders", path: "/" },
        { name: "Our Board Members", path: "/" },
    ];

    const workLinks = [
        { name: "Health and Hygiene", path: "/" },
        { name: "Hunger Project", path: "/" },
        { name: "Women Empowerment", path: "/" },
        { name: "Disaster Response", path: "/" },
        { name: "Collaborative Facilitation", path: "/" },
    ];

    const supportLinks = [
        { name: "Get Involved", path: "/" },
        { name: "Success Stories", path: "/" },
        { name: "Why Support Us", path: "/" },
    ];

    const achievementLinks = [
        { name: "Our Milestones", path: "/milestones" },
        { name: "10+ Year's Journey", path: "/journey" },
        { name: "Our Partners", path: "/" },
        { name: "Survey Reports", path: "/survey-reports" },
        { name: "Project Reports", path: "/project-reports" },
        { name: "Audit Reports", path: "/audit-reports" },
        { name: "Financials Fillings", path: "/" },
    ];

    const socialLinks = [
        { icon: FaFacebookF, path: "#", label: "Facebook" },
        { icon: FaLinkedinIn, path: "#", label: "LinkedIn" },
        { icon: FaYoutube, path: "#", label: "YouTube" },
        { icon: FaTwitter, path: "#", label: "Twitter" },
    ];

    return (
        <footer className="bg-gradient-to-br from-pink-800 via-pink-900 to-pink-950 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12">
                {/* Top Section - Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-12 border-b border-white/20">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start gap-4">
                        <img
                            src={logo_light}
                            alt="Nav Astitva Foundation"
                            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            Empowering communities and changing lives through dedicated social initiatives.
                        </p>
                    </div>

                    {/* Call Us */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold tracking-wide flex items-center gap-2 mb-2">
                            <FaPhone className="text-yellow-400" />
                            CALL US NOW
                        </h3>
                        <a
                            href="tel:+919234291600"
                            className="text-white/90 hover:text-yellow-400 transition-colors duration-300 text-base font-medium"
                        >
                            +91 9234291600
                        </a>
                        <a
                            href="tel:+917979887079"
                            className="text-white/90 hover:text-yellow-400 transition-colors duration-300 text-base font-medium"
                        >
                            +91 7979887079
                        </a>
                    </div>

                    {/* Email & Social */}
                    <div className="flex flex-col gap-4">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold tracking-wide flex items-center gap-2 mb-3">
                                <FaEnvelope className="text-yellow-400" />
                                SEND AN EMAIL
                            </h3>
                            <a
                                href="mailto:navastitvafoundation@gmail.com"
                                className="text-white/90 hover:text-yellow-400 transition-colors duration-300 text-base font-medium break-all"
                            >
                                navastitvafoundation@gmail.com
                            </a>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-bold tracking-wide mb-3">
                                CONNECT WITH US
                            </h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.path}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-yellow-400 hover:text-pink-900 transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                                    >
                                        <social.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* About Us */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            ABOUT US
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400 rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {aboutLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="text-white/80 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                                    >
                                        <span className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300">
                                            ›
                                        </span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Work */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            OUR WORK
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400 rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {workLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="text-white/80 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                                    >
                                        <span className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300">
                                            ›
                                        </span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Us */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            SUPPORT US
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400 rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="text-white/80 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                                    >
                                        <span className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300">
                                            ›
                                        </span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            ACHIEVEMENTS
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400 rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {achievementLinks.map((link, index) => (
                                <li key={index}>
                                    {link.path.startsWith("/") && !link.path.startsWith("http") ? (
                                        <Link
                                            to={link.path}
                                            className="text-white/80 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                                        >
                                            <span className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300">
                                                ›
                                            </span>
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.path}
                                            className="text-white/80 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                                        >
                                            <span className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300">
                                                ›
                                            </span>
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-black/30 backdrop-blur-sm py-6">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <p className="text-center text-white/70 text-sm">
                        © Copyright 2022 Nav Astitva Foundation, All Right Reserved |{" "}
                        <span className="text-white/90">Designed and Maintained by </span>
                        <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium">
                            WebSprouts
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;