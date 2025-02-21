
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-purple-700 text-xl font-semibold">ThaiInspect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-700">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-700">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
