import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide">Check-Appoint</h1>

        {/* Desktop Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="/home" className="hover:underline text-sm font-medium">Home</a>
          <a href="/about" className="hover:underline text-sm font-medium">About</a>
          <a href="/profile" className="hover:underline text-sm font-medium">Profile</a>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/home" className="block text-sm font-medium hover:underline">Home</a>
          <a href="/about" className="block text-sm font-medium hover:underline">About</a>
          <a href="/profile" className="block text-sm font-medium hover:underline">Profile</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
