import React from "react";

const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-[#090a58] pl-4">
            Welcome Back!
          </h2>

          <form className="grid grid-cols-1 gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58]"
              />
            </div>

            <p className="text-end text-[#090a58] font-bold cursor-pointer">
              Forgot Password ?
            </p>

            <div>
              <button
                type="submit"
                className="bg-[#090a58] cursor-pointer hover:bg-[#090a58e4] text-white px-6 py-3 rounded-md font-semibold transition duration-200 w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
