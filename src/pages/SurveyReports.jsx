import React from "react";
import surveyReportsHeader from "../assets/survey_reports.png";

const SurveyReports = () => {
    const surveyReports = [
        {
            documentName: "Pre & Post Analysis of Community Mobilisers Training, Purnea, Phase-1",
            downloadLink: "https://navastitvafoundation.org/survey-reports/Analytical-Report-Purnea-Phase-1.pdf",
            location: "Purnea",
            phase: "Phase-1",
        },
        {
            documentName: "Pre & Post Analysis of Community Mobilisers Training, Purnea, Phase-2",
            downloadLink: "https://navastitvafoundation.org/survey-reports/Analytical-Report-Purnea-Phase-2.pdf",
            location: "Purnea",
            phase: "Phase-2",
        },
        {
            documentName: "Pre & Post Analysis of Community Mobilisers Training, Sitamarhi, Phase-1",
            downloadLink: "https://navastitvafoundation.org/survey-reports/Analytical-Report-Sitamarhi-Phase-1.pdf",
            location: "Sitamarhi",
            phase: "Phase-1",
        },
        {
            documentName: "Pre & Post Analysis of Community Mobilisers Training, Sitamarhi, Phase-2",
            downloadLink: "https://navastitvafoundation.org/survey-reports/Analytical-Report-Sitamarhi-Phase-2.pdf",
            location: "Sitamarhi",
            phase: "Phase-2",
        },
    ];

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Survey Reports</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            SURVEY REPORTS
                        </h1>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* Header Image */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-md shadow-pink-100">
                        <img
                            src={surveyReportsHeader}
                            alt="Nav Astitva Foundation Survey Reports"
                            className="w-full max-h-80 object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Creative Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {surveyReports.map((report, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-pink-100 hover:border-pink-300 transform hover:-translate-y-2"
                            >
                                {/* Decorative gradient overlay */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Content */}
                                <div className="relative p-6 md:p-8">
                                    {/* Number badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Location and Phase badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full border border-pink-200">
                                            📍 {report.location}
                                        </span>
                                        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs font-bold rounded-full shadow-md">
                                            {report.phase}
                                        </span>
                                    </div>

                                    {/* Document Title */}
                                    <h3 className="text-lg md:text-xl font-bold text-pink-800 mb-4 leading-tight pr-12 group-hover:text-pink-600 transition-colors">
                                        {report.documentName}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        Comprehensive pre and post analysis report documenting the impact of Community Mobilisers Training program.
                                    </p>

                                    {/* Download Button */}
                                    <a
                                        href={report.downloadLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        Download Report
                                    </a>
                                </div>

                                {/* Bottom accent line */}
                                <div className="h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SurveyReports;
