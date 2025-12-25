import { FiBell } from "react-icons/fi";

const JobListingTopbar = () => {
  return (
    <div className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="font-semibold text-lg text-red-600">
            CRM Expert Platform
          </h1>
          <span className="text-sm text-gray-600">Jobs</span>
          <span className="text-sm text-gray-600">Listings</span>
          <span className="text-sm text-gray-600">Settings</span>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search jobs..."
            className="border rounded-md px-3 py-1 text-sm"
          />
          <FiBell className="text-xl text-gray-600" />
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default JobListingTopbar;
