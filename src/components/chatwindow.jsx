import React from "react";
import { FiPhone, FiVideo, FiUser } from "react-icons/fi";

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-full bg-white">

      {/* HEADER (FIXED) */}
      <div className="h-14 border-b px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full" />
          <span className="font-medium text-gray-800">Alice Johnson</span>
        </div>

        <div className="flex gap-6 text-gray-600">
          <FiPhone size={18} />
          <FiVideo size={18} />
          <FiUser size={18} />
        </div>
      </div>

      {/* MESSAGES (ONLY THIS SCROLLS) */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-6">

        {/* Yesterday */}
        <div className="flex items-center justify-center">
          <span className="text-xs text-gray-400">Yesterday</span>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#ff3b30] text-white px-4 py-2 rounded-lg max-w-md">
            Hi Alice, hope you're having a good week!
          </div>
        </div>

        <div className="flex gap-3">
          <img src="https://i.pravatar.cc/30" className="w-7 h-7 rounded-full" />
          <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-md">
            I've reviewed the CTRM report.
          </div>
        </div>

        {/* Today */}
        <div className="flex items-center justify-center">
          <span className="text-xs text-gray-400">Today</span>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#ff3b30] text-white px-4 py-2 rounded-lg max-w-md">
            Sure, I can walk you through it.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatWindow;
