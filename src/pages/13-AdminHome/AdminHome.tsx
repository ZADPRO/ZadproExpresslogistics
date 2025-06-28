import React from "react";

const AdminHome: React.FC = () => {
  return (
    <div className="ml-[70px]">
      <div className="flex w-full items-center justify-between px-3 py-2 shadow-md">
        <div className="flex flex-col">
          <p className="font-bold uppercase">Home Page</p>
          <p className="text-sm">Overall Analysis</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold uppercase">Login User Name</p>
          <p className="text-sm">User Role</p>
        </div>
      </div>
      <p>Admin Home Page drafted</p>
    </div>
  );
};

export default AdminHome;
