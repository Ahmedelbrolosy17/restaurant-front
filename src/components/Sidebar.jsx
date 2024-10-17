// Sidebar.js
import React, { useState, useEffect, useMemo } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Sidebar = () => {
  const [isBelowHero, setIsBelowHero] = useState(false);

  const handleScroll = () => {
    const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
    setIsBelowHero(window.pageYOffset > heroHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarLinks = useMemo(() => [
    { to: "menu", label: "Menu" },
    { to: "reviews", label: "Reviews" },
    { to: "contact", label: "Contact" },
  ], []);

  return (
    <div className="fixed top-1/2 left-4 z-20 p-4 rounded-xl hidden sm:block bg-transparent transition duration-300 text-lg text-center transform -translate-y-1/2">
      <ul className="space-y-3">
        {isBelowHero && (
          <li className="bg-yellow-500 rounded-full p-3">
            <ScrollLink to="hero" smooth={true} duration={500} className="text-lg font-semibold hover:text-yellow-900 cursor-pointer transition-colors duration-200">
              Up
            </ScrollLink>
          </li>
        )}
        {sidebarLinks.map((link, index) => (
          <li key={index} className="bg-yellow-500 rounded-full p-2">
            <ScrollLink to={link.to} smooth={true} duration={500} className="text-lg font-semibold hover:text-yellow-900 cursor-pointer transition-colors duration-200">
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
