import React, { useState } from "react";

const Career = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        desiredPosition: "",
        resume: null,
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                desiredPosition: "",
                resume: null,
                message: "",
            });
            
            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Career</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            CAREER
                        </h1>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* Notice Section */}
                    <div className="mb-8 bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 md:p-8 shadow-md border border-pink-200">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                ℹ️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-pink-800 mb-2">Currently No Open Positions</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We currently have no open positions, but we'd love to hear from you! Please submit your details 
                                    using the form below, and we'll keep your information on file for future opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-600 to-pink-700 p-6 text-white">
                            <h2 className="text-2xl md:text-3xl font-bold">Job Application Form</h2>
                            <p className="text-pink-100 mt-2">Fill out the form below to submit your application</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 md:p-8">
                            {/* Full Name */}
                            <div className="mb-6">
                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                                    placeholder="+91 1234567890"
                                />
                            </div>

                            {/* Desired Position */}
                            <div className="mb-6">
                                <label htmlFor="desiredPosition" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Desired Position <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="desiredPosition"
                                    name="desiredPosition"
                                    value={formData.desiredPosition}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors"
                                    placeholder="e.g., Field Coordinator, Program Manager"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div className="mb-6">
                                <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Upload Your Biodata / Resume <span className="text-pink-600">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        onChange={handleChange}
                                        required
                                        accept=".pdf,.doc,.docx"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                                {formData.resume && (
                                    <p className="text-sm text-pink-600 mt-2">✓ Selected: {formData.resume.name}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors resize-none"
                                    placeholder="Tell us about yourself and why you're interested in joining Nav Astitva Foundation..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-bold rounded-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "SEND MESSAGE"
                                    )}
                                </button>
                            </div>

                            {/* Success Message */}
                            {submitStatus === "success" && (
                                <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold text-green-800">Thank you for your application!</p>
                                            <p className="text-sm text-green-700">We have received your details. Our representative will contact you soon.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-200">
                        <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">Why Join Nav Astitva Foundation?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div className="text-center">
                                <div className="text-4xl mb-3">🌟</div>
                                <h4 className="font-semibold text-pink-800 mb-2">Make a Difference</h4>
                                <p className="text-sm text-gray-600">Be part of meaningful work that impacts thousands of lives</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">🤝</div>
                                <h4 className="font-semibold text-pink-800 mb-2">Collaborative Environment</h4>
                                <p className="text-sm text-gray-600">Work with passionate individuals dedicated to social change</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">📈</div>
                                <h4 className="font-semibold text-pink-800 mb-2">Growth Opportunities</h4>
                                <p className="text-sm text-gray-600">Develop your skills while contributing to a greater cause</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Career;

