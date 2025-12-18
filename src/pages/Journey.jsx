import React, { useState } from "react";
import journeyHeader from "../assets/growth.png";

const Journey = () => {
    const [expandedYear, setExpandedYear] = useState("2024-2025");

    const journeyData = [
        {
            year: "2024-2025",
            initiatives: [
                "15 days Mehendi Training Program In Association with Rotary Club Patna Millenium",
                "3-Month Vocational Training Program In Association with Lions International Club",
                "3-Month Stitching Training Program In Association with Lions International Club",
                "World Mensuration Hygiene Day Initiative by Nav Astitva Foundation",
                "Disaster Risk Reduction Project In Association with Reliance Foundation",
                "1-Day Awareness Session under Girls' Empowerment Mission In Collaboration with BRBCL",
                "Menstrual Hygiene Management (MHM)Training Program",
                "SAI KI RASOI: Where Hunger Ends and Humanity Begins",
                "Skill Development Training Program — Phool Jhaadu Making In Association with BRBCL and Sangini Ladies Club",
                "Breaking Barriers with Menstrual Health Education In Association with BRBCL",
                "Skill Development Training Program — Beautician Course In Association with NTPC",
                "Cloth Distribution among needy people",
                "Awareness session on Cyber Security for adolescent girls",
                "Nav Astitwa Foundation & Medanta Hospital conduct CPR training for college going student",
            ],
        },
        {
            year: "2023-2024",
            initiatives: [
                "Continued several previous year programmes",
                "NTPC MHM Awareness programme",
                "MHM Kit Distribution Among Adolescent Girls",
                "A skill development progam (MEDP) on Madhubani Art for SHG Women in collaboration with Nabard",
                "Madhubani Art Training among college going girls",
                "Supply and Installation of Manual Sanitary Vending Machines and Incinerators",
            ],
        },
        {
            year: "2021-2022",
            initiatives: [
                "Continued several previous year programmes",
                "In partnership with UNICEF and various key line departments (Jeevika, Health, Education, Social, and ICDS) initiated Master Training Programme under \"Strengthening rural women\"",
                "Launched MHM action plan in two districts Purnia and Sitamarhi",
                "Creating MHM awareness among the adolescent girls belonging to rural communities",
                "Started a free sewing center to empower women and girls through stitching skills",
                "Generating employment through the production and selling of Acchar, Bari, Papad",
                "Took a big initiative of making cotton cloth pads to provide clean and menstrual absorbent for those underprivileged girls and women who can't afford costly sanitary pads",
            ],
        },
        {
            year: "2020",
            initiatives: [
                "Continued some previous year programmes",
                "Free ration distribution in collaboration with Dainik Bhaskar (25 thousand households)",
                "Availability of packed cooked food to migrants during COVID",
                "Distribution of Sanitary pads to all the Girls and Women during COVID lockdown",
                "Opened mobile sanitary pad banks to provide sanitary pads at doorsteps, to generate employment for women who were suffering from the impact of the COVID situation",
                "Launched She care health card for underprivileged women who can't afford costly health checkups",
                "Online medical consultancy programme \"Sawal Aapke Jawab Hamare\" with experts and doctors",
                "Continued several previous year programmes",
            ],
        },
        {
            year: "2019",
            initiatives: [
                "Continued all previous year programmes",
                "Installation of the sanitary vending machine along with incinerator (At various schools)",
                "MHM awareness campaign in 38 model schools in 38 districts of Bihar in partnership with UNICEF and BEPC under the programme \"Mukhymantri Kishori Swasthya Yojna\"",
                "In collaboration with the DMI MHM awareness programme in Bhitharwa block of Champaran district",
                "In collaboration with the airport authority of India, MHM awareness programme was organized in all slums of Patna",
            ],
        },
        {
            year: "2018",
            initiatives: [
                "Launched MH kit containing 12 Pkt pads, 2 Panties, 1 Personal towel, 1 Dettol ND 1 Booklet on MHM, to promote usage of sanitary pads, Rs. 300 provide to girls through Bihar Mukhyamantri Kishori Swasthya Yojana",
                "Started Food venture \"Hunger Project-Sai ki Rasoi\"",
            ],
        },
        {
            year: "2017",
            initiatives: [
                "Continued all programmes of year 2016",
                "Swach Betiyaan Swach Samaj",
                "Establishment of First-time sanitary pad bank",
                "Regular awareness campaign on MHM under \"Swach Betiyaan swacch samaj\"",
                "Opening of Sanitary pad bank in 6 districts of Bihar",
                "Installation of the sanitary vending machine along with incinerator (JD women's college and Patna Junction)",
            ],
        },
        {
            year: "2016",
            initiatives: [
                "Continued all programmes of year 2015",
            ],
        },
        {
            year: "2015",
            initiatives: [
                "Continued all programmes of year 2014",
                "\"Betiyaan Hamari Pehchan Hamara Samman\" Felicitation Programme",
            ],
        },
        {
            year: "2014",
            initiatives: [
                "Continued all programmes of year 2013",
            ],
        },
        {
            year: "2013",
            initiatives: [
                "Continued all programmes of year 2012",
                "Sanitary Pad Distribution Programme with Red Cross Society",
                "Eye checkup camp and Cataract operation",
            ],
        },
        {
            year: "2012",
            initiatives: [
                "Basic Literacy Programme for Women and Girl child",
                "Weekly Regular Health Clinic",
                "Cancer Awareness Programme",
            ],
        },
    ];

    const getYearColor = (year) => {
        const colors = {
            "2024-2025": "from-emerald-500 to-emerald-600",
            "2023-2024": "from-blue-500 to-blue-600",
            "2021-2022": "from-purple-500 to-purple-600",
            "2020": "from-red-500 to-red-600",
            "2019": "from-orange-500 to-orange-600",
            "2018": "from-yellow-500 to-yellow-600",
            "2017": "from-pink-500 to-pink-600",
            "2016": "from-indigo-500 to-indigo-600",
            "2015": "from-cyan-500 to-cyan-600",
            "2014": "from-teal-500 to-teal-600",
            "2013": "from-green-500 to-green-600",
            "2012": "from-gray-500 to-gray-600",
        };
        return colors[year] || "from-pink-500 to-pink-600";
    };

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Our Journey</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            OUR JOURNEY AT A GLANCE
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 font-medium">
                            A Decade of Impact and Transformation
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* Header Image */}
                    <div className="mb-16 rounded-2xl overflow-hidden shadow-md shadow-pink-100">
                        <img
                            src={journeyHeader}
                            alt="Nav Astitva Foundation Journey"
                            className="w-full max-h-80 object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 transform md:-translate-x-1/2 hidden md:block" />

                        {/* Journey Years */}
                        <div className="space-y-8 md:space-y-12">
                            {journeyData.map((yearData, index) => {
                                const isExpanded = expandedYear === yearData.year;
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={yearData.year}
                                        className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 ${
                                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                    >
                                        {/* Timeline dot - aligned to center of year badge */}
                                        <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-pink-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 hidden md:block top-6" />

                                        {/* Year Badge */}
                                        <div className={`w-full md:w-1/2 flex items-center ${isEven ? "md:pr-12 md:justify-end" : "md:pl-12 md:justify-start md:order-2"}`}>
                                            <button
                                                onClick={() => setExpandedYear(isExpanded ? "" : yearData.year)}
                                                className={`w-full max-w-md bg-gradient-to-br ${getYearColor(yearData.year)} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                                            >
                                                <div className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-between">
                                                    YEAR {yearData.year}
                                                    <span className="text-lg">
                                                        {isExpanded ? "−" : "+"}
                                                    </span>
                                                </div>
                                                <p className="text-sm opacity-90">
                                                    {yearData.initiatives.length} Initiative{yearData.initiatives.length !== 1 ? "s" : ""}
                                                </p>
                                            </button>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`w-full md:w-1/2 flex items-center ${isEven ? "md:pl-12 md:justify-start" : "md:pr-12 md:justify-end md:order-1"}`}>
                                            <div className={`w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden border-2 border-pink-100 transition-all duration-300 ${
                                                isExpanded ? "shadow-xl border-pink-300" : ""
                                            }`}>
                                                <div className={`overflow-hidden transition-all duration-500 ${
                                                    isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                                                }`}>
                                                    <div className="p-6">
                                                        <div className="space-y-3">
                                                            {yearData.initiatives.map((initiative, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg border-l-4 border-pink-500 hover:bg-pink-100 transition-colors"
                                                                >
                                                                    <span className="text-pink-600 font-bold mt-1">•</span>
                                                                    <p className="text-gray-800 text-sm leading-relaxed flex-1">
                                                                        {initiative}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                {!isExpanded && (
                                                    <div className="p-6 text-center text-gray-500 text-sm">
                                                        Click to view initiatives
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="mt-20 bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 md:p-12 border border-pink-200 shadow-lg">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
                                A Journey of Growth and Impact
                            </h3>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                From humble beginnings in 2012 with basic literacy and health programs, 
                                Nav Astitva Foundation has grown into a comprehensive organization impacting 
                                thousands of lives across Bihar. Our journey reflects our commitment to 
                                women's empowerment, health and hygiene, skill development, and community transformation.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl font-bold text-pink-600">12+</div>
                                    <div className="text-sm text-gray-600 mt-1">Years</div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl font-bold text-pink-600">50K+</div>
                                    <div className="text-sm text-gray-600 mt-1">Lives Impacted</div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl font-bold text-pink-600">100+</div>
                                    <div className="text-sm text-gray-600 mt-1">Programs</div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl font-bold text-pink-600">20+</div>
                                    <div className="text-sm text-gray-600 mt-1">Partners</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Journey;

