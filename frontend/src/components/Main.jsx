import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import Hospitals from '../pages/Hospitals';

const Main = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar on top */}
      <div className="h-[60px]">
        <Navbar />
      </div>

      {/* Sidebar + Hospitals side by side */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <div className="">
          <Sidebar />
        </div>

        {/* Main content on the right */}
        {/* <div className="flex-1 p-4 overflow-auto">
          <Hospitals />
        </div> */}
      </div>
    </div>
  );
};

export default Main;
