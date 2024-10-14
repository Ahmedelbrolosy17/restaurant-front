import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuTransitionClass = "transition-all duration-300 ease-in-out";
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 onClick={()=>{
            navigate("/")
          }} className="text-2xl font-bold text-gray-800 cursor-pointer">Pickies Delights</h1>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`${menuTransitionClass} ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:max-h-screen md:opacity-100 overflow-hidden md:overflow-visible md:transition-none mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li><Link to="/" className="block py-2 text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/offers" className="block py-2 text-gray-600 hover:text-gray-800">Offers</Link></li>
            <li><Link to="/reservation" className="block py-2 text-gray-600 hover:text-gray-800">Reservation</Link></li>
            <li><Link to="/order" className="block py-2 text-gray-600 hover:text-gray-800">Order Online</Link></li>
            <li><Link to="/about" className="block py-2 text-gray-600 hover:text-gray-800">About</Link></li>
            <li><Link to="/policy&Conditions" className="block py-2 text-gray-600 hover:text-gray-800">Policy & Conditions</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}