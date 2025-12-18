import React from 'react';
import Navbar from './components/Navbar';
import ShareBlock from "./components/ShareBlock";
import HeroSlider from './components/HeroSlider';
import Overview from './components/Overview';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="w-full">
            <Navbar />
            <ShareBlock />
            <HeroSlider />
            <Overview/>
            <Testimonials/>
            <Partners/>
            <Footer/>
        </div>
    );
};

export default App;