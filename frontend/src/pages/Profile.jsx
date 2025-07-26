import React from 'react';

const Profile = () => {
  const fakeUser = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    joined: 'March 2024',
    bio: 'Full Stack Developer who loves building modern web apps.',
    location: 'Chennai, India',
    profilePic: 'https://i.pravatar.cc/150?img=3', // fake profile image
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={fakeUser.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <h2 className="text-2xl font-bold">{fakeUser.name}</h2>
          <p className="text-gray-600">{fakeUser.email}</p>
          <p className="text-sm text-gray-500">Joined: {fakeUser.joined}</p>
          <p className="text-center text-gray-700">{fakeUser.bio}</p>
          <p className="text-sm text-gray-600">📍 {fakeUser.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
