
import { useState } from "react";

const SettingSecurity = () => {
  const [twoFA, setTwoFA] = useState(false);

  return (
    <>
      
      <div className="bg-white border rounded-lg p-6">
        <h2 className="font-semibold text-lg">Account Security</h2>
        <p className="text-sm text-gray-500 mt-1">
          Protect your account with robust security measures.
        </p>

        <div className="mt-6 space-y-6">
        
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Change Password</p>
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-50">
              Update
            </button>
          </div>

         
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">
                Two-Factor Authentication
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Enable 2FA for an extra layer of security on your account.
              </p>
            </div>

            <button
              onClick={() => setTwoFA(!twoFA)}
              className={`w-10 h-6 rounded-full relative transition ${
                twoFA ? "bg-red-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                  twoFA ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>

          
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Recent Login Activity</p>
            <button className="text-sm text-red-600 hover:underline">
              View History
            </button>
          </div>
        </div>
      </div>

     
      <div className="border border-red-400 rounded-lg p-6 mt-6">
        <h2 className="text-red-600 font-semibold text-lg flex items-center gap-2">
          Danger Zone
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          Irreversible actions that affect your account data.
        </p>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-sm font-medium text-red-600">
              Delete Account
            </p>
            <p className="text-xs text-gray-500 mt-1">
              This action is permanent and cannot be undone.
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingSecurity;
