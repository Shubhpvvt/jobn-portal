import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";

const ExploreTopbar = () => {
  return (
    <div className="h-14 bg-white border-b flex items-center px--8">

      
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-sm font-medium text-gray-700">
        <span className="cursor-pointer hover:text-red-500">
          Dashboard
        </span>
        <span className="cursor-pointer hover:text-red-500">
          Profile
        </span>
        <span className="cursor-pointer text-red-500 font-semibold">
          Explore
        </span>
        <span className="cursor-pointer hover:text-red-500">
          Opportunities
        </span>
        <span className="cursor-pointer hover:text-red-500">
          Messages
        </span>
      </div>

      <div className="ml-auto flex items-center gap-4">

        <div className="flex items-center border rounded-md px-3 py-1.5 w-72 text-sm text-gray-500">
          <FiSearch className="mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by platform, role, or location"
            className="w-full outline-none placeholder-gray-400"
          />
        </div>

  
        <div className="w-9 h-9  flex items-center justify-center cursor-pointer hover:bg-gray-100">
          <FiSearch className="text-red-500" />
        </div>

        
        <div className="w-9 h-9  flex items-center justify-center cursor-pointer hover:bg-gray-100">
          <FiSettings className="text-red-500" />
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ExploreTopbar;
