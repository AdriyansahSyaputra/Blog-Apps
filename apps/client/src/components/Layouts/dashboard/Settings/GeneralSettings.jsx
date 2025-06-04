import { Globe } from "lucide-react";
import { useState } from "react";

const GeneralSettings = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    siteName: "BlogAdmin",
    siteDescription: "A modern content management system",
    siteUrl: "https://blogadmin.com",
    adminEmail: "admin@blogadmin.com",
    timezone: "Asia/Jakarta",
    language: "en",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
        <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <h3
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          General Settings
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Site Name
          </label>
          <input
            type="text"
            value={formData.siteName}
            onChange={(e) => handleInputChange("siteName", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
            }`}
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Admin Email
          </label>
          <input
            type="email"
            value={formData.adminEmail}
            onChange={(e) => handleInputChange("adminEmail", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
            }`}
          />
        </div>

        <div className="md:col-span-2">
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Site Description
          </label>
          <textarea
            value={formData.siteDescription}
            onChange={(e) =>
              handleInputChange("siteDescription", e.target.value)
            }
            rows={3}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
            }`}
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Timezone
          </label>
          <select
            value={formData.timezone}
            onChange={(e) => handleInputChange("timezone", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-white"
                : "bg-gray-50/50 border-gray-200 text-gray-800"
            }`}
          >
            <option value="Asia/Jakarta">Asia/Jakarta</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York</option>
          </select>
        </div>

        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Language
          </label>
          <select
            value={formData.language}
            onChange={(e) => handleInputChange("language", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-white"
                : "bg-gray-50/50 border-gray-200 text-gray-800"
            }`}
          >
            <option value="en">English</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
