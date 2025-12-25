import React from "react";

const ExploreCard = ({ name, role, company, image, tags }) => {
  return (
    <div className="bg-white border rounded-xl p-6 flex flex-col h-full">

      
      <div className="flex flex-col items-center text-center flex-1">

        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full mb-4 object-cover"
        />

        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{role}</p>
        <p className="text-xs text-gray-400 mb-4">{company}</p>

      
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

     
      <button className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm">
        Connect
      </button>
    </div>
  );
};

export default ExploreCard;

