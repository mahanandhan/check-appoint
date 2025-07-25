import React, { useState } from 'react';
import { FaHome, FaUser, FaCalendarCheck, FaInfoCircle, FaBars, FaArrowLeft } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`h-screen ${open ? 'w-64' : 'w-20'} bg-blue-700 text-white p-4 transition-all duration-300`}>
      
      {/* Toggle Button */}
      <div className="flex justify-between items-center mb-6">
        {open && <h1 className="text-xl font-bold">Check-Appoint</h1>}
        <button onClick={() => setOpen(!open)}>
          {open ? <FaBars /> : <FaBars className="rotate-180 ml-3" />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4 flex flex-col gap-4">
        <a href="/home" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaHome className="text-xl" />
          {open && <span className="ml-4">Home</span>}
        </a>

        <a href="/profile" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaUser className="text-xl" />
          {open && <span className="ml-4">Profile</span>}
        </a>

        <a href="/appointments" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaCalendarCheck className="text-xl" />
          {open && <span className="ml-4">Appointments</span>}
        </a>

        <a href="/about" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaInfoCircle className="text-xl" />
          {open && <span className="ml-4">About</span>}
        </a>
        <a href='/settings' className="flex items-center hover:bg-blue-600 p-2 rounded">
          <IoSettings className="text-xl" />
          {open && <span className="ml-4">Settings</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
