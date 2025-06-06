import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  CheckCircle,
  Save,
  Settings,
  User,
  Shield,
  Database,
} from "lucide-react";
import GeneralSettings from "../../components/Layouts/dashboard/Settings/GeneralSettings";
import ProfileSettings from "../../components/Layouts/dashboard/Settings/ProfileSettings";
import SecuritySettings from "../../components/Layouts/dashboard/Settings/SecuritySettings";
import SystemSettings from "../../components/Layouts/dashboard/Settings/SystemSettings";

const SettingsPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [activeTab, setActiveTab] = useState("general");
  const [saved, setSaved] = useState(false);

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "system", label: "System", icon: Database },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings darkMode={darkMode} />;
      case "profile":
        return <ProfileSettings darkMode={darkMode} />;
      case "security":
        return <SecuritySettings darkMode={darkMode} />;
      case "system":
        return <SystemSettings darkMode={darkMode} />;
      default:
        return <GeneralSettings darkMode={darkMode} />;
    }
  };

  return (
    <>
      <Helmet title="Dashboard | Settings" />

      <div
        className={`min-h-screen transition-all duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
      >
        <Sidebar
          darkMode={darkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        {/* Main Content */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-20"
          }`}
        >
          {/* Topbar */}
          <Topbar
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content */}
          <main className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Settings
              </h1>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Manage your application settings and preferences
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar Navigation */}
              <div className="lg:w-64 flex-shrink-0">
                <div
                  className={`p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-700/50"
                      : "bg-white/50 border-gray-200/50"
                  }`}
                >
                  <nav className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;

                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                            isActive
                              ? darkMode
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                              : darkMode
                              ? "hover:bg-gray-800/50 text-gray-300 hover:text-white"
                              : "hover:bg-gray-100/50 text-gray-600 hover:text-gray-800"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 mr-3 transition-transform duration-200 ${
                              isActive ? "scale-110" : "group-hover:scale-105"
                            }`}
                          />
                          <span className="font-medium">{tab.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="space-y-6">
                  {/* Success Message */}
                  {saved && (
                    <div
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        darkMode
                          ? "bg-green-900/20 border-green-700/50 text-green-300"
                          : "bg-green-50 border-green-200 text-green-800"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">
                          Settings saved successfully!
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Tab Content */}
                  {renderContent()}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={handleSave}
                      className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                    >
                      <Save className="w-5 h-5 mr-2" />
                      Save Changes
                    </button>
                    <button
                      className={`px-6 py-3 rounded-xl font-medium border transition-all duration-200 ${
                        darkMode
                          ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Reset to Default
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
