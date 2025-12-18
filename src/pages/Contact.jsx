import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                message: "",
            });
            
            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: "Our Office",
            content: "K-1, P.C.Colony, Kankarbagh, Patna",
            link: null,
        },
        {
            icon: FaEnvelope,
            title: "Email Address",
            content: "navastitvafoundation@gmail.com",
            link: "mailto:navastitvafoundation@gmail.com",
        },
        {
            icon: FaPhone,
            title: "Phone Number",
            content: "+91 9234291600\n+91 7979887079",
            link: "tel:+919234291600",
        },
        {
            icon: FaClock,
            title: "Office Time",
            content: "Mon to Sat (9:00am - 5:00pm)",
            link: null,
        },
    ];

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Contact Us</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            GET IN TOUCH
                        </h1>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-pink-600 to-pink-700 p-6 text-white">
                                <h2 className="text-2xl md:text-3xl font-bold">Send a Message</h2>
                                <p className="text-pink-100 mt-2">We'd love to hear from you</p>
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

                                {/* Message */}
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message <span className="text-pink-600">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-colors resize-none"
                                        placeholder="Your message here..."
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
                                                Sending...
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
                                                <p className="font-semibold text-green-800">Thank you for your inquiry!</p>
                                                <p className="text-sm text-green-700">We have received your inquiry. Our representative will contact you soon on the provided contact number.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                                <IconComponent />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-pink-800 mb-2">{info.title}</h3>
                                                {info.link ? (
                                                    <a
                                                        href={info.link}
                                                        className="text-gray-700 hover:text-pink-600 transition-colors whitespace-pre-line"
                                                    >
                                                        {info.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Additional Info Card */}
                            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
                                <h3 className="text-xl font-bold text-pink-800 mb-4">We're Here to Help</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Whether you have questions about our programs, want to get involved, or need support, 
                                    we're here to assist you. Reach out to us through any of the contact methods above, 
                                    and we'll get back to you as soon as possible.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <a
                                        href="tel:+919234291600"
                                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-semibold text-sm"
                                    >
                                        📞 Call Now
                                    </a>
                                    <a
                                        href="mailto:navastitvafoundation@gmail.com"
                                        className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors font-semibold text-sm"
                                    >
                                        ✉️ Send Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-12">
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-pink-600 to-pink-700 p-6 text-white">
                                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                    <FaMapMarkerAlt />
                                    Find Us
                                </h2>
                                <p className="text-pink-100 mt-2">K-1, P.C.Colony, Kankarbagh, Patna</p>
                            </div>
                            <div className="w-full h-96 md:h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1346702879587!2d85.15190627517747!3d25.600440877453583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed588e9f96ba79%3A0x1466d2c1e850fc04!2sNav%20Astitva%20Foundation!5e0!3m2!1sen!2sin!4v1766088026424!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Nav Astitva Foundation Office Location"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="p-6 bg-gray-50 border-t border-pink-100">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=K-1+P.C.Colony+Kankarbagh+Patna"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-semibold"
                                >
                                    <FaMapMarkerAlt />
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
