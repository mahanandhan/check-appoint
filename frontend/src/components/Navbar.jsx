import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide">Check-Appoint</h1>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <a href="/home" className="hover:underline text-sm font-medium">Home</a>
          <a href="/about" className="hover:underline text-sm font-medium">About</a>
          <a href="/profile" className="hover:underline text-sm font-medium">Profile</a>
          {/* <a href="/appointments" className="hover:underline text-sm font-medium">Appointments</a> */}
        </nav>

        {/* Mobile Menu Placeholder (for future expansion) */}
        <div className="md:hidden">
          {/* Optional: Add hamburger icon logic here later */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
