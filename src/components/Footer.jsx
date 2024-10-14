import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between">
          {/* Left Side - Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">Pickies Delights</h3>
            <p className="text-gray-400 mt-2">&copy; 2024 Pickies Delights. All rights reserved.</p>
          </div>

          {/* Middle - Links */}
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6 items-center">
            <Link to="/order" className="text-gray-400 hover:text-gray-200">order online</Link>
            <Link to="/offers" className="text-gray-400 hover:text-gray-200">offers</Link>
            <Link to="/reservation" className="text-gray-400 hover:text-gray-200">Reservation</Link>
            <Link to="/about" className="text-gray-400 hover:text-gray-200">About</Link>
            <Link to="/policy&Conditions" className="text-gray-400 hover:text-gray-200">Policy&Conditions</Link>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex justify-center space-x-6 md:justify-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f text-gray-400 hover:text-gray-200 text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter text-gray-400 hover:text-gray-200 text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram text-gray-400 hover:text-gray-200 text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;