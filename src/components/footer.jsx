import React from "react";

const Footer = () => {
  return (
    <div className="border-t mt-12 py-4 px-10 flex justify-between items-center text-sm text-gray-500 bg-white">

      <div className="flex gap-6">
        <span className="cursor-pointer hover:text-black">Resources</span>
        <span className="cursor-pointer hover:text-black">Legal</span>
      </div>

      <div className="flex gap-4 text-lg">
        <i className="ri-linkedin-fill cursor-pointer hover:text-black"></i>
        <i className="ri-twitter-x-line cursor-pointer hover:text-black"></i>
      </div>

    </div>
  );
};

export default Footer;
