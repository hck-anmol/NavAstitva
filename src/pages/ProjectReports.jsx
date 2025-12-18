import React, { useState } from "react";
import projectReportsHeader from "../assets/h.png";

const ProjectReports = () => {
    const [selectedYear, setSelectedYear] = useState("All");

    const projectReports = [
        {
            documentName: "NABARD - Report On \"Providing 15 Days Skill Development Program (MEDP) ON Madhubani art\" for SHG women Ethnic Fashion World,Gai Ghat,Patna (Bihar).",
            downloadLink: "https://navastitvafoundation.org/project-reports/2023/Nabard-Report.pdf",
            partner: "NABARD",
            year: "2023",
            category: "Skill Development",
        },
        {
            documentName: "REC Limited - Report ON Distribution of Menstrual Health Hygiene Kits under Swachhta Pakhwada",
            downloadLink: "https://navastitvafoundation.org/project-reports/2023/REC-Limited-Report.pdf",
            partner: "REC Limited",
            year: "2023",
            category: "Health & Hygiene",
        },
        {
            documentName: "Rotary - Project Report On Empowering Underprivileged Girls Through Mehndi Art Skill Development Program",
            downloadLink: "https://navastitvafoundation.org/project-reports/2023/Rotary-Mehndi-Training-Report-23.pdf",
            partner: "Rotary",
            year: "2023",
            category: "Skill Development",
        },
        {
            documentName: "BRBCL (NTPC) - Report on Providing Menstrual Health Management for 200 adolescent girls and 200 women at PAP villages of BRBCL Project at Nabinagar, Aurangabad (Bihar)",
            downloadLink: "https://navastitvafoundation.org/project-reports/2023/BRBCL-%28NTPC%29-MHM-report-2023.pdf",
            partner: "BRBCL (NTPC)",
            year: "2023",
            category: "Health & Hygiene",
        },
        {
            documentName: "UNICEF - Report On The Activities Facilitated In The 2nd Phase Of Implementation",
            downloadLink: "https://navastitvafoundation.org/project-reports/2022/UNICEF-MHM -Report-Phase-2-%282022%29.pdf",
            partner: "UNICEF",
            year: "2022",
            category: "Health & Hygiene",
        },
        {
            documentName: "UNICEF - MH Day report",
            downloadLink: "https://navastitvafoundation.org/project-reports/2022/MH-Day-Report-2022.pdf",
            partner: "UNICEF",
            year: "2022",
            category: "Health & Hygiene",
        },
        {
            documentName: "UNICEF - Process Documentation Of MHM Interventions In Sitamarhi & Purnea District",
            downloadLink: "https://navastitvafoundation.org/project-reports/2022/PROCESS-DOCUMENTATION-OF-MHM-2022.pdf",
            partner: "UNICEF",
            year: "2022",
            category: "Health & Hygiene",
        },
        {
            documentName: "UNICEF - Strengthening Rural Women Self help Group to Promote Mentrual Health and Hygine Management in Selected District of Bihar",
            downloadLink: "https://navastitvafoundation.org/project-reports/2021/UNICEF-MHM-Report-Phase-1-%282021%29.pdf",
            partner: "UNICEF",
            year: "2021",
            category: "Health & Hygiene",
        },
        {
            documentName: "DMI - REPORT OF WORKSHOP HELD ON 28th SEPTEMBER, 2019 ON MENSTRUAL HEALTH MANAGEMENT (MHM) IN RAJKIYA UTTAKRAMIT MADHYA VIDYALAYA, PIPARIA, WEST CHAMPARAN",
            downloadLink: "https://navastitvafoundation.org/project-reports/2019/DMI-Report-2019/DMI-Rajkiya-Piparia-Report.pdf",
            partner: "DMI",
            year: "2019",
            category: "Education",
        },
        {
            documentName: "DMI - REPORT OF WORKSHOP HELD ON 28th SEPTEMBER, 2019 ON MENSTRUAL HEALTH MANAGEMENT (MHM) IN RAJKIYA UTTAKRAMIT MADHYA VIDYALAYA, KOHARGADDI, WEST CHAMPARAN",
            downloadLink: "https://navastitvafoundation.org/project-reports/2019/DMI-Report-2019/DMI-Rajkiya-Kohargaddi-Report.pdf",
            partner: "DMI",
            year: "2019",
            category: "Education",
        },
        {
            documentName: "DMI - REPORT OF WORKSHOP HELD ON 27th SEPTEMBER, 2019 ON MENSTRUAL HEALTH MANAGEMENT (MHM) IN RAJKIYA BUNIYADI VIDYALAYA (MIDDLE SCHOOL), BHITTIHARWA, WEST CHAMPARAN",
            downloadLink: "https://navastitvafoundation.org/project-reports/2019/DMI-Report-2019/DMI-Buniyadi-Bhittiharwa-Report.pdf",
            partner: "DMI",
            year: "2019",
            category: "Education",
        },
        {
            documentName: "DMI - REPORT OF WORKSHOP HELD ON 27th SEPTEMBER, 2019 ON MENSTRUAL HEALTH MANAGEMENT (MHM) IN RAJKIYA UTTAKRAMIT MADHYA VIDYALAYA, BHITIHARWA, WEST CHAMPARAN",
            downloadLink: "https://navastitvafoundation.org/project-reports/2019/DMI-Report-2019/DMI-Rajkiya-Bhittiharwa-Report.pdf",
            partner: "DMI",
            year: "2019",
            category: "Education",
        },
    ];

    const years = ["All", ...new Set(projectReports.map((report) => report.year))].sort((a, b) => {
        if (a === "All") return -1;
        if (b === "All") return 1;
        return b.localeCompare(a);
    });

    const filteredReports = selectedYear === "All" 
        ? projectReports 
        : projectReports.filter((report) => report.year === selectedYear);

    const getPartnerColor = (partner) => {
        const colors = {
            "NABARD": "from-blue-500 to-blue-600",
            "REC Limited": "from-green-500 to-green-600",
            "Rotary": "from-yellow-500 to-yellow-600",
            "BRBCL (NTPC)": "from-orange-500 to-orange-600",
            "UNICEF": "from-cyan-500 to-cyan-600",
            "DMI": "from-purple-500 to-purple-600",
        };
        return colors[partner] || "from-pink-500 to-pink-600";
    };

    const getCategoryIcon = (category) => {
        const icons = {
            "Skill Development": "🎨",
            "Health & Hygiene": "💊",
            "Education": "📚",
        };
        return icons[category] || "📄";
    };

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Project Reports</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            PROJECT REPORTS
                        </h1>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* Header Image */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-md shadow-pink-100">
                        <img
                            src={projectReportsHeader}
                            alt="Nav Astitva Foundation Project Reports"
                            className="w-full max-h-80 object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Year Filter */}
                    <div className="mb-8 flex flex-wrap gap-3 justify-center">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                    selectedYear === year
                                        ? "bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-lg scale-105"
                                        : "bg-white text-pink-700 border-2 border-pink-200 hover:border-pink-400 hover:shadow-md"
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Project Reports Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredReports.map((report, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-pink-100 hover:border-pink-300 transform hover:-translate-y-2 flex flex-col"
                            >
                                {/* Partner Badge - Top Right */}
                                <div className={`absolute top-0 right-0 px-4 py-2 bg-gradient-to-r ${getPartnerColor(report.partner)} text-white text-xs font-bold rounded-bl-2xl shadow-lg z-10`}>
                                    {report.partner}
                                </div>

                                {/* Decorative gradient overlay */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600" />

                                {/* Content */}
                                <div className="relative p-6 md:p-8 flex flex-col flex-1 pt-8">
                                    {/* Year and Category */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full border border-pink-200">
                                            📅 {report.year}
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full border border-gray-200">
                                            {getCategoryIcon(report.category)} {report.category}
                                        </span>
                                    </div>

                                    {/* Document Title */}
                                    <h3 className="text-base md:text-lg font-bold text-pink-800 mb-4 leading-tight flex-1 group-hover:text-pink-600 transition-colors">
                                        {report.documentName}
                                    </h3>

                                    {/* Download Button */}
                                    <a
                                        href={report.downloadLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 mt-auto"
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
                                <div className={`h-1 bg-gradient-to-r ${getPartnerColor(report.partner)}`} />
                            </div>
                        ))}
                    </div>

                    {/* Results count */}
                    <div className="mt-12 text-center text-gray-600">
                        <p className="text-sm font-medium">
                            Showing {filteredReports.length} report{filteredReports.length !== 1 ? "s" : ""}
                            {selectedYear !== "All" && ` from ${selectedYear}`}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectReports;

