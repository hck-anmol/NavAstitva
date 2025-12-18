import React from "react";
import HeroSlider from "../components/HeroSlider";
import Overview from "../components/Overview";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Content starts below fixed navbar */}
      <main className="pt-28 md:pt-32">
        <HeroSlider />
        <Overview />
        <Testimonials />
        <Partners />
      </main>
    </div>
  );
};

export default Home;
