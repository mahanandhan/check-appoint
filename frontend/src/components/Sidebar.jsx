import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaCalendarCheck,
  FaInfoCircle,
  FaBars,
  FaHistory,
} from 'react-icons/fa';
import { IoSettings, IoLogOut } from 'react-icons/io5';
import { LiaHospitalSolid } from "react-icons/lia";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div className={`h-screen ${open ? 'w-64' : 'w-20'} bg-blue-700 text-white p-4 transition-all duration-300`}>
      
      {/* Top Section: Logo & Toggle */}
      <div className="flex justify-between items-center mb-6">
        {open && <h1 className="text-xl font-bold">Check-Appoint</h1>}
        <button onClick={toggleSidebar}>
          <FaBars className={`text-2xl cursor-pointer transition-transform duration-300 ${!open && 'rotate-180 ml-1'}`} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 text-sm font-medium">
        <SidebarLink to="/home" icon={<FaHome />} label="Home" open={open} />
        <SidebarLink to="/profile" icon={<FaUser />} label="Profile" open={open} />
        <SidebarLink to="/appointments" icon={<FaCalendarCheck />} label="Appointments" open={open} />
        <SidebarLink to="/past-appointment" icon={<FaHistory />} label="Past Appointments" open={open} />
        <SidebarLink to="/about" icon={<FaInfoCircle />} label="About" open={open} />
        <SidebarLink to="/settings" icon={<IoSettings />} label="Settings" open={open} />
        <SidebarLink to="/hospitals" icon={<LiaHospitalSolid />} label="Hospitals" open={open} />
        <button className="flex items-center hover:bg-blue-600 p-2 rounded transition-colors group mt-4 text-left">
          <IoLogOut className="text-xl" />
          <span className={`ml-4 transition-all duration-300 ${!open && 'opacity-0 w-0 overflow-hidden'}`}>Logout</span>
        </button>
      </nav>
    </div>
  );
};

// ✅ Reusable Sidebar Link Component
const SidebarLink = ({ to, icon, label, open }) => (
  <a href={to} className="flex items-center hover:bg-blue-600 p-2 rounded transition-colors group">
    <span className="text-xl">{icon}</span>
    <span className={`ml-4 transition-all duration-300 ${!open && 'opacity-0 w-0 overflow-hidden'}`}>{label}</span>
  </a>
);

export default Sidebar;
