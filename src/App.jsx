import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShareBlock from "./components/ShareBlock";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Milestones from "./pages/Milestones";
import SurveyReports from "./pages/SurveyReports";
import ProjectReports from "./pages/ProjectReports";
import AuditReports from "./pages/AuditReports";
import Career from "./pages/Career";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import DonatePage from "./pages/DonatePage";
import Journey from "./pages/Journey";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Global header */}
        <Navbar />
        <ShareBlock />

        {/* Routed content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/survey-reports" element={<SurveyReports />} />
            <Route path="/project-reports" element={<ProjectReports />} />
            <Route path="/audit-reports" element={<AuditReports />} />
            <Route path="/career" element={<Career />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </div>

        {/* Global footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;