import React from "react";
import HeroSlider from "../components/HeroSlider";
import Overview from "../components/Overview";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* HeroSlider overlaps with navbar */}
      <HeroSlider />
      {/* Other content starts below */}
      <main>
        <Overview />
        <Testimonials />
        <Partners />
      </main>
    </div>
  );
};

export default Home;
