import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="h-14 bg-red-500 flex items-center px-6">

    
      <div className="flex items-center gap-8 text-white">
        <span className="font-semibold text-lg">
          CTRMExpertPlatform
        </span>

        <div className="flex gap-6 text-sm">
          <span>Dashboard</span>
          <span>Profile</span>
          <span>Explore</span>
          <span>Opportunities</span>
          <span>Messages</span>
        </div>
      </div>


      <div className="ml-auto flex items-center gap-3 text-white">

        <div className="w-9 h-9 border border-white rounded flex items-center justify-center">
          <FiSearch size={18} />
        </div>

        <div className="w-9 h-9 border border-white rounded flex items-center justify-center">
          <FiSettings size={18} />
        </div>

        <img
          src="https://i.pravatar.cc/40"
          className="w-9 h-9 rounded-full"
        />
      </div>

    </div>
  );
};

export default Topbar;
