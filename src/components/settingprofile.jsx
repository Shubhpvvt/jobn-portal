import { useState } from "react";

const SettingProfile = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="font-semibold text-lg">Profile Information</h2>
      <p className="text-sm text-gray-500 mt-1">
        Update your personal details and manage profile visibility.
      </p>

      {/* User Info */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/60"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium text-sm">John Doe</p>
            <p className="text-xs text-gray-500">john.doe@example.com</p>
          </div>
        </div>

        <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-50">
          Edit Profile
        </button>
      </div>

      {/* Form */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            defaultValue="john.doe@example.com"
            className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-sm font-medium">Profile Visibility</p>
          <p className="text-xs text-gray-500">
            Your profile is visible to other platform users.
          </p>
        </div>

        <button
          onClick={() => setVisible(!visible)}
          className={`w-10 h-6 rounded-full relative transition ${
            visible ? "bg-red-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
              visible ? "translate-x-4" : ""
            }`}
          />
        </button>
      </div>

      
      <div className="flex justify-end mt-6">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingProfile;

