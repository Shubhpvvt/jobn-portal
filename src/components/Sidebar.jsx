import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r p-4 flex flex-col justify-between">

      <ul className="space-y-4 text-sm">
        <li className="text-red-500 font-medium">Dashboard</li>
        <li>My Profile</li>
        <li>Explore Professionals</li>
        <li>Messages</li>
        <li>Opportunities</li>
        <li>Settings</li>
      </ul>

      <button className="bg-red-500 text-white py-2 rounded text-sm">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
