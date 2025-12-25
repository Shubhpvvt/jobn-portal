import { FiBriefcase, FiEdit2 } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const OpportunitiesSidebar = () => {
  return (
    <aside className="w-[260px] bg-white border-r h-screen sticky top-0 flex flex-col">

      <div className="p-4 flex flex-col">
        
        
        <button className="w-full flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded text-sm">
          <FiBriefcase />
          Job Listings
        </button>

        <div className="h-14"></div>
       
       
        <button className="w-full flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded text-sm">
          <FiEdit2 />
          Edit Profile
        </button>

      </div>

      <div className="flex-1 overflow-y-auto px-4 text-sm">

        
        <div className="mb-5">
          <p className="font-medium mb-2">Job Type</p>
          <div className="space-y-2 text-gray-600">
            {["Full-time", "Contract", "Part-time", "Internship"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" name="job" />
                {item}
              </label>
            ))}
          </div>
        </div>

       
        <div className="mb-5">
          <p className="font-medium mb-2">Experience Level</p>
          <select className="w-full border rounded px-3 py-2">
            <option>Mid Level</option>
            <option>Entry Level</option>
            <option>Senior Level</option>
          </select>
        </div>

        <div className="mb-5">
          <p className="font-medium mb-2">Location</p>
          <input
            type="text"
            placeholder="e.g., Houston, TX"
            className="w-full border rounded px-3 py-2"
          />
        </div>

    
        <div className="mb-5">
          <p className="font-medium mb-2">Platforms/Tech</p>
          <div className="space-y-2 text-gray-600">
            {["Allegro", "OpenLink Endur", "RightAngle", "Triple Point", "SolArc"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {item}
                </label>
              )
            )}
          </div>
        </div>

     
        <div className="mb-5">
          <p className="font-medium mb-2">Posted Date</p>
          <select className="w-full border rounded px-3 py-2">
            <option>Anytime</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
        </div>

        <div className="mb-5">
          <p className="font-medium mb-2">Industry Sector</p>
          <select className="w-full border rounded px-3 py-2">
            <option>Oil & Gas</option>
            <option>Power</option>
            <option>Energy Trading</option>
          </select>
        </div>

        
        <div className="mb-6">
          <p className="font-medium mb-2">Match Score: 75%+</p>
          <input type="range" className="w-full accent-red-500" />
        </div>

        <button className="w-full border rounded py-2 text-sm mb-6">
          Clear All Filters
        </button>
      </div>

      
      <div className="border-t p-4 flex gap-4 text-gray-500">
        <FaLinkedinIn />
        <FaTwitter />
        <FaFacebookF />
      </div>
    </aside>
  );
};

export default OpportunitiesSidebar;
