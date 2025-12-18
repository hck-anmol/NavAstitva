import React from "react";

const About = () => {
    const founders = [
        {
            name: "Amrita Singh",
            role: "Co-Founder",
            quote: "Amrita Singh is a dynamic and accomplished individual who is dedicated to making a positive impact on society. She is a science graduate and environmentalist who founded the Nav Astitwa Foundation (NAF) in 2012, with the goal of improving the health and hygiene of women and children.",
            image: "https://via.placeholder.com/300x400?text=Amrita+Singh", // Placeholder - replace with actual image
        },
        {
            name: "Pallavi Sinha",
            role: "Co-Founder",
            quote: "Pallavi Sinha is a dynamic and experienced woman who has dedicated her life to serving society. She is a Josephite and a computer graduate from Patna Women's College. In 2012, she founded the Nav Astitwa Foundation (NAF), that works exclusively for health and hygiene programs for women and children.",
            image: "https://via.placeholder.com/300x400?text=Pallavi+Sinha", // Placeholder - replace with actual image
        },
    ];

    const boardMembers = [
        { name: "Ujjawal Kumar", role: "State Project Coordinator", image: "https://via.placeholder.com/200x200?text=Ujjawal+Kumar" },
        { name: "Veena Manvi", role: "Advisory Committee", image: "https://via.placeholder.com/200x200?text=Veena+Manvi" },
        { name: "Aman Kumar", role: "Team Member", image: "https://via.placeholder.com/200x200?text=Aman+Kumar" },
        { name: "Ranjan Mistry", role: "Technical Team", image: "https://via.placeholder.com/200x200?text=Ranjan+Mistry" },
        { name: "Dr. Binda Singh", role: "Advisory Committee", image: "https://via.placeholder.com/200x200?text=Dr.+Binda+Singh" },
        { name: "Dr. Saurabh Singh", role: "Advisory Committee", image: "https://via.placeholder.com/200x200?text=Dr.+Saurabh+Singh" },
        { name: "Gopal Kumar", role: "Team Member", image: "https://via.placeholder.com/200x200?text=Gopal+Kumar" },
        { name: "Jyoti Kumari", role: "Field Coordinator", image: "https://via.placeholder.com/200x200?text=Jyoti+Kumari" },
        { name: "Md. Ammanullah", role: "Technical Team", image: "https://via.placeholder.com/200x200?text=Md.+Ammanullah" },
        { name: "Nitu Kumari", role: "Team Member", image: "https://via.placeholder.com/200x200?text=Nitu+Kumari" },
        { name: "Shantanu Singh", role: "Advisory Committee", image: "https://via.placeholder.com/200x200?text=Shantanu+Singh" },
        { name: "Shobha Gupta", role: "Advisory Committee", image: "https://via.placeholder.com/200x200?text=Shobha+Gupta" },
        { name: "Shreeprakash Thakur", role: "State Technical Head", image: "https://via.placeholder.com/200x200?text=Shreeprakash+Thakur" },
    ];

    const fourAApproach = [
        {
            title: "AVAILABILITY",
            description: "The goal is to make sanitary pads accessible and affordable by setting up sanitary banks and installing vending machines in public institutions and other places for emergencies. The vending machines also include disposal options for used pads.",
            icon: "📦",
        },
        {
            title: "APPOINTMENT",
            description: "We arrange consultations between women and physicians, allowing them to talk about their health concerns.",
            icon: "📅",
        },
        {
            title: "AYUSH",
            description: "We promote AYUSH i.e. advocacy of homeopathy. AYUSH helps provide a complete cure of disease which is very effective in menstrual-related problems.",
            icon: "🌿",
        },
        {
            title: "AWARENESS",
            description: "We connect women with doctors by fixing an appointment with them. This helps them to discuss their health issues.",
            icon: "📢",
        },
    ];

    const keyFacts = [
        { number: "1 Lac+", label: "Sanitary absorbent distributed to women and adolescents" },
        { number: "4 Lac+", label: "People have been served nutritional food at only Rs. 5 under the Project \"Sai ki Rasoi\"" },
        { number: "250+", label: "Sanitary pad banks opened" },
        { number: "300+", label: "Sanitary vending machines installed" },
        { number: "1000+", label: "MHM awareness sessions conducted in schools" },
        { number: "6 Lac+", label: "Women and adolescents approached on MHM awareness" },
    ];

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">About Us</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            ABOUT US
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 font-medium italic">
                            Breaking Barriers, Improving Futures
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* About Organization Section */}
                    <section className="mb-16">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-pink-100">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                Nav Astitva Foundation is a non-profit organization based in Bihar, India that works towards 
                                improving the health and hygiene, education, and empowerment of women and adolescents. The organization 
                                has a primary focus on menstrual health and hygiene, and works towards addressing the issues 
                                surrounding it in a holistic and inclusive manner.
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                The organization was founded in 2012 by two dynamic personalities, Amrita Singh and Pallavi Sinha, 
                                and is registered under the Societies Registration Act XXI of 1860. Since its inception, Nav Astitva 
                                Foundation has been dedicated to addressing the pressing issues of health and hygiene, education, and 
                                empowerment through partnerships and collaborations with various government and non-government organizations 
                                such as UNICEF, ICDS, Jeevika, Rotary Club of Bihar, Indian Red Cross Society, Bihar Government, Bharat 
                                Petroleum Corporation Limited, and many others.
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                One of the major initiatives of the organization is the opening of the first Sanitary Pad Bank in Bihar. 
                                This project aims to provide affordable and accessible sanitary pads to women and girls, particularly in 
                                rural areas, to help them maintain their menstrual health and hygiene. Another initiative is the Hunger 
                                Project named as Sai ki Rasoi, which aims to provide nutritious meals to underprivileged women and girls.
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                Overall, Nav Astitva Foundation is a dedicated organization that is working towards addressing the pressing 
                                issues of health and hygiene, education, and empowerment of women and adolescents in Bihar. The organization's 
                                holistic and inclusive approach, partnerships and collaborations with various government and non-government 
                                organizations, and its various initiatives and programs are making a significant impact in the lives of the 
                                women and girls in Bihar.
                            </p>
                        </div>
                    </section>

                    {/* Vision and Mission */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-pink-200">
                            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6 text-center">
                                Vision and Mission
                            </h2>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                                The vision and mission of Nav Astitva Foundation is to uplift the lives of underprivileged individuals, 
                                with a focus on women and girls, through education, health, empowerment, and nutritious food.
                            </p>
                        </div>
                    </section>

                    {/* Our Founders */}
                    <section className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-3">Our Founders</h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {founders.map((founder, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Image Section with Gradient Overlay */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                        {/* Gradient Overlay - Light at top, dark at bottom */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900" />
                                    </div>
                                    
                                    {/* Quote Section - Dark Background */}
                                    <div className="bg-gray-800 text-white p-6">
                                        <p className="text-base md:text-lg leading-relaxed mb-4">
                                            "{founder.quote}"
                                        </p>
                                        
                                        {/* Separator Line */}
                                        <div className="w-full h-px bg-white/30 mb-4" />
                                        
                                        {/* Attribution */}
                                        <div>
                                            <p className="text-white font-semibold text-lg">
                                                — {founder.name}
                                            </p>
                                            <p className="text-white/80 text-sm mt-1">
                                                {founder.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4A Approach */}
                    <section className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-2">
                                Our <span className="text-pink-600">4A</span> Approach
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {fourAApproach.map((approach, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="text-5xl mb-4 text-center">{approach.icon}</div>
                                    <h3 className="text-xl font-bold text-pink-800 mb-3 text-center">{approach.title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed text-center">{approach.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Board Members */}
                    <section className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-3">Board Members</h2>
                            <p className="text-gray-600 mb-4">Our Mission Awareness of Society</p>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {boardMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-4 shadow-md border border-pink-100 hover:shadow-lg hover:border-pink-300 transition-all duration-300 text-center"
                                >
                                    <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                    </div>
                                    <h4 className="font-bold text-pink-800 text-sm mb-1">{member.name}</h4>
                                    <p className="text-gray-600 text-xs">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* How We Started */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-pink-200">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-2">How We Started</h2>
                                <p className="text-gray-600 mb-4">Our Mission Awareness of Society</p>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                            </div>
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-pink-100">
                                <div className="text-center mb-6">
                                    <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-bold rounded-full text-lg">
                                        In Year 2012
                                    </span>
                                </div>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    2 Ladies, stepped into the world of social service and started awaring the slum dwellers with a basic 
                                    literacy programme, simple calculations of money and wages per day, Health & Hygiene awareness related 
                                    to their urinals, bathing habits, cleaning surrounding to be safe & protected.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    Organized Regular Health Clinics weekly for women and children to keep them healthy. Spreading quality 
                                    time with these slum women brought us closer to a few true hidden facts and that was the plight of slum 
                                    women during periods. A pandora box generating innumerable diseases. A bad foul stink could be noticed from 
                                    them that was due to not taking bath during periods, reusing dirty clothes during menstruation and so many 
                                    wrong practices.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    The journey of challenges began, when we stepped out of our home and entered theirs. 2012 completely differed 
                                    as no PADMAN was there to broaden the mindset of people. The 2 Ladies with the aim of "Swachh Betiyan Swachh 
                                    Samaj" went on alone with firm determination despite all mockeries, fun, scoldings & challenges. Organized 
                                    Health Checkups, by Gynecologist for the needy & unprivileged women weekly. Provided them free medical 
                                    treatment along with recommended medicines.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Key Facts */}
                    <section className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-2">Some Key Facts</h2>
                            <p className="text-gray-600 mb-4">NAF's Impact in Empowering Women and Communities</p>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {keyFacts.map((fact, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-3">{fact.number}</div>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{fact.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default About;
