import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a passionate developer with skills in React, Node.js, Python, and more.</p>
      <Link to="/about">Learn More About Me</Link>
    </div>
  );
};

export default Home;
