import { FiBell } from "react-icons/fi";

const SettingsTopbar = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       
        <div className="flex gap-6 items-center">
          <h1 className="text-red-600 font-semibold">
            CTRM Expert Platform
          </h1>

          <span className="text-sm text-gray-600 cursor-pointer">
            Job Listings
          </span>

          <span className="text-sm text-red-600 font-medium border-b-2 border-red-600 cursor-pointer">
            Settings
          </span>
        </div>

      
        <div className="flex items-center gap-4">

          
          <input
            type="text"
            placeholder="Search jobs..."
            className="border rounded-md px-3 py-1 text-sm focus:outline-none"
          />

          
          <div className="relative cursor-pointer text-gray-600 hover:text-gray-900">
            <FiBell size={20} />
           
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

         
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>

      </div>
    </div>
  );
};

export default SettingsTopbar;
