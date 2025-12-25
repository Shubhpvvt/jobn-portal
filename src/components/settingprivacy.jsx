import { useState } from "react";

const SettingPrivacy = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="font-semibold text-lg">Data & Privacy</h2>
      <p className="text-sm text-gray-500 mt-1">
        Control how your data is used and managed on the platform.
      </p>

      
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-sm font-medium">Enable Anonymous Data Sharing</p>
          <p className="text-xs text-gray-500 mt-1">
            Your data is kept private and not shared for analytical purposes.
          </p>
        </div>

        <button
          onClick={() => setEnabled(!enabled)}
          className={`w-10 h-6 rounded-full relative transition ${
            enabled ? "bg-red-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
              enabled ? "translate-x-4" : ""
            }`}
          />
        </button>
      </div>

     
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-sm font-medium">Download My Data</p>
          <p className="text-xs text-gray-500 mt-1">
            Download a copy of all your personal data stored on our platform.
          </p>
        </div>

        <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-50">
          Export Data
        </button>
      </div>
    </div>
  );
};

export default SettingPrivacy;
