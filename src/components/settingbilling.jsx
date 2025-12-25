const SettingBilling = () => {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="font-semibold text-lg">Subscription & Billing</h2>
      <p className="text-sm text-gray-500 mt-1">
        View your current plan and manage billing information.
      </p>

      <div className="flex items-start justify-between mt-6">
        <div>
          <p className="text-sm font-medium">Current Plan</p>
          <p className="text-sm text-gray-600 mt-1">
            Free Tier <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded">Active</span>
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Enjoy essential features with our Free Tier. Upgrade to unlock more benefits.
          </p>

          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
            Upgrade to Pro
          </button>
        </div>

        <button className="text-sm text-red-600 hover:underline">
          Manage Billing
        </button>
      </div>
    </div>
  );
};

export default SettingBilling;

