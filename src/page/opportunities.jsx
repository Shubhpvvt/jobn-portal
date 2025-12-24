import React from "react";
import OpportunitiesTopbar from "../components/opportunitiestopbar";
import OpportunitiesSidebar from "../components/opportunitiessidebar";
import JobCard from "../components/jobcard";
import OpportunitiesFooter from "../components/opportunitiesfooter";

const jobs = [
  {
    company: "Global Energy Solutions · Houston, TX",
    title: "Senior CTRM Consultant - Endur",
    match: 92,
    description:
      "Seeking a highly experienced CTRM consultant with deep expertise in OpenLink Endur implementations.",
    skills: ["Openlink Endur", "SQL", "C#"],
    level: "Senior Level",
  },
  {
    company: "AgriTrade Corp · Chicago, IL",
    title: "Junior CTRM Business Analyst",
    match: 85,
    description:
      "Support trading operations and business systems for a growing team.",
    skills: ["Allegro", "Excel", "Data Analysis"],
    level: "Entry Level",
  },
  {
    company: "TechMetrix Inc · London, UK",
    title: "CTRM Developer - RightAngle",
    match: 90,
    description:
      "Develop and maintain RightAngle CTRM solutions.",
    skills: ["RightAngle", "Python", "SQL Server"],
    level: "Mid Level",
  },
  {
    company: "Commodity Finance Co · New York, NY",
    title: "Risk Management Lead",
    match: 88,
    description:
      "Lead market risk analytics and VaR modeling initiatives.",
    skills: ["Openlink Endur", "Market Risk", "VaR"],
    level: "Lead / Principal",
  },
  {
    company: "Quant Analytics · Singapore",
    title: "Data Engineer - CTRM Systems",
    match: 87,
    description:
      "Build and optimize data pipelines for CTRM platforms.",
    skills: ["ETL", "AWS", "Big Data"],
    level: "Mid Level",
  },
  {
    company: "LogiTrans Energy · Geneva, CH",
    title: "Trading Operations Specialist",
    match: 80,
    description:
      "Support daily trading operations including confirmations and settlements.",
    skills: ["Confirmations", "Settlements"],
    level: "Entry Level",
  },
];

const Opportunities = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex">
       
        <OpportunitiesSidebar />

        
        <div className="flex-1">
          <OpportunitiesTopbar />

      
          <div className="max-w-7xl mx-auto px-6">
            
         
            <div className="bg-white mt-6 p-6 rounded-xl">
              <h1 className="text-2xl font-semibold">
                Find Your Next CTRM Opportunity
              </h1>
              <p className="text-gray-600 mt-1 text-sm">
                Explore a curated list of job openings in the Commodity Trading & Risk Management industry.
              </p>
            </div>

         
            <div className="mt-6 flex justify-between items-center">
              <h2 className="font-semibold">Available Jobs</h2>
              <span className="text-sm text-gray-500">
                {jobs.length}+ Jobs Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>

          </div>

          <OpportunitiesFooter />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
