import React from "react";
const Footer = () => {
  return (
    <div className="h-12 border-t bg-white flex items-center justify-between px-6 text-sm text-gray-500">
      <div className="flex gap-6">
        <span className="cursor-pointer">Product</span>
        <span className="cursor-pointer">Support</span>
      </div>

      <div className="flex gap-4">
        <span>LinkedIn</span>
        <span>Twitter</span>
      </div>
    </div>
  );
};

export default Footer;

