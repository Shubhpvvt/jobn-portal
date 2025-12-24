import React from "react";
import ProfileTopbar from "../components/profiletopbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">

     
      <ProfileTopbar />

      <div className="max-w-6xl mx-auto bg-white mt-6 rounded shadow-sm px-8 py-6">

        
        <div className="flex justify-between items-start">

        
          <div className="flex gap-4">
            <img
              src="https://i.pravatar.cc/120"
              alt="profile"
              className="w-20 h-20 rounded-full"
            />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Samantha Lee
              </h2>
              <p className="text-sm text-gray-500">
                Senior CTRM Consultant • Houston, TX
              </p>
            </div>
          </div>

         
          <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">
            Edit Profile
          </button>
        </div>

        
        <p className="text-sm text-black mt-4 leading-relaxed">
          Highly skilled CTRM consultant with 10+ years of experience in optimizing
          commodity trading and risk management operations. My expertise spans
          across front, middle, and back office processes, specializing in platform
          implementations, system integrations, and business process re-engineering.
          I am adept at translating complex business requirements into technical
          solutions, driving efficiency, and ensuring regulatory compliance.
        </p>

        
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Profile Completion</span>
            <span>75%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 w-[75%] bg-red-500 rounded"></div>
          </div>
        </div>

       
        <div className="flex gap-6 border-b mt-6 text-sm">
          <button className="pb-2 border-b-2 border-red-500 text-red-500 font-medium">
            About
          </button>
          <button className="pb-2 text-gray-500">CTRM Expertise</button>
          <button className="pb-2 text-gray-500">Projects</button>
          <button className="pb-2 text-gray-500">Preferences</button>
        </div>

       
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            Detailed Summary
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I am a highly driven and results-oriented CTRM consultant with a proven
            track record of over 10 years in optimizing commodity trading and risk
            management operations. My expertise spans front, middle, and back office
            processes, specializing in platform implementations, system integrations,
            and business process re-engineering.
          </p>
        </div>

        
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-4">
            Work Experience
          </h3>

          
          <div className="border rounded p-4 mb-4">
            <h4 className="font-medium text-gray-800">
              Senior Consultant – CTRM
            </h4>
            <p className="text-xs text-gray-500 mb-2">
              Alpha Solutions Inc | Jan 2020 – Present
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Led multiple Endur implementation projects</li>
              <li>Developed custom risk models and reporting tools</li>
              <li>Provided expert advice on system architecture</li>
            </ul>
          </div>

       
          <div className="border rounded p-4">
            <h4 className="font-medium text-gray-800">
              CTRM Analyst
            </h4>
            <p className="text-xs text-gray-500 mb-2">
              Beta Commodities LLC | Jul 2014 – Dec 2019
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Supported daily trading operations</li>
              <li>Assisted in UAT testing for Allegro upgrades</li>
              <li>Managed data flows between systems</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;
