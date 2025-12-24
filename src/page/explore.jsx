import React from "react";
import ExploreTopbar from "../components/exploretopbar";
import ExploreSidebar from "../components/exploresidebar";
import ExploreCard from "../components/explorecard";
import Footer from "../components/footer";

const data = [
  {
    name: "David Lee",
    role: "Lead CTRM Developer",
    company: "Quantum Software Solutions",
    image: "https://i.pravatar.cc/150?img=11",
    tags: ["OpenLink", "C#", "SQL", "Technical Support"],
  },
  {
    name: "Eva Green",
    role: "Commodity Risk Manager",
    company: "Financial Derivatives Inc.",
    image: "https://i.pravatar.cc/150?img=12",
    tags: ["Triple Point", "Risk Analytics", "Compliance", "Hedging"],
  },
  {
    name: "Frank White",
    role: "Junior CTRM Analyst",
    company: "StartUp Energy Innovations",
    image: "https://i.pravatar.cc/150?img=13",
    tags: ["Excel", "Data Entry", "Basic Reporting", "Learning Endur"],
  },
  {
    name: "Grace Hall",
    role: "Senior Project Manager",
    company: "CTRM Implementation Group",
    image: "https://i.pravatar.cc/150?img=14",
    tags: ["Project Management", "Stakeholder Engagement", "Change Management"],
  },
  {
    name: "Henry King",
    role: "CTRM Solution Architect",
    company: "Global IT Solutions",
    image: "https://i.pravatar.cc/150?img=15",
    tags: ["Allegro", "Cloud Solutions", "Architecture Design", "Consulting"],
  },
  {
    name: "Alice Johnson",
    role: "CTRM Solution Architect",
    company: "Global IT Solutions",
    image: "https://i.pravatar.cc/150?img=16",
    tags: ["Allegro", "Cloud Solutions", "Architecture Design", "Consulting"],
  },
  {
    name: "Alice Johnson",
    role: "CTRM Solution Architect",
    company: "Global IT Solutions",
    image: "https://i.pravatar.cc/150?img=16",
    tags: ["Allegro", "Cloud Solutions", "Architecture Design", "Consulting"],
  },
  {
    name: "Alice Johnson",
    ole: "CTRM Solution Architect",
    company: "Global IT Solutions",
    image: "https://i.pravatar.cc/150?img=16",
    tags: ["Allegro", "Cloud Solutions", "Architecture Design", "Consulting"],
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-50">

 
      <ExploreTopbar />

      <div className="flex">

        
        <ExploreSidebar />

      
        <div className="flex-1 px-10 py-8">

          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Explore Professionals
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {data.map((item, index) => (
              <ExploreCard key={index} {...item} />
            ))}
          </div>

          
          <div className="flex justify-center items-center gap-3 mt-12 text-sm text-gray-600">
            <button className="hover:text-black">&lt; Previous</button>

            <button className="w-8 h-8 border rounded bg-white font-medium">
              1
            </button>
            <button className="w-8 h-8 border rounded hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 border rounded hover:bg-gray-100">
              3
            </button>

            <span>…</span>

            <button className="hover:text-black">Next &gt;</button>
          </div>

        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Explore;