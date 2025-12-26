import React from "react";

const Onboarding = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">

    
      <header className="flex w-full justify-between items-center h-14 bg-[#FF321F] px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7">
            <img src="img/logo/Sign-Up/Group.svg" alt="logo" />
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold italic">
            CTRMExpertPlatform
          </h1>
        </div>

        <h2 className="hidden sm:block text-white text-sm font-medium">
          Home
        </h2>

        <div className="flex items-center gap-3">
          <div className="bg-slate-500 w-9 h-9 flex items-center justify-center rounded-xl">
            <img src="img/logo/hd/admin.svg" alt="" className="w-4 h-4" />
          </div>

          <div className="bg-slate-500 w-9 h-9 flex items-center justify-center rounded-xl">
            <img src="img/logo/hd/Bell.svg" alt="" className="w-4 h-4" />
          </div>

          <div className="w-9 h-9 rounded-full bg-white" />
        </div>
      </header>

      <main className="flex-1 w-full">

        <div className="w-full max-w-5xl mx-auto px-4 py-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-6">
            Onboarding Progress
          </h2>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center md:justify-between">

           
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="text-sm font-medium text-gray-800">
                Basic Info
              </span>
            </div>

            <div className="hidden md:flex-1 h-px bg-gray-300 mx-4" />

           
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-sm font-medium text-gray-600">
                CTRM Expertise
              </span>
            </div>

            <div className="hidden md:flex-1 h-px bg-gray-300 mx-4" />

         
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm font-medium text-gray-600">
                Experience & Projects
              </span>
            </div>

            <div className="hidden md:flex-1 h-px bg-gray-300 mx-4" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center text-sm font-medium">
                4
              </div>
              <span className="text-sm font-medium text-gray-600">
                Work Preferences
              </span>
            </div>
          </div>
        </div>
      
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-start">

         
          <div className="w-full md:w-1/2">
            <div className="w-full bg-white shadow-sm p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                Your Personal Details
              </h2>

              <div className="space-y-5">
                {[
                  { label: "Full Name", placeholder: "John Doe" },
                  { label: "Location", placeholder: "London, UK" },
                  { label: "Current Role", placeholder: "CTRM Business Analyst" },
                  { label: "Company", placeholder: "Acme Energy Solutions" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full rounded-lg bg-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-8 text-center md:text-left">
              Profile Picture
            </h2>

            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium text-gray-800 px-4 py-2 rounded-lg">
                Upload Photo
              </button>

              <p className="text-xs text-gray-500">
                JPG or PNG, max 5MB
              </p>
            </div>
          </div>

        </div>
      </main>

      
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-8 md:px-32 py-4 bg-white">
        <div className="flex gap-4 text-sm">
          <span>About</span>
          <span>Resources</span>
          <span>Legal</span>
        </div>

        <div className="flex gap-6">
          <img src="img/logo/socal/linkedin.svg" alt="" />
          <img src="img/logo/socal/tuter.svg" alt="" />
          <img src="img/logo/socal/Vector.svg" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Onboarding;
