import { Camera, User } from "lucide-react";
import { useState } from "react";

const ProfileSettings = ({ darkMode }) => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@blogadmin.com",
    bio: "Content management system administrator",
    avatar: null,
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile((prev) => ({ ...prev, avatar: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
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
        <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
          <User className="w-5 h-5 text-white" />
        </div>
        <h3
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Profile Settings
        </h3>
      </div>

      <div className="space-y-6">
        {/* Avatar Upload */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
            <label className="absolute -bottom-2 -right-2 p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white cursor-pointer hover:shadow-lg transition-all duration-200">
              <Camera className="w-4 h-4" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <h4
              className={`font-medium ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Profile Picture
            </h4>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Upload a new profile picture
            </p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, name: e.target.value }))
              }
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
              Email Address
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, email: e.target.value }))
              }
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
              Bio
            </label>
            <textarea
              value={profile.bio}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, bio: e.target.value }))
              }
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
              }`}
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;