 import { FiBriefcase, FiEdit2 } from "react-icons/fi";

const OpportunitiesSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0 overflow-y-auto px-4 py-8">

      
      <button className="w-full flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded text-sm mb-6">
        <FiBriefcase />
        Job Listings
      </button>

    
      <button className="w-full flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded text-sm mb-6">
        <FiEdit2 />
        Edit Profile
      </button>

      <div className="mb-6">
        <p className="font-medium text-sm mb-2">Job Type</p>
        <div className="space-y-2 text-sm text-gray-600">
          {["Full-time", "Contract", "Part-time", "Internship"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="radio" name="job" />
              {type}
            </label>
          ))}
        </div>
      </div>

     
      <div className="mb-6">
        <p className="font-medium text-sm mb-2">Experience Level</p>
        <select className="w-full border rounded px-3 py-2 text-sm">
          <option>Mid Level</option>
          <option>Entry Level</option>
          <option>Senior Level</option>
        </select>
      </div>

  
      <div className="mb-6">
        <p className="font-medium text-sm mb-2">Location</p>
        <input
          type="text"
          placeholder="e.g., Houston, TX"
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

    
      <div className="mb-6">
        <p className="font-medium text-sm mb-2">Match Score: 75%+</p>
        <input type="range" className="w-full accent-red-500" />
      </div>

      <button className="w-full border rounded py-2 text-sm">
        Clear All Filters
      </button>
    </aside>
  );
};

export default OpportunitiesSidebar;
