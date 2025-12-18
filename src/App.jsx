import React from 'react';
import Navbar from './components/Navbar';
import ShareBlock from "./components/ShareBlock";
import HeroSlider from './components/HeroSlider';
import Overview from './components/Overview';

const App = () => {
    return (
        <div className="w-full">
            <Navbar />
            <ShareBlock />
            <HeroSlider />
            <Overview/>
            {/* Main content needs top padding so the navbar doesn't cover it initially */}
            <main className="pt-24 px-4 min-h-screen bg-gray-50">
              
                {/* Add dummy content to enable scrolling */}
                <div className="h-[150vh]"></div>
            </main>
        </div>
    );
};

export default App;