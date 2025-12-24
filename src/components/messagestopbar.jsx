import { FiSearch, FiSettings } from "react-icons/fi";

const MessagesTopbar = () => {
  return (
    <div className="h-14 bg-white border-b flex items-center justify-between px-6">


      <div className="flex gap-6 text-sm font-medium text-gray-700 mx-auto">
        <span>Dashboard</span>
        <span>Profile</span>
        <span>Explore</span>
        <span>Opportunities</span>
        <span className="text-red-500">Messages</span>
      </div>


      <div className="flex items-center gap-3">
        <FiSearch className="text-gray-600" />
        <FiSettings className="text-gray-600" />
        <img
          src="https://i.pravatar.cc/32"
          className="w-8 h-8 rounded-full"
        />
      </div>

    </div>
  );
};

export default MessagesTopbar;
