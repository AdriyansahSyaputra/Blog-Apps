import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  Check,
  ChevronDown,
  Lock,
  Mail,
  Eye,
  User,
  UserPlus,
} from "lucide-react";

const AddUserPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const { darkMode, toggleTheme } = useTheme();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    status: "active",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setUser({ ...user, avatar: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic would go here
    console.log("User submitted:", user);
  };

  return (
    <>
      <Helmet title="Dashboard | Add Post" />

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
          <main className="p-6 space-y-6">
            <div
              className={`min-h-screen transition-colors duration-300 ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <div className="max-w-4xl mx-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1
                      className={`text-3xl font-bold flex items-center gap-3 ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <UserPlus size={28} className="text-blue-500" />
                      Add New User
                    </h1>
                    <p
                      className={`mt-1 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Create a new user account with specific permissions
                    </p>
                  </div>
                </div>

                {/* Form Container */}
                <div
                  className={`rounded-xl shadow-lg overflow-hidden ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left Column - Avatar */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`relative w-40 h-40 rounded-full mb-6 border-2 ${
                            darkMode ? "border-gray-600" : "border-gray-200"
                          }`}
                        >
                          {avatarPreview ? (
                            <>
                              <img
                                src={avatarPreview}
                                alt="Avatar Preview"
                                className="w-full h-full rounded-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setAvatarPreview(null);
                                  setUser({ ...user, avatar: null });
                                }}
                                className={`absolute top-0 right-0 p-1 rounded-full ${
                                  darkMode
                                    ? "bg-gray-700 hover:bg-gray-600"
                                    : "bg-gray-200 hover:bg-gray-300"
                                }`}
                              >
                                <X size={16} />
                              </button>
                            </>
                          ) : (
                            <div
                              className={`w-full h-full rounded-full flex items-center justify-center ${
                                darkMode ? "bg-gray-700" : "bg-gray-100"
                              }`}
                            >
                              <User
                                size={48}
                                className={
                                  darkMode ? "text-gray-500" : "text-gray-400"
                                }
                              />
                            </div>
                          )}
                        </div>
                        <label
                          className={`cursor-pointer px-4 py-2 rounded-lg ${
                            darkMode
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-blue-500 hover:bg-blue-600"
                          } text-white transition flex items-center gap-2`}
                        >
                          <input
                            type="file"
                            accept="image/*"
                            name="avatar"
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          <span>Upload Photo</span>
                        </label>
                      </div>

                      {/* Right Column - Form Fields */}
                      <div className="space-y-6">
                        {/* Name Field */}
                        <div>
                          <label
                            htmlFor="name"
                            className={`block text-sm font-medium mb-2 ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            Full Name
                          </label>
                          <div
                            className={`relative flex items-center rounded-lg border ${
                              darkMode
                                ? "border-gray-600 bg-gray-700"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            <div
                              className={`absolute left-3 ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              <User size={18} />
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={user.name}
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:outline-none ${
                                darkMode
                                  ? "focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
                                  : "focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                              }`}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          {errors.name && (
                            <p
                              className={`mt-1 text-sm ${
                                darkMode ? "text-red-400" : "text-red-500"
                              }`}
                            >
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label
                            htmlFor="email"
                            className={`block text-sm font-medium mb-2 ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            Email Address
                          </label>
                          <div
                            className={`relative flex items-center rounded-lg border ${
                              darkMode
                                ? "border-gray-600 bg-gray-700"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            <div
                              className={`absolute left-3 ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              <Mail size={18} />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={user.email}
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:outline-none ${
                                darkMode
                                  ? "focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
                                  : "focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                              }`}
                              placeholder="user@example.com"
                              required
                            />
                          </div>
                          {errors.email && (
                            <p
                              className={`mt-1 text-sm ${
                                darkMode ? "text-red-400" : "text-red-500"
                              }`}
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Password Field */}
                        <div>
                          <label
                            htmlFor="password"
                            className={`block text-sm font-medium mb-2 ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            Password
                          </label>
                          <div
                            className={`relative flex items-center rounded-lg border ${
                              darkMode
                                ? "border-gray-600 bg-gray-700"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            <div
                              className={`absolute left-3 ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              <Lock size={18} />
                            </div>
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              value={user.password}
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-10 py-3 rounded-lg focus:ring-2 focus:outline-none ${
                                darkMode
                                  ? "focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
                                  : "focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                              }`}
                              placeholder="••••••••"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className={`absolute right-3 ${
                                darkMode
                                  ? "text-gray-400 hover:text-gray-300"
                                  : "text-gray-500 hover:text-gray-700"
                              }`}
                            >
                              {showPassword ? (
                                <EyeOff size={18} />
                              ) : (
                                <Eye size={18} />
                              )}
                            </button>
                          </div>
                          {errors.password && (
                            <p
                              className={`mt-1 text-sm ${
                                darkMode ? "text-red-400" : "text-red-500"
                              }`}
                            >
                              {errors.password}
                            </p>
                          )}
                        </div>

                        {/* Role and Status */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Role Select */}
                          <div>
                            <label
                              htmlFor="role"
                              className={`block text-sm font-medium mb-2 ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Role
                            </label>
                            <div className="relative">
                              <select
                                id="role"
                                name="role"
                                value={user.role}
                                onChange={handleInputChange}
                                className={`appearance-none w-full px-4 py-3 pr-8 rounded-lg border focus:ring-2 focus:outline-none ${
                                  darkMode
                                    ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                    : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                              >
                                <option value="user">User</option>
                                <option value="editor">Editor</option>
                                <option value="admin">Administrator</option>
                              </select>
                              <div
                                className={`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                <ChevronDown size={18} />
                              </div>
                            </div>
                          </div>

                          {/* Status Select */}
                          <div>
                            <label
                              htmlFor="status"
                              className={`block text-sm font-medium mb-2 ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Status
                            </label>
                            <div className="relative">
                              <select
                                id="status"
                                name="status"
                                value={user.status}
                                onChange={handleInputChange}
                                className={`appearance-none w-full px-4 py-3 pr-8 rounded-lg border focus:ring-2 focus:outline-none ${
                                  darkMode
                                    ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                    : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                              >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="suspended">Suspended</option>
                              </select>
                              <div
                                className={`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                <ChevronDown size={18} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="mt-10 flex justify-end space-x-4">
                      <button
                        type="button"
                        className={`px-6 py-2.5 rounded-lg border ${
                          darkMode
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        } transition`}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className={`px-6 py-2.5 rounded-lg flex items-center gap-2 ${
                          darkMode
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-blue-500 hover:bg-blue-600"
                        } text-white transition`}
                      >
                        <Check size={18} />
                        Create User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddUserPage;
