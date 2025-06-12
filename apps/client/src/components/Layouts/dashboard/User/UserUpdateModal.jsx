import {
  X,
  User,
  Mail,
  Phone,
  Calendar,
  Shield,
  Activity,
  Camera,
} from "lucide-react";

const UserUpdateModal = ({
  darkMode,
  handleCancel,
  handleChange,
  formData,
  handleSave,
  errors,
  selectedImage,
  handleImageUpload,
  removeImage,
}) => {
  const formatDateToInput = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0]; // -> 'YYYY-MM-DD'
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        darkMode ? "bg-black/60" : "bg-black/40"
      } backdrop-blur-sm`}
    >
      <div
        className={`w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }`}
      >
        {/* Header */}
        <div
          className={`relative px-6 py-4 border-b ${
            darkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-xl ${
                  darkMode
                    ? "bg-blue-600/20 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <User size={20} />
              </div>
              <div>
                <h2
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Update User Information
                </h2>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Modify user details and settings
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCancel}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "hover:bg-gray-700 text-gray-400 hover:text-red-400"
                    : "hover:bg-gray-200 text-gray-500 hover:text-red-500"
                }`}
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-500/20 relative">
                  <img
                    src={
                      selectedImage ||
                      `${import.meta.env.VITE_BASE_URL}/uploads/img/${
                        formData.avatar
                      }`
                    }
                    alt={formData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <label
                  htmlFor="avatar-upload"
                  className={`absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer ${
                    darkMode ? "bg-black/60" : "bg-black/40"
                  }`}
                >
                  <Camera className="text-white" size={20} />
                  <input
                    id="avatar-upload"
                    type="file"
                    name="avatar"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                {errors.avatar && (
                  <p className="text-xs text-red-500">{errors.avatar}</p>
                )}
              </div>

              <div className="flex space-x-4">
                <label
                  htmlFor="avatar-upload"
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Change Photo
                </label>

                {selectedImage && (
                  <button
                    onClick={removeImage}
                    className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-red-400 hover:text-red-300"
                        : "text-red-600 hover:text-red-700"
                    }`}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="md:col-span-1">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Enter full name"
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Username */}
              <div className="md:col-span-1">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Username
                </label>
                <div className="relative">
                  <span
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    @
                  </span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full pl-8 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="username"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-600 text-xs">{errors.username}</p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="user@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="md:col-span-1">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    size={18}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="+62 xxx-xxxx-xxxx"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>

              {/* Birthday */}
              <div className="md:col-span-1">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Birthday
                </label>
                <div className="relative">
                  <Calendar
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    size={18}
                  />
                  <input
                    type="date"
                    name="birthday"
                    value={formatDateToInput(formData.birthday)}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
                {errors.birthday && (
                  <p className="text-red-500 text-xs">{errors.birthday}</p>
                )}
              </div>

              {/* Role */}
              <div className="md:col-span-1">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Role
                </label>
                <div className="relative">
                  <Shield
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    size={18}
                  />
                  <select
                    value={formData.role}
                    name="role"
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    <option value="viewer">Viewer</option>
                    <option value="author">Author</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                {errors.role && (
                  <p className="text-red-500 text-xs">{errors.role}</p>
                )}
              </div>

              {/* Status */}
              <div className="md:col-span-1">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Status
                </label>
                <div className="relative">
                  <Activity
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    size={18}
                  />
                  <select
                    value={formData.status}
                    name="status"
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
                {errors.status && (
                  <p className="text-red-500 text-xs">{errors.status}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-4 border-t ${
            darkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleCancel}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-sm"
              }`}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20"
              }`}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdateModal;
