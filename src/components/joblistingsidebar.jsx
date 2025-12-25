import { FiShare2 } from "react-icons/fi";

const JobListingSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
      <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>

      <div className="space-y-5 text-sm">
       
        <div>
          <p className="text-gray-500">Location</p>
          <p className="font-medium text-gray-900">
            Houston, TX (Remote Available)
          </p>
        </div>

        
        <div>
          <p className="text-gray-500">Job Type</p>
          <p className="font-medium text-gray-900">
            Full-time, Hybrid
          </p>
        </div>

        
        <div>
          <p className="text-gray-500">Experience Level</p>
          <p className="font-medium text-gray-900">
            Senior (8+ years)
          </p>
        </div>

       
        <div>
          <p className="text-gray-500">Compensation</p>
          <p className="font-medium text-gray-900">
            $150,000 – $180,000 Annually + Bonus
          </p>
        </div>

      
        <div>
          <p className="text-gray-500">Posted On</p>
          <p className="font-medium text-gray-900">
            May 15, 2024
          </p>
        </div>
      </div>

     <button className="mt-6 w-full flex items-center justify-center gap-2 border rounded-md py-2 text-sm font-medium hover:bg-gray-50">
        <FiShare2 />
        Share Job
      </button>
    </div>
  );
};

export default JobListingSidebar;
