import {
  FiUser,
  FiBell,
  FiShield,
  FiCreditCard,
  FiGrid,
  FiSettings,
} from "react-icons/fi";

const SettingsSidebar = () => {
  return (
   
    <div className="w-64 px-8 py-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        Settings Categories
      </h3>

      <ul className="space-y-1 text-sm">
        
        <li className="flex items-center gap-3 px-3 py-2 rounded-md bg-gray-100 text-gray-900 font-medium cursor-pointer">
          <FiUser className="text-gray-700" />
          Profile Settings
        </li>

        <li className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FiBell />
          Notification Preferences
        </li>

        <li className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FiShield />
          Data & Privacy
        </li>

        <li className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FiCreditCard />
          Subscription & Billing
        </li>

        <li className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FiGrid />
          Integrations
        </li>

        <li className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FiSettings />
          Account Security
        </li>
      </ul>
    </div>
  );
};

export default SettingsSidebar;
