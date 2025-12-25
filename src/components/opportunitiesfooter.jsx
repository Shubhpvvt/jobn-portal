import React from "react";

const OpportunitiesFooter = () => {
  return (
    <div className="border-t mt-16 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-end text-sm text-gray-600">
        <div className="flex gap-16">
          
          <div>
            <p className="font-medium mb-2 text-gray-800">Product</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Integrations</p>
          </div>

          <div>
            <p className="font-medium mb-2 text-gray-800">Resources</p>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Community</p>
          </div>

          <div>
            <p className="font-medium mb-2 text-gray-800">Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OpportunitiesFooter;
