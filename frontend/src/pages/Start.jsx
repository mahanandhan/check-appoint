import React from 'react';

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="py-8 bg-blue-600 text-white text-center shadow">
        <h1 className="text-4xl font-bold">Welcome to Check-Appoint</h1>
        <p className="text-lg mt-2">Your trusted online medical consultation platform</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            className="w-full rounded-2xl shadow-lg"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Medical Consultation"
          />
        </div>

        {/* Buttons Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Get Started</h2>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700 hover:text-white transition cursor-pointer">
            Signup
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700 hover:text-white transition cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
