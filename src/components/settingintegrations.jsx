const SettingIntegrations = () => {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="font-semibold text-lg">Integrations</h2>
      <p className="text-sm text-gray-500 mt-1">
        Connect with external platforms and tools.
      </p>

      <div className="space-y-5 mt-6">
     
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">LinkedIn Sync</p>
            <p className="text-xs text-gray-500">
              Synchronize your profile with LinkedIn.
            </p>
          </div>

          <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-50">
            Connect
          </button>
        </div>

      
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Calendar Integration</p>
            <p className="text-xs text-gray-500">
              Link your calendar for interview scheduling.
            </p>
          </div>

          <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-50">
            Connect
          </button>
        </div>

        <p className="text-xs text-gray-500">
          More integrations coming soon to enhance your experience.
        </p>
      </div>
    </div>
  );
};

export default SettingIntegrations;

