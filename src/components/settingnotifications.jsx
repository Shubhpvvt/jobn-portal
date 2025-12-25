import { useState } from "react";

const Toggle = ({ enabled, setEnabled }) => (
  <button
    onClick={() => setEnabled(!enabled)}
    className={`w-10 h-6 rounded-full relative transition ${
      enabled ? "bg-red-500" : "bg-gray-300"
    }`}
  >
    <span
      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
        enabled ? "translate-x-4" : ""
      }`}
    />
  </button>
);

const SettingNotifications = () => {
  const [jobAlerts, setJobAlerts] = useState(true);
  const [statusUpdates, setStatusUpdates] = useState(false);
  const [newsletters, setNewsletters] = useState(true);

  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="font-semibold text-lg">Notification Preferences</h2>
      <p className="text-sm text-gray-500 mt-1">
        Manage how and when you receive alerts and updates.
      </p>

      <div className="mt-6 space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">New Job Alerts</p>
          <Toggle enabled={jobAlerts} setEnabled={setJobAlerts} />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Application Status Updates</p>
          <Toggle enabled={statusUpdates} setEnabled={setStatusUpdates} />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Company Newsletters</p>
          <Toggle enabled={newsletters} setEnabled={setNewsletters} />
        </div>

        <p className="text-xs text-gray-500">
          We'll only send you important service announcements regardless of
          these settings.
        </p>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
          Update Notifications
        </button>
      </div>
    </div>
  );
};

export default SettingNotifications;

