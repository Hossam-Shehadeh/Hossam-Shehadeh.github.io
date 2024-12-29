import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-600 to-purple-800">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
          About Me
        </h2>
        

        {/* Skills and Experience Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="list-disc text-left text-gray-600">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Flutter</li>
              <li>Tailwind CSS / Bootstrap</li>
              <li>Version Control (Git)</li>
              <li>Database Management (MongoDB, SQL)</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
            <ul className="list-disc text-left text-gray-600">
              <li>Frontend Developer at ABC Company</li>
              <li>Backend Developer at XYZ Ltd.</li>
              <li>Freelance Web Developer for 3+ years</li>
              <li>Contributed to open-source projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
