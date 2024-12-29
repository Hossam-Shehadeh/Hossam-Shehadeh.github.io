import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg py-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-extrabold">Portfolio</h1>
        <ul className="flex space-x-8">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'text-orange-400' : 'transition duration-300 transform hover:scale-105 hover:text-orange-400'
              }
              aria-label="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'text-orange-400' : 'transition duration-300 transform hover:scale-105 hover:text-orange-400'
              }
              aria-label="About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? 'text-orange-400' : 'transition duration-300 transform hover:scale-105 hover:text-orange-400'
              }
              aria-label="Projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'text-orange-400' : 'transition duration-300 transform hover:scale-105 hover:text-orange-400'
              }
              aria-label="Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
