import React from "react";
import milestonesHeader from "../assets/our_milestones.png";
import padBanksImg from "../assets/Sanitary pad banks opened.webp";
import talkPeriodsImg from "../assets/talk-on-periods-image.jpg";
import awareSocietyImg from "../assets/aware-of-society-image.webp";

const Milestones = () => {
    const milestones = [
        {
            year: "2021 - 2022",
            title: "NAF IN COLLABORATION WITH UNICEF AND ALL KEY LINE DEPARTMENTS LIKE JEEVIKA, HEALTH, EDUCATION, SOCIAL WELFARE, AND ICDS INITIATED MASTER TRAINING PROGRAMS",
            description: "This training was given at each level of Jeevika women workers first at the CLF level (district level), second at community mobilizer training (at block level), and last at the SHG level (panchayat level). The motive behind this training was to create 500 master trainers on MHM in Jeevika so that these trained cadres could reach minimum of 50,000 rural community women.",
            images: [awareSocietyImg, awareSocietyImg], // Placeholder - you can replace with actual training images
            link: "#",
        },
        {
            year: "2019",
            title: "NAF IN COLLABORATION WITH UNICEF AND BEPC HAS STARTED AN AWARENESS CAMPAIGN ON MHM",
            description: "NAF in collaboration with UNICEF and BEPC has started an Awareness campaign on MHM in 38 model schools of Bihar in all 38 districts. This campaign was a milestone for MHM in Bihar in breaking the silence and taboos of periods that existed in the society either it is rural or urban. We approached thousands of girls and women in both urban and rural Bihar to generate awareness of MHM and helped them by providing factual information about periods and invoked positive thoughts about periods. We even helped them by giving sanitary pads at a subsidized rate in various colleges, schools, villages, slums, etc.",
            images: [awareSocietyImg, awareSocietyImg], // Placeholder - you can replace with actual awareness images
            link: "#",
        },
        {
            year: "2018",
            title: "STARTS OPEN DIALOGUE ON MHM \"TALK ON PERIODS\"",
            subtitle: "Bath Karni Hai Tho Karni Hai, period Hi Tho Hai",
            description: "Nav Astitva Foundation was the first organization in Bihar to start an open Dialogue on MHM. This event \"Talk on periods\" was organized and open dialogue was established between intellectual, Respected people, students, males, females, and media on the ignited and ignored topic called the period.",
            images: [talkPeriodsImg, awareSocietyImg],
            link: "#",
        },
        {
            year: "2017",
            title: "OPENING OF SANITARY PAD BANKS",
            description: "With the support of the Red Cross Society, we put our effort into finding remedies for problems related to menstruation among slums women. We started distributing them cotton cloth pads (absorbents) to use during their period. This free distribution was continuously done for consecutive 2 years. But it was disgusting when the output of these two years was zero i.e useless. A survey made by NAF Team in 2015 emphasized the fact that free distribution of anything nullifies its importance.",
            images: [padBanksImg, padBanksImg],
            link: "#",
        },
        {
            year: "2017",
            title: "INSTALLATION OF SANITARY VENDING MACHINES AT SCHOOLS, COLLEGES AND PUBLIC PLACES",
            description: "Installation of 1st sanitary vending machine and pad disposal machine (incinerator) was installed in J.D women's college at Patna in Bihar for the first time. 2nd machine was installed at Patna junction for train travelers women and girls to provide sanitary pads in an emergency. This was the first initiative in India which was taken by Nav Astitwa Foundation in 2018 Feb. NAF installed a sanitary vending machine at Patna airport. Patna airport was the first airport in India to provide this unique facility to Air travelers. NAF installed the first sanitary vending machine on petrol pumps in India in collaboration with BPCL at Gopalganj.",
            images: [padBanksImg, padBanksImg], // Placeholder - you can replace with actual vending machine images
            link: "#",
        },
    ];

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Our Milestones</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            OUR MILESTONES
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 font-medium">
                            A Journey of Impact and Transformation
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* Header Image */}
                    <div className="mb-16 rounded-2xl overflow-hidden shadow-md shadow-pink-100">
                        <img
                            src={milestonesHeader}
                            alt="Nav Astitva Foundation milestones"
                            className="w-full max-h-80 object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 transform md:-translate-x-1/2 hidden md:block" />

                        {/* Milestones */}
                        <div className="space-y-16 md:space-y-24">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-pink-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 hidden md:block" />

                                    {/* Year Badge */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:order-2"}`}>
                                        <div className="bg-gradient-to-br from-pink-600 to-pink-800 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="text-2xl md:text-3xl font-bold mb-2">
                                                YEAR {milestone.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-1"}`}>
                                        <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-100 group">
                                            {/* Images */}
                                            {milestone.images && milestone.images.length > 0 && (
                                                <div className="grid grid-cols-2 gap-2 p-2">
                                                    {milestone.images.slice(0, 2).map((img, imgIndex) => (
                                                        <div
                                                            key={imgIndex}
                                                            className="relative w-full pt-[75%] overflow-hidden rounded-lg"
                                                        >
                                                            <img
                                                                src={img}
                                                                alt={`${milestone.title} - Image ${imgIndex + 1}`}
                                                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="p-6">
                                                <span className="inline-block w-12 h-1 bg-pink-500 rounded-full mb-4" />
                                                <h2 className="text-xl md:text-2xl font-bold text-pink-800 mb-3 leading-tight">
                                                    {milestone.title}
                                                </h2>
                                                {milestone.subtitle && (
                                                    <p className="text-lg font-semibold text-pink-600 mb-3 italic">
                                                        {milestone.subtitle}
                                                    </p>
                                                )}
                                                <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                                                    {milestone.description}
                                                </p>
                                                <a
                                                    href={milestone.link}
                                                    className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold text-sm md:text-base transition-colors"
                                                >
                                                    Learn more
                                                    <span className="ml-2">&#8594;</span>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Milestones;

