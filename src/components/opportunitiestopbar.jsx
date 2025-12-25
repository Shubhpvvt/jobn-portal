import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

const OpportunitiesTopbar = () => {
  return (
    <div className="h-14 bg-white border-b flex items-center justify-between px-6">

     
      <div className="flex gap-8 text-sm font-medium text-gray-700 pl-44">
        <span className="cursor-pointer">Job Listings</span>
        <span className="cursor-pointer">Settings</span>
      </div>

    
      <div className="flex items-center gap-6">

     
        <div className="relative w-[300px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

      
        <button className="text-gray-600 hover:text-gray-900">
          <FiBell className="text-xl" />
        </button>

   
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-full object-cover border"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

      </div>
    </div>
  );
};

export default OpportunitiesTopbar;


