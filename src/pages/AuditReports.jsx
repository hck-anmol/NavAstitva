import React from "react";
import auditReportsHeader from "../assets/audit_reports.png";

const AuditReports = () => {
    const auditReports = [
        {
            documentName: "Audit Report 2024-25",
            downloadLink: "https://navastitvafoundation.org/financials/audit-report-2024-25.pdf",
            year: "2024-25",
            period: "Financial Year 2024-2025",
        },
        {
            documentName: "Audit Report 2021-2022",
            downloadLink: "https://navastitvafoundation.org/financials/audit-reports-2021.pdf",
            year: "2021-2022",
            period: "Financial Year 2021-2022",
        },
        {
            documentName: "Audit Report 2020-2021",
            downloadLink: "https://navastitvafoundation.org/financials/audit-report-2020.pdf",
            year: "2020-2021",
            period: "Financial Year 2020-2021",
        },
        {
            documentName: "Audit Report 2019-2020",
            downloadLink: "https://navastitvafoundation.org/financials/audit-report-2019.pdf",
            year: "2019-2020",
            period: "Financial Year 2019-2020",
        },
    ];

    const getYearColor = (year) => {
        const colors = {
            "2024-25": "from-emerald-500 to-emerald-600",
            "2021-2022": "from-blue-500 to-blue-600",
            "2020-2021": "from-purple-500 to-purple-600",
            "2019-2020": "from-pink-500 to-pink-600",
        };
        return colors[year] || "from-pink-500 to-pink-600";
    };

    return (
        <div className="w-full bg-gray-50">
            <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-3">
                        Home / <span className="text-pink-700 font-medium">Audit Reports</span>
                    </p>

                    {/* Page Heading */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 tracking-tight mb-3">
                            AUDIT REPORTS
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 font-medium">
                            Financial Transparency & Accountability
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mt-4 mx-auto" />
                    </div>

                    {/* Header Image */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-md shadow-pink-100">
                        <img
                            src={auditReportsHeader}
                            alt="Nav Astitva Foundation Audit Reports"
                            className="w-full max-h-80 object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Introduction */}
                    <div className="mb-12 bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-md border border-pink-100">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                ✓
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-pink-800 mb-2">Financial Transparency</h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    We are committed to maintaining the highest standards of financial transparency and accountability. 
                                    Our annual audit reports are conducted by certified auditors and provide a comprehensive overview 
                                    of our financial operations, ensuring complete transparency for our donors, partners, and stakeholders.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Audit Reports Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {auditReports.map((report, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-pink-100 hover:border-pink-300 transform hover:-translate-y-2"
                            >
                                {/* Year Badge - Top Right */}
                                <div className={`absolute top-0 right-0 px-5 py-2 bg-gradient-to-r ${getYearColor(report.year)} text-white text-sm font-bold rounded-bl-2xl shadow-lg z-10`}>
                                    FY {report.year}
                                </div>

                                {/* Decorative gradient overlay */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600" />

                                {/* Content */}
                                <div className="relative p-6 md:p-8 flex flex-col flex-1 pt-10">
                                    {/* Financial Year Badge */}
                                    <div className="mb-4">
                                        <span className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 text-xs font-bold rounded-full border border-pink-200">
                                            <svg
                                                className="w-4 h-4 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                            {report.period}
                                        </span>
                                    </div>

                                    {/* Document Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-pink-800 mb-4 leading-tight group-hover:text-pink-600 transition-colors">
                                        {report.documentName}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
                                        Comprehensive financial audit report covering all aspects of our organization's financial 
                                        operations, expenditures, and compliance with regulatory standards.
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
                                        Download Audit Report
                                    </a>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`h-1 bg-gradient-to-r ${getYearColor(report.year)}`} />
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12 border border-pink-200">
                        <div className="max-w-3xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
                                Committed to Transparency
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                All our audit reports are conducted by independent certified auditors and are available for public review. 
                                We believe in complete financial transparency and accountability to our donors, partners, and the communities we serve.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-sm font-medium text-gray-700">Certified Auditors</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-sm font-medium text-gray-700">Annual Reports</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-sm font-medium text-gray-700">Public Access</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AuditReports;

