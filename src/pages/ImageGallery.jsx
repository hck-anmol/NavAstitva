import React, { useState } from 'react';

// Importing your assets
import img1 from '../assets/imagegallery/img-1-2425.webp';
import img2 from '../assets/imagegallery/img-2-2425.webp';
import img3 from '../assets/imagegallery/img-3-2425.webp';
import img4 from '../assets/imagegallery/img-4-2425.webp';
import img6 from '../assets/imagegallery/img-6-2425.webp';
import img8 from '../assets/imagegallery/img-8-2425.webp';
import img9 from '../assets/imagegallery/img-9-2425.webp';
import img10 from '../assets/imagegallery/img-10-2425.webp';
import img11 from '../assets/imagegallery/img-11-2425.webp';
import img12 from '../assets/imagegallery/img-12-2425.webp';

const ImageGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    // 1. Array of unique imported images and captions
    const baseGallery = [
        { url: img1, title: "3-Month Stitching Training Program" },
        { url: img2, title: "Skill Development - Beautician Course" },
        { url: img3, title: "Sai Ki Rasoi: Ending Hunger" },
        { url: img4, title: "Girls Empowerment Awareness Session" },
        // { url: img5, title: "15 Days Mehendi Training Program" },
        { url: img6, title: "World Menstruation Hygiene Day" },
        // { url: img7, title: "Community Outreach Program" },
        { url: img8, title: "Youth Skill Enhancement" },
        { url: img9, title: "Health Awareness Seminar" },
        { url: img10, title: "Primary Education Support" },
        { url: img11, title: "Vocational Excellence Awards" },
        { url: img12, title: "Cleanliness Drive Initiative" },
    ];

    // 2. Generate 50 items by repeating the base gallery
    const fullGallery = Array.from({ length: 50 }, (_, i) => ({
        ...baseGallery[i % baseGallery.length],
        id: i
    }));

    return (
        <div className="bg-gray-50 min-h-screen p-4 md:p-10">
            {/* Page Header (Same style as About Us) */}
            <div className="max-w-7xl mx-auto mb-14 text-center *:mt-20">
                {/* Breadcrumb */}
                <p className="text-sm text-gray-500 mb-3">
                    Home / <span className="text-pink-700 font-medium">Gallery</span>
                </p>

                {/* Page Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                    OUR IMPACT GALLERY
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-700 font-medium italic">
                    Moments That Reflect Change
                </p>

                {/* Gradient Divider */}
                <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
            </div>


            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {fullGallery.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        onClick={() => setSelectedImg(item)}
                    >
                        {/* Image Container with fixed Aspect Ratio */}
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                        </div>

                        {/* Caption Section */}
                        <div className="p-5">
                            <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider line-clamp-2 leading-tight">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Lightbox / Modal --- */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-5 right-5 text-white text-4xl font-light">&times;</button>
                    <div className="max-w-4xl w-full flex flex-col items-center">
                        <img
                            src={selectedImg.url}
                            alt={selectedImg.title}
                            className="max-h-[80vh] rounded-lg shadow-2xl"
                        />
                        <p className="mt-4 text-white text-xl font-medium text-center">{selectedImg.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;