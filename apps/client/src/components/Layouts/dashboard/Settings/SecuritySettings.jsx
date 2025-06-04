import { Eye, EyeOff, Shield } from "lucide-react";
import { useState } from "react";

const SecuritySettings = ({ darkMode }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [twoFactor, setTwoFactor] = useState(false);
  const [loginNotifications, setLoginNotifications] = useState(true);

  return (
    <div
      className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/50 border-gray-700/50"
          : "bg-white/50 border-gray-200/50"
      }`}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-600">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <h3
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Security Settings
        </h3>
      </div>

      <div className="space-y-6">
        {/* Password Change */}
        <div>
          <h4
            className={`text-lg font-medium mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Change Password
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwords.current}
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      current: e.target.value,
                    }))
                  }
                  className={`w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {showCurrentPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords((prev) => ({ ...prev, new: e.target.value }))
                  }
                  className={`w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {showNewPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Confirm Password
              </label>
              <input
                type="password"
                value={passwords.confirm}
                onChange={(e) =>
                  setPasswords((prev) => ({ ...prev, confirm: e.target.value }))
                }
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Two Factor Authentication */}
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
                Two-Factor Authentication
              </h5>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Add an extra layer of security to your account
              </p>
            </div>
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                twoFactor
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  twoFactor ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Login Notifications */}
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
                Login Notifications
              </h5>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Get notified when someone logs into your account
              </p>
            </div>
            <button
              onClick={() => setLoginNotifications(!loginNotifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                loginNotifications
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  loginNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;