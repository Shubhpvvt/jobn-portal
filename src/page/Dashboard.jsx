import React from "react";
import Topbar from "../components/topbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col overflow-hidden">

      {/* TOPBAR */}
      <Topbar />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <Sidebar />

        {/* ANALYTICS (RIGHT OF SIDEBAR) */}
        <div className="w-56 bg-white border-r p-4 hidden lg:block">
          <h3 className="font-semibold mb-3 text-sm">
            Your Analytics
          </h3>
          <ul className="text-xs space-y-2 text-gray-600">
            <li>Connections</li>
            <li>Jobs Posted</li>
            <li>Certifications</li>
            <li>Profile Views</li>
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4 overflow-y-auto">

          {/* PROFILE + QUICK ACTIONS */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">

            {/* PROFILE COMPLETION */}
            <div className="bg-white rounded-xl p-4 w-full md:w-[260px]">
              <h3 className="font-semibold text-sm mb-1">
                Profile Completion
              </h3>
              <p className="text-xs mb-2">75%</p>

              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 w-[75%] bg-red-500 rounded"></div>
              </div>

              <p className="text-gray-500 text-xs mt-2">
                Complete your profile to unlock more features.
              </p>

              <p className="text-red-500 text-xs mt-2 cursor-pointer">
                Complete Your Profile
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-xl p-4 w-full md:w-[260px]">
              <h3 className="font-semibold text-sm mb-3">
                Quick Actions
              </h3>

              <div className="flex flex-col gap-2 text-xs">
                <button className="bg-red-500 text-white py-2 rounded">
                  Edit Profile
                </button>
                <button className="border border-red-500 text-red-500 py-2 rounded">
                  Post Opportunity
                </button>
                <button className="border border-red-500 text-red-500 py-2 rounded">
                  Explore Professionals
                </button>
              </div>
            </div>

          </div>

          {/* RECENT MESSAGES */}
          <div className="bg-white rounded-xl p-4 mb-4 max-w-[420px]">
            <h3 className="font-semibold text-sm mb-3">
              Recent Messages
            </h3>

            <div className="space-y-2 text-xs">
              <p><b>Alice Johnson</b> – Q3 report looks promising.</p>
              <p><b>Bob Williams</b> – Let’s discuss new project.</p>
              <p><b>Charlie Green</b> – Need input on market trends.</p>

              <p className="text-red-500 mt-2 cursor-pointer">
                View All Messages
              </p>
            </div>
          </div>

          {/* SUGGESTED PROFESSIONALS */}
          <div className="bg-white rounded-xl p-4 max-w-[640px]">
            <h3 className="font-semibold text-sm mb-3">
              Suggested Professionals
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              {[
                "Eve Adams",
                "Frank Miller",
                "Grace Lee",
                "Harry Davis",
                "Ivy Chen",
                "Jack Wilson",
              ].map((name) => (
                <div key={name} className="text-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto mb-1"></div>
                  <p>{name}</p>
                  <button className="mt-1 border border-red-500 text-red-500 px-3 py-1 rounded text-[11px]">
                    Connect
                  </button>
                </div>
              ))}
            </div>

            <p className="text-red-500 mt-3 cursor-pointer text-xs">
              See All Professionals
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
