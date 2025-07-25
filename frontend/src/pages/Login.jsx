import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100">
        <img
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Login Illustration"
          className="w-200 h-screen rounded-lg shadow-lg"
        />
      </div>

      {/* Login Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Welcome To Login</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                placeholder="Please enter your password"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition cursor-pointer"
            >
              Login
            </button>
            <p className="text-sm text-gray-500 text-center">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
