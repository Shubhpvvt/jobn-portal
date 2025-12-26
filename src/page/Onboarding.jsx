import React from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">

     
      <header className="w-full h-14 bg-[#FF321F] flex justify-between items-center px-10">
        <div className="flex items-center gap-2">
          <img src="img/logo/Sign-Up/Group.svg" className="w-7 h-7" />
          <h1 className="text-white font-bold italic text-xl">
            CTRMExpertPlatform
          </h1>
        </div>
        <span className="text-white text-sm">Home</span>
        <div className="flex gap-3">
          <div className="w-9 h-9 bg-slate-500 rounded-xl flex items-center justify-center">
            <img src="img/logo/hd/admin.svg" className="w-4 h-4" />
          </div>
          <div className="w-9 h-9 bg-slate-500 rounded-xl flex items-center justify-center">
            <img src="img/logo/hd/Bell.svg" className="w-4 h-4" />
          </div>
          <div className="w-9 h-9 bg-white rounded-full" />
        </div>
      </header>

     
      <main className="flex-1">

        <div className="max-w-6xl mx-auto px-10 py-4">
          <h2 className="text-lg font-semibold mb-3">Onboarding Progress</h2>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center">1</div>
              <span>Basic Info</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-3" />
            <span className="text-gray-400">2 CTRM Expertise</span>
            <div className="flex-1 h-px bg-gray-300 mx-3" />
            <span className="text-gray-400">3 Experience</span>
            <div className="flex-1 h-px bg-gray-300 mx-3" />
            <span className="text-gray-400">4 Preferences</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-10 flex gap-8 items-start">

          
          <div className="w-[55%] h-[380px] border rounded-xl p-4 overflow-hidden">

            <h3 className="font-semibold mb-4">Your Personal Details</h3>

            <div className="space-y-3 text-sm">
              {["Full Name", "Location", "Current Role", "Company"].map((label, i) => (
                <div key={i}>
                  <label className="block mb-1">{label}</label>
                  <input
                    className="w-full bg-gray-200 px-3 py-2 rounded"
                    placeholder={
                      label === "Full Name"
                        ? "John Doe"
                        : label === "Location"
                        ? "London, UK"
                        : label === "Current Role"
                        ? "CTRM Business Analyst"
                        : "Acme Energy Solutions"
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[40%] border rounded-xl p-4 flex flex-col items-center">
            <h3 className="font-semibold mb-4">Profile Picture</h3>

            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-3">
              <img
                src="https://via.placeholder.com/150"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="px-4 py-1.5 bg-gray-200 rounded text-sm">
              Upload Photo
            </button>

            <p className="text-xs text-gray-500 mt-2">
              JPG or PNG, max 5MB
            </p>
          </div>

        </div>

        
        <div className="max-w-6xl mx-auto px-10 flex justify-end mt-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#FF321F] text-white px-6 py-2 rounded text-sm"
          >
            Next
          </button>
        </div>

      </main>

      <footer className="border-t mt-4">
        <div className="max-w-6xl mx-auto px-10 py-3 flex justify-between text-sm">
          <div className="flex gap-4">
            <span>About</span>
            <span>Resources</span>
            <span>Legal</span>
          </div>
          <div className="flex gap-6">
            <img src="img/logo/socal/linkedin.svg" />
            <img src="img/logo/socal/tuter.svg" />
            <img src="img/logo/socal/Vector.svg" />
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Onboarding;
