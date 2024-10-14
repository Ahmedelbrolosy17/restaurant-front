import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Sidebar() {
  const [isBelowHero, setIsBelowHero] = useState(false);

  // Function to handle scroll and check position
  const handleScroll = () => {
    const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
    if (window.pageYOffset > heroHeight) {
      setIsBelowHero(true);
    } else {
      setIsBelowHero(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 left-4 z-20 p-4 rounded-xl hidden sm:block bg-transparent transition duration-300 text-lg text-center transform -translate-y-1/2">
      <ul className="space-y-3">
        {/* Conditionally show "up" item when the user is below the hero section */}
        {isBelowHero && (
          <li className="bg-yellow-500 rounded-full p-3">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="text-lg font-semibold hover:text-yellow-900 cursor-pointer transition-colors duration-200"
            >
              Up
            </ScrollLink>
          </li>
        )}
        <li className="bg-yellow-500 rounded-full p-2">
          <ScrollLink
            to="menu"
            smooth={true}
            duration={500}
            className="text-lg font-semibold hover:text-yellow-900 cursor-pointer transition-colors duration-200"
          >
            Menu
          </ScrollLink>
        </li>
        <li className="bg-yellow-500 rounded-full p-2">
          <ScrollLink
            to="reviews"
            smooth={true}
            duration={500}
            className="text-lg font-semibold hover:text-yellow-900 cursor-pointer transition-colors duration-200"
          >
            Reviews
          </ScrollLink>
        </li>
        <li className="bg-yellow-500 rounded-full p-2">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg font-semibold hover:text-yellow-900 cursor-pointer transition-colors duration-200"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
  
}
