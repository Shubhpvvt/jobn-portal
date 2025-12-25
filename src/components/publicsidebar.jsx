import {
  FiUsers,
  FiCheckCircle,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";

const PublicSidebar = () => {
  return (
    <div className="w-full space-y-5">

      
      <div className="bg-[#fdfdfd] border border-gray-200 px-3 py-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Mutual Connections
        </h3>

        <div className="space-y-2">
          <Connection name="Sarah Chen" />
          <Connection name="Michael Green" />
          <Connection name="Priya Sharma" />
          <Connection name="David Lee" />
        </div>
      </div>

      
      <div className="bg-[#fdfdfd] border border-gray-200 px-3 py-3">
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Profile Stats
        </h3>

        <div className="space-y-3">

          <Stat
            icon={<FiUsers size={16} />}
            label="Connections"
            value="500+"
          />

          <Stat
            icon={<FiCheckCircle size={16} />}
            label="Assessments Completed"
            value="8"
          />

          <Stat
            icon={<FiBriefcase size={16} />}
            label="Projects Delivered"
            value="12"
          />

          <Stat
            icon={<FiFileText size={16} />}
            label="Articles Published"
            value="3"
          />

        </div>
      </div>

    </div>
  );
};

const Connection = ({ name }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 bg-gray-200" />
      <span className="text-sm text-gray-700">
        {name}
      </span>
    </div>
  );
};


const Stat = ({ icon, label, value }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
      <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
        {icon}
        <span>{label}</span>
      </div>

      <span className="text-sm font-semibold text-gray-900">
        {value}
      </span>
    </div>
  );
};

export default PublicSidebar;
