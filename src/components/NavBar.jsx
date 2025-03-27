import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="hidden md:flex fixed top-14 left-0 w-full bg-[#161b22] border-b border-gray-700 text-blue-400 text-sm justify-center space-x-6 px-6 py-3 z-50">
      <Link   
        to="about" 
        smooth={true} 
        duration={1000} 
        spy={true} 
        className="hover:text-white cursor-pointer transition-all"
      >
        About
      </Link>

      <Link 
        to="skills" 
        smooth={true} 
        duration={1000} 
        spy={true} 
        className="hover:text-white cursor-pointer transition-all"
      >
        Skills
      </Link>

      <Link 
        to="projects" 
        smooth={true} 
        duration={1000} 
        spy={true} 
        className="hover:text-white cursor-pointer transition-all"
      >
        Projects
      </Link>

      <Link 
        to="contact" 
        smooth={true} 
        duration={1000} 
        spy={true} 
        className="hover:text-white cursor-pointer transition-all"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;

