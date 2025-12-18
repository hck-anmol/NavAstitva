import React from 'react';
import { FaUsers, FaUtensils, FaStore, FaMobileAlt, FaGraduationCap, FaHeart } from 'react-icons/fa';

// About Us Section
const AboutUs = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-red-600 text-4xl md:text-5xl font-bold mb-4">
              ABOUT US
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Breaking Barriers, Improving Futures.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Nav Astitva Foundation is a non-profit organization based in Bihar, India that works 
              towards improving the health and hygiene, education, and empowerment of women 
              and adolescents. The organization has a primary focus on menstrual health and 
              hygiene, and works towards addressing the issues surrounding it in a holistic and 
              inclusive manner.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300">
                Explore More
              </button>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                Download Profile
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
              alt="Women empowerment group"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Our Programs Section
const OurPrograms = () => {
  const programs = [
    {
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
      title: "HEALTH AND HYGIENE",
      description: "Promoting wellness, Preventing illnesses, and Empowering women and girls through Menstrual Hygiene Management initiatives.",
      link: "/health-hygiene"
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
      title: "HUNGER PROJECT",
      description: "Providing sustenance and nourishment to those in need, Fighting Hunger, and Promoting a healthy and fulfilling life.",
      link: "/hunger-project"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      title: "WOMEN EMPOWERMENT",
      description: "Empowering women and girls through skill development, and livelihood opportunities, Creating a brighter future for them in rural communities.",
      link: "/women-empowerment"
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      title: "COLLABORATIVE FACILITATION",
      description: "Empowering communities through partnering with both Government and Non-Government organizations like UNICEF, Indian Oil, etc.",
      link: "/collaboration"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-4xl md:text-5xl font-bold mb-4">
            OUR PROGRAMS
          </h2>
          <p className="text-gray-600 text-lg">
            Efforts for Positive Impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-red-600 text-lg font-bold mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <a 
                  href={program.link}
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-2 group"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Our Milestone Section
const OurMilestone = () => {
  const milestones = [
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop",
      title: "OPENING OF SANITARY PAD BANKS",
      description: "With the support of the Red Cross Society, we put our effort into finding ...",
      link: "/milestones"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop",
      title: "INSTALLATION OF SANITARY VENDING MACHINES",
      description: "Installation of 1st sanitary vending machine and pad disposal machine ...",
      link: "/milestones"
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=400&fit=crop",
      title: "STARTS OPEN DIALOGUE ON MHM",
      description: "Nav Astitva Foundation was the first organization in Bihar to start an open Dialogue ...",
      link: "/milestones"
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=400&fit=crop",
      title: "STARTED AN AWARENESS CAMPAIGN ON MHM",
      description: "NAF in collaboration with UNICEF and BEPC has started an Awareness campaign ...",
      link: "/milestones"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 md:px-10 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-red-600 text-4xl md:text-5xl font-bold mb-2">
            OUR MILESTONE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-red-600 text-base font-bold mb-3 leading-tight">
                  {milestone.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {milestone.description}
                </p>
                <a 
                  href={milestone.link}
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-2 group"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-3 h-3 rounded-full bg-gray-400"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </section>
  );
};

// Key Facts Section
const KeyFacts = () => {
  const facts = [
    {
      number: "1 LAC+",
      description: "SANITARY ABSORBANT DISTRIBUTED TO WOMEN AND ADOLECENTS"
    },
    {
      number: "4 LAC+",
      description: 'PEOPLE HAVE BEEN SERVED NUTRITIONAL FOOD AT ONLY RS. 5 UNDER THE PROJECT "SAI KI RASOI"'
    },
    {
      number: "250+",
      description: "SANITARY PAD BANKS OPENED"
    },
    {
      number: "300+",
      description: "SANITARY VENDING MACHINES INSTALLED"
    },
    {
      number: "1000+",
      description: "MHM AWARENESS SESSIONS CONDUCTED IN SCHOOLS"
    },
    {
      number: "6 LAC+",
      description: "WOMEN AND ADOLESCENTS APPROCHED ON MHM AWARENESS"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 md:px-10 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-red-600 text-4xl md:text-5xl font-bold mb-2">
            SOME KEY FACTS
          </h2>
          <p className="text-gray-600 text-lg">
            NAF's Impact in Empowering Women and Communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-red-600 text-5xl font-bold mb-4">
                {fact.number}
              </h3>
              <p className="text-gray-800 text-sm font-semibold leading-relaxed uppercase">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component that combines all sections
const HomePageSections = () => {
  return (
    <div className="w-full">
      <AboutUs />
      <OurPrograms />
      <OurMilestone />
      <KeyFacts />
    </div>
  );
};

export default HomePageSections;