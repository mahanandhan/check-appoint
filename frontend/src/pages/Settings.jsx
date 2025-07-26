import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    setShowPopup(false);
    alert('Account deleted permanently!');
    // API call to delete account can go here
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen w-full p-10 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-8">Settings</h2>

      <div className="space-y-6 text-lg">
        <div className="flex justify-between border-b pb-3">
          <span>Profile</span>
          <span onClick={() => navigate('/profile')} className="text-blue-600 cursor-pointer hover:underline">Edit</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Account</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Manage</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Change Password</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Update</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Notifications</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Customize</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Theme</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Light / Dark</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Language</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Select</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Privacy & Security</span>
          <span onClick={() => navigate('/privicy')} className="text-blue-600 cursor-pointer hover:underline">View</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Logout</span>
          <span className="text-red-600 cursor-pointer hover:underline">Sign out</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Delete Your Account Permanently</span>
          <span onClick={handleDelete} className="text-red-600 cursor-pointer hover:underline">Delete</span>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h3 className="text-xl font-semibold mb-4">Are you sure?</h3>
            <p className="mb-6 text-sm text-gray-600">This will permanently delete your account.</p>
            <div className="flex justify-end space-x-4">
              <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer">Cancel</button>
              <button onClick={handleConfirm} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
