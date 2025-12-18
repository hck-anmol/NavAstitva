import React from "react";

const testimonials = [
    {
        name: "Alok Kumar",
        image:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        text:
            "NAF is doing an excellent job in improving the lives of people in Bihar. Their programs on health and hygiene, women empowerment, education, and hunger relief have made a significant impact in the communities they serve.",
    },
    {
        name: "Abhishek Kumar",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        text:
            "NAF's initiatives on menstrual hygiene management are commendable. Their work in spreading awareness and providing access to sanitary products has helped young girls and women lead a healthier and more dignified life."
    },
    {
        name: "Wake up Call",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
        text:
            "NAF has taken a comprehensive approach to addressing menstrual health and hygiene, recognizing that it is not just a health issue but also a social and cultural one. Their work has led to greater awareness and acceptance of menstrual health as a normal part of life.",
    },
    {
        name: "Grass and Meats",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
        text:
            "As someone who has worked with NAF on their health and hygiene programs, I can say firsthand that they are committed to creating sustainable change in communities. Their dedication and hard work have made a real difference.",
    },
];

const Star = () => (
    <svg width="20" height="20" viewBox="0 0 22 20" fill="#FF532E">
        <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
    </svg>
);

const TestimonialCard = ({ name, image, text }) => (
    <div className="group w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 pb-8 hover:-translate-y-2">
        <div className="relative flex flex-col items-center px-6 py-8">
            {/* Profile Image with enhanced styling */}
            <div className="absolute -top-14 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:border-pink-200">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name and Role - Better spacing */}
            <div className="pt-16 text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            </div>
        </div>

        {/* Quote Icon */}
        <div className="flex justify-center mb-4">
            <svg
                className="w-8 h-8 text-pink-200"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
        </div>

        {/* Testimonial Text - Better typography */}
        <p className="px-7 text-center text-base text-gray-700 leading-relaxed mb-6">
            {text}
        </p>

        {/* Star Rating - Enhanced spacing */}
        <div className="flex justify-center">
            <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="transition-transform duration-300 hover:scale-125"
                    >
                        <Star />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section className="py-20 md:py-24 px-6 md:px-10 bg-gradient-to-b from-white to-pink-50/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading - Enhanced styling */}
                <div className="mb-20 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                        WHAT PEOPLE SAY
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium">
                        Voices from our community & supporters
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-6 mx-auto" />
                </div>

                {/* Cards Grid - Better spacing for floating profile images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 place-items-center pt-14">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
