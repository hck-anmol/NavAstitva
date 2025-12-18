import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShareBlock from "./components/ShareBlock";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Milestones from "./pages/Milestones";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

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
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Global footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;