import React, { useState, useRef } from 'react';
import About from './About'; // Import the About component

const Home = () => {
  const [showAbout, setShowAbout] = useState(false); // State to toggle About section visibility
  const aboutRef = useRef(null); // Reference to About section

  const handleLearnMoreClick = () => {
    setShowAbout(true); // Show About section when button is clicked
    // Scroll to About section automatically after the click
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Home Section */}
      <section
        className="py-20 text-center bg-gradient-to-b from-blue-200 to-gray-100 h-screen flex items-center justify-center relative"
      >
        <div>
          {/* Profile Image and Description */}
          <div className="flex flex-col items-center mb-16">
            <img 
              src="http://127.0.0.1:5500/assets/profile.jpeg"  // Replace with your actual image path
              alt="Your Profile"
              className="w-40 h-40 rounded-full border-4 border-white mb-6 transform transition duration-500 hover:scale-110"
            />
            <p className="text-xl text-gray-800 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
              I'm Hossam Shehadeh, a passionate developer with expertise in building dynamic and responsive web applications.
              My focus is on creating user-friendly interfaces and robust backends. I strive to improve my skills by learning
              new technologies and methodologies to stay up-to-date with the ever-changing tech landscape.
            </p>
          </div>
          <button
            onClick={handleLearnMoreClick}
            className="text-white bg-orange-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
          >
            Learn More About Me
          </button>
        </div>
      </section>
      
      {/* Conditionally render the About component */}
      {showAbout && (
        <section ref={aboutRef}>
          <About />
        </section>
      )}
    </div>
  );
};

export default Home;
