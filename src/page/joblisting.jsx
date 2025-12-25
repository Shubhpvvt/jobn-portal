import React from 'react';
import JobListingTopbar from "../components/joblistingtopbar";
import JobListingSidebar from "../components/joblistingsidebar";
import JobListingContent from "../components/joblistingcontent";
import JobListingFooter from "../components/joblistingfooter";

const JobListing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <JobListingTopbar />

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <JobListingContent />
        </div>
        <JobListingSidebar />
      </div>

      <JobListingFooter />
    </div>
  );
};

export default JobListing;
