import React from "react";
import {
  FiLayers,
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";

const ExploreSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white border-r px-5 py-6 text-sm text-[#475569]">

      <h3 className="text-xs font-semibold text-gray-500 mb-5 tracking-wide">
        FILTERS
      </h3>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 font-medium text-[#334155]">
          <div className="flex items-center gap-2">
            <FiLayers size={16} />
            <span>Platforms</span>
          </div>
          <FiChevronDown size={14} />
        </div>

        <div className="space-y-2 pl-6">
          {["Endur", "Allegro", "Eka", "OpenLink", "Triple Point", "Other"].map(
            (item) => (
              <p key={item} className="cursor-pointer hover:text-black">
                {item}
              </p>
            )
          )}
        </div>
      </div>

    
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 font-medium text-[#334155]">
          <div className="flex items-center gap-2">
            <FiBriefcase size={16} />
            <span>Role Type</span>
          </div>
          <FiChevronDown size={14} />
        </div>

        <div className="space-y-2 pl-6">
          {["Analyst", "Developer", "Manager", "Consultant", "Architect"].map(
            (item) => (
              <p key={item} className="cursor-pointer hover:text-black">
                {item}
              </p>
            )
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 font-medium text-[#334155]">
          <div className="flex items-center gap-2">
            <FiClock size={16} />
            <span>Experience</span>
          </div>
          <FiChevronDown size={14} />
        </div>

        <div className="space-y-2 pl-6">
          {["0–2 Years", "3–5 Years", "5–10 Years", "10+ Years"].map((item) => (
            <p key={item} className="cursor-pointer hover:text-black">
              {item}
            </p>
          ))}
        </div>
      </div>


      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 font-medium text-[#334155]">
          <div className="flex items-center gap-2">
            <FiMapPin size={16} />
            <span>Location</span>
          </div>
          <FiChevronDown size={14} />
        </div>

        <div className="space-y-2 pl-6">
          {["New York", "London", "Houston", "Singapore", "Remote"].map(
            (item) => (
              <p key={item} className="cursor-pointer hover:text-black">
                {item}
              </p>
            )
          )}
        </div>
      </div>

 
      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm flex items-center justify-center gap-2">
        Apply Filters
      </button>
    </div>
  );
};

export default ExploreSidebar;
