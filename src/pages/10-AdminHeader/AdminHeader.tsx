import { House, LogOut, Menu, NotepadText } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdminHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-screen w-[70px] bg-[#090a58] flex flex-col justify-between items-center py-6 text-white fixed left-0 top-0 z-50">
      {/* Top - Menu Icon */}
      <div>
        <div className="group relative mb-6 cursor-pointer">
          <Menu size={24} />
        </div>
      </div>

      {/* Middle - Navigation Icons */}
      <div className="flex flex-col gap-6 items-center">
        <div
          onClick={() => navigate("/admin/auth/home")}
          className={`group relative cursor-pointer p-1 rounded ${
            isActive("/admin/auth/home") ? "bg-white text-[#090a58]" : ""
          }`}
        >
          <House size={24} />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-[#fca000] text-white font-bold text-lg px-4 py-2 rounded shadow">
            Home
          </span>
        </div>

        <div
          onClick={() => navigate("/admin/auth/blogPage")}
          className={`group relative cursor-pointer p-1 rounded ${
            isActive("/admin/auth/blogPage") ? "bg-white text-[#090a58]" : ""
          }`}
        >
          <NotepadText size={24} />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-[#fca000] text-white font-bold text-lg px-4 py-2 rounded shadow">
            Blogs
          </span>
        </div>
      </div>

      {/* Bottom - Logout */}
      <div>
        <div
          className="group relative cursor-pointer"
          onClick={() => {
            // logout logic here
            navigate("/admin/login");
          }}
        >
          <LogOut size={24} />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-[#fca000] text-white font-bold text-lg px-4 py-2 rounded shadow">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
