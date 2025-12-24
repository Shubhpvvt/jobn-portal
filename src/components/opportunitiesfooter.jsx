import React from "react";

const OpportunitiesFooter = () => {
  return (
    <div className="border-t pt-8 mt-16 text-sm text-gray-600 flex justify-between">
      <div className="flex gap-12">
        <div>
          <p className="font-medium mb-2">Product</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Integrations</p>
        </div>

        <div>
          <p className="font-medium mb-2">Resources</p>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Community</p>
        </div>

        <div>
          <p className="font-medium mb-2">Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesFooter;
