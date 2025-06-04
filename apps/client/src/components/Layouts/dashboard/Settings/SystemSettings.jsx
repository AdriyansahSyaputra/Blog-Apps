import { AlertCircle, CheckCircle, Database, RefreshCw } from "lucide-react";
import { useState } from "react";

const SystemSettings = ({ darkMode }) => {
  const [backupStatus, setBackupStatus] = useState("completed");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  const handleBackup = () => {
    setBackupStatus("running");
    setTimeout(() => {
      setBackupStatus("completed");
    }, 3000);
  };

  const handleClearCache = () => {
    // Simulate cache clearing
    console.log("Cache cleared");
  };

  return (
    <div
      className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/50 border-gray-700/50"
          : "bg-white/50 border-gray-200/50"
      }`}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600">
          <Database className="w-5 h-5 text-white" />
        </div>
        <h3
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          System Settings
        </h3>
      </div>

      <div className="space-y-6">
        {/* Backup Section */}
        <div
          className={`p-4 rounded-xl border ${
            darkMode
              ? "border-gray-700/50 bg-gray-800/30"
              : "border-gray-200/50 bg-gray-50/30"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Database Backup
              </h5>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Last backup: 2 hours ago
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {backupStatus === "completed" && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {backupStatus === "running" && (
                <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />
              )}
              <span
                className={`text-sm ${
                  backupStatus === "completed"
                    ? "text-green-500"
                    : backupStatus === "running"
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
              >
                {backupStatus === "completed"
                  ? "Completed"
                  : backupStatus === "running"
                  ? "Running..."
                  : "Pending"}
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleBackup}
              disabled={backupStatus === "running"}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                backupStatus === "running"
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg"
              } text-white`}
            >
              {backupStatus === "running" ? "Backing up..." : "Backup Now"}
            </button>
            <button
              onClick={handleClearCache}
              className={`px-4 py-2 rounded-lg text-sm border transition-all duration-200 ${
                darkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Clear Cache
            </button>
          </div>
        </div>

        {/* Maintenance Mode */}
        <div
          className={`p-4 rounded-xl border ${
            darkMode
              ? "border-gray-700/50 bg-gray-800/30"
              : "border-gray-200/50 bg-gray-50/30"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h5
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Maintenance Mode
              </h5>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Temporarily disable the website for maintenance
              </p>
            </div>
            <button
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                maintenanceMode
                  ? "bg-gradient-to-r from-red-500 to-pink-600"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  maintenanceMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          {maintenanceMode && (
            <div className="flex items-center space-x-2 mt-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              <p className="text-sm text-orange-500">
                Website is currently in maintenance mode
              </p>
            </div>
          )}
        </div>

        {/* Auto Backup */}
        <div
          className={`p-4 rounded-xl border ${
            darkMode
              ? "border-gray-700/50 bg-gray-800/30"
              : "border-gray-200/50 bg-gray-50/30"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h5
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Automatic Backup
              </h5>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Automatically backup database daily at 3:00 AM
              </p>
            </div>
            <button
              onClick={() => setAutoBackup(!autoBackup)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                autoBackup
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  autoBackup ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;