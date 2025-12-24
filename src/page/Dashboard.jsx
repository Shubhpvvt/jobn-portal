import React from "react";
import Topbar from "../components/topbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">

      {/* TOPBAR */}
      <Topbar />

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <Sidebar />

        {/* ANALYTICS */}
        <div className="w-64 bg-white border-r p-5">
          <h3 className="font-semibold mb-4">Your Analytics</h3>
          <ul className="text-sm space-y-3 text-gray-600">
            <li>Connections</li>
            <li>Jobs Posted</li>
            <li>Certifications</li>
            <li>Profile Views</li>
          </ul>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 p-6">

          {/* PROFILE + QUICK ACTIONS (SAME ROW) */}
          <div className="flex items-start gap-4 mb-6">

            {/* Profile Completion */}
            <div className="bg-white rounded-xl p-5 w-72">
              <h3 className="font-semibold mb-2">Profile Completion</h3>
              <p className="text-sm mb-2">75%</p>

              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 w-[75%] bg-red-500 rounded"></div>
              </div>

              <p className="text-gray-500 text-sm mt-3">
                Complete Your Profile to unlock more features
                and connect with relevant Opportunities
              </p>

              <p className="text-red-500 text-sm mt-3 cursor-pointer">
                Complete Your Profile
              </p>
            </div>

          
            <div className="bg-white rounded-xl p-5 w-72">
              <h3 className="font-semibold mb-4">Quick Actions</h3>

              <div className="flex flex-col gap-3">
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

          
          <div className="bg-white rounded-xl p-5 mb-6 max-w-[36rem]">
            <h3 className="font-semibold mb-4">Recent Messages</h3>

            <div className="space-y-3 text-sm">
              <p><b>Alice Johnson</b> – Q3 report looks promising.</p>
              <p><b>Bob Williams</b> – Let’s discuss new project.</p>
              <p><b>Charlie Green</b> – Need input on market trends.</p>

              <p className="text-red-500 mt-2 cursor-pointer">
                View All Messages
              </p>
            </div>
          </div>

          
          <div className="bg-white rounded-xl p-5">
            <h3 className="font-semibold mb-4">Suggested Professionals</h3>

            <div className="grid grid-cols-3 gap-4 text-sm">
              {["Eve Adams", "Frank Miller", "Grace Lee", "Harry Davis", "Ivy Chen", "Jack Wilson"].map(
                (name) => (
                  <div key={name} className="text-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <p>{name}</p>
                    <button className="mt-2 border border-red-500 text-red-500 px-3 py-1 rounded text-xs">
                      Connect
                    </button>
                  </div>
                )
              )}
            </div>

            <p className="text-red-500 mt-4 cursor-pointer text-sm">
              See All Professionals
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
