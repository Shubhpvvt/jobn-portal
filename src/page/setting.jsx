import SettingTopbar from "../components/settingtopbar";
import SettingsSidebar from "../components/settingsidebar";
import SettingProfile from "../components/settingprofile";
import SettingNotifications from "../components/settingnotifications";
import SettingPrivacy from "../components/settingprivacy";
import SettingBilling from "../components/settingbilling";
import SettingIntegrations from "../components/settingintegrations";
import SettingSecurity from "../components/settingsecurity";
import SettingFooter from "../components/settingfooter";
const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SettingTopbar />

      {/* MAIN LAYOUT */}
      <div className="flex flex-1">

        {/* LEFT SIDEBAR (border-r REMOVED) */}
        <div className="w-64 px-6 py-6">
          <SettingsSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 px-10 py-6 space-y-6">
          <SettingProfile />
          <SettingNotifications />
          <SettingPrivacy />
          <SettingBilling />
          <SettingIntegrations />
          <SettingSecurity />
        </div>

      </div>

      {/* FOOTER */}
      <SettingFooter />
    </div>
  );
};

export default Settings;
