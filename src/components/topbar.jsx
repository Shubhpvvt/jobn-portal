import React from "react";

const Topbar = () => {
  return (
    <div className="h-14 bg-red-500 text-white flex items-center px-6">

      
      <div className="flex items-center gap-10">

      
        <div className="flex items-center gap-2 font-semibold text-lg">
          ✳️ CTRMExpertPlatform
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <span className="cursor-pointer hover:underline">Dashboard</span>
          <span className="cursor-pointer hover:underline">Profile</span>
          <span className="cursor-pointer hover:underline">Explore</span>
          <span className="cursor-pointer hover:underline">Opportunities</span>
          <span className="cursor-pointer hover:underline">Messages</span>
        </div>

      </div>

      
      <div className="ml-auto flex items-center gap-3">

    
        <div className="flex items-center bg-white rounded px-2">
          <input
            type="text"
            placeholder="Search professionals, companies"
            className="outline-none text-sm text-black px-2 py-1 w-56"
          />
        </div>

        
        <div className="w-8 h-8 bg-red-400 rounded-full"></div>
        <div className="w-8 h-8 bg-red-400 rounded-full"></div>
        <div className="w-8 h-8 bg-red-400 rounded-full"></div>

      </div>

    </div>
  );
};

export default Topbar;
                         