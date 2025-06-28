import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // or use any icon library you prefer
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-[#090a58] pl-4">
            Welcome Back!
          </h2>

          <div className="grid grid-cols-1 gap-6">
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#090a58] pr-10"
                />
                <button
                  type="button"
                  className="absolute cursor-pointer top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <p className="text-end text-[#090a58] font-bold cursor-pointer">
              Forgot Password ?
            </p>

            <div>
              <button
                type="submit"
                onClick={() => navigate("/admin/auth/blogPage")}
                className="bg-[#090a58] cursor-pointer uppercase hover:bg-[#090a58e4] text-white px-6 py-3 rounded-md font-semibold transition duration-200 w-full"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
