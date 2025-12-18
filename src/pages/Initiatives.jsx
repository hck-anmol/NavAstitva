import React from "react";
import initiativesHeader from "../assets/our_initiative.png";
import padBanksImg from "../assets/Sanitary pad banks opened.webp";
import talkPeriodsImg from "../assets/talk-on-periods-image.jpg";
import hungerProjectImg from "../assets/hunger-project-image.webp";
import awareSocietyImg from "../assets/aware-of-society-image.webp";

const Initiatives = () => {
    const initiatives = [
        {
            title: "OPENING OF PAD BANKS",
            description:
                "A science graduate and an environmentalist entered the working world as the Founder of Nav Astitwa Foundation (NGO) in 2012. Intensively work for Health and Hygiene of Women and Children. Undergoes MHM programmes such as “Swachh Betiyan Swachh Samaj”.",
            image: padBanksImg,
            link: "https://navastitvafoundation.org/opeaning-of-pad-bank.html",
        },
        {
            title: "TALK ON PERIODS",
            description:
                "A science graduate and an environmentalist entered the working world as the Founder of Nav Astitwa Foundation (NGO) in 2012. Intensively work for Health and Hygiene of Women and Children. Undergoes MHM programmes such as “Swachh Betiyan Swachh Samaj”.",
            image: talkPeriodsImg,
            link: "https://navastitvafoundation.org/talk-on-period.html",
        },
        {
            title: "HUNGER PROJECTS - SAI KI RASOI",
            description:
                "A science graduate and an environmentalist entered the working world as the Founder of Nav Astitwa Foundation (NGO) in 2012. Intensively work for Health and Hygiene of Women and Children. Undergoes MHM programmes such as “Swachh Betiyan Swachh Samaj”.",
            image: hungerProjectImg,
            link: "https://navastitvafoundation.org/hunger-project.html",
        },
        {
            title: "AWARENESS OF SOCIETY",
            description:
                "A science graduate and an environmentalist entered the working world as the Founder of Nav Astitwa Foundation (NGO) in 2012. Intensively work for Health and Hygiene of Women and Children. Undergoes MHM programmes such as “Swachh Betiyan Swachh Samaj”.",
            image: awareSocietyImg,
            link: "https://navastitvafoundation.org/aware-of-society.html",
        },
    ];

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Our Initiatives</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            OUR INITIATIVES
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 font-medium">
                            Our Mission – Awareness of Society
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* Header Image */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-md shadow-pink-100">
                        <img
                            src={initiativesHeader}
                            alt="Nav Astitva Foundation initiatives"
                            className="w-full max-h-80 object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Initiatives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {initiatives.map((initiative) => (
                            <article
                                key={initiative.title}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-200 overflow-hidden flex flex-col border border-pink-100 hover:border-pink-200 hover:-translate-y-1"
                            >
                                {/* Slightly smaller image area */}
                                <div className="relative w-full pt-[55%] overflow-hidden">
                                    <img
                                        src={initiative.image}
                                        alt={initiative.title}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <span className="inline-block w-10 h-1 bg-pink-500 rounded-full mb-3" />
                                    <h2 className="text-xl md:text-2xl font-semibold text-pink-800 mb-2 leading-snug">
                                        {initiative.title}
                                    </h2>
                                    <p className="text-gray-700 text-sm md:text-base mb-4 flex-1 leading-relaxed">
                                        {initiative.description}
                                    </p>
                                    <a
                                        href={initiative.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold text-sm md:text-base"
                                    >
                                        Read More
                                        <span className="ml-1">&#8594;</span>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Initiatives;