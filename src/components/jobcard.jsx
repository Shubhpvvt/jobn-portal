import React from "react";
const JobCard = ({ job }) => {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-lg
        p-4
        shadow-sm
        hover:shadow-md
        transition
        flex flex-col
        h-[270px]
        w-full
      "
    >
   
      <div className="flex justify-between items-start">
        <p className="text-[11px] text-gray-500 leading-none">
          {job.company}
        </p>

        <span className="text-[10px] bg-red-100 text-red-600 px-2 py-[3px] rounded-full">
          Match Score: {job.match}%
        </span>
      </div>


      <h3 className="text-sm font-semibold text-gray-900 mt-2 leading-snug">
        {job.title}
      </h3>

  
      <p className="text-xs text-gray-600 mt-2 leading-[1.4] line-clamp-3">
        {job.description}
      </p>

 
      <div className="flex flex-wrap gap-2 mt-3">
        {job.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-700 text-[10px] px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

 
      <div className="mt-auto">
        <p className="text-xs text-gray-500 mt-2">
          ↳ {job.level}
        </p>

        <button className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white text-xs py-2 rounded">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default JobCard;
