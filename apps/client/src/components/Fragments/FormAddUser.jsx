import {
  Camera,
  Save,
  X,
  Upload,
  Calendar,
  UserIcon,
  Mail,
  Phone,
  Globe,
  Eye,
  EyeOff,
  Shield,
  Lock,
} from "lucide-react";
import InputField from "../Elements/Input/InputField";

const FormAddUser = ({
  darkMode,
  selectedImage,
  removeImage,
  setShowConfirmPassword,
  handleImageUpload,
  handleInputChange,
  formData,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  handleSubmit,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Profile Image Section */}
      <div
        className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          darkMode
            ? "bg-gray-800/50 border-gray-700/50"
            : "bg-white/70 border-gray-200/50"
        }`}
      >
        <div className="p-6">
          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Profile Picture
          </h2>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <div
                className={`w-24 h-24 rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden ${
                  darkMode ? "border-gray-600" : "border-gray-300"
                }`}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera
                    className={`w-8 h-8 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                )}
              </div>
              {selectedImage && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={handleImageUpload}
                className="hidden"
                id="profile-image"
              />
              <label
                htmlFor="profile-image"
                className={`inline-flex items-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Image
              </label>
              <p
                className={`text-sm mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                JPG, PNG or GIF (max. 2MB)
              </p>
            </div>
          </div>
          {errors.profileImage && (
            <p className="text-red-600 text-sm mt-1">{errors.profileImage}</p>
          )}
        </div>
      </div>

      {/* Personal Information */}
      <div
        className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          darkMode
            ? "bg-gray-800/50 border-gray-700/50"
            : "bg-white/70 border-gray-200/50"
        }`}
      >
        <div className="p-6">
          <h2
            className={`text-lg font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <InputField
                darkMode={darkMode}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                label="Name"
                icon={<UserIcon size={18} />}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <InputField
                darkMode={darkMode}
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
                label="Username"
                icon={<UserIcon size={18} />}
              />

              {errors.username && (
                <p className="text-red-600 text-sm">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <InputField
                darkMode={darkMode}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                label="Email"
                icon={<Mail size={18} />}
              />

              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <InputField
                darkMode={darkMode}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                label="Phone"
                icon={<Phone size={18} />}
              />

              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Birth Date */}
            <div>
              <InputField
                darkMode={darkMode}
                type="date"
                id="birthdate"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                label="Birth Date"
                icon={<Calendar size={18} />}
              />

              {errors.birthday && (
                <p className="text-red-600 text-sm">{errors.birthday}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div
        className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          darkMode
            ? "bg-gray-800/50 border-gray-700/50"
            : "bg-white/70 border-gray-200/50"
        }`}
      >
        <div className="p-6">
          <h2
            className={`text-lg font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Account Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Password */}
            <div>
              <InputField
                darkMode={darkMode}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                label="Password"
                icon={<Lock size={18} />}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <InputField
                darkMode={darkMode}
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm password"
                label="Confirm Password"
                icon={<Lock size={18} />}
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
              />
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Role *
              </label>
              <div className="relative">
                <Shield
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    darkMode
                      ? "bg-gray-700/50 border-gray-600 text-white"
                      : "bg-gray-50/50 border-gray-200 text-gray-900"
                  }`}
                >
                  <option value="">Select Role</option>
                  <option value="viewer">Viewer</option>
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              {errors.role && (
                <p className="text-red-600 text-sm">{errors.role}</p>
              )}
            </div>

            {/* Status */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-white"
                    : "bg-gray-50/50 border-gray-200 text-gray-900"
                }`}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
              {errors.status && (
                <p className="text-red-600 text-sm">{errors.status}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          onClick={() => window.history.back()}
          type="button"
          className={`flex-1 px-6 py-3 rounded-xl border transition-all duration-200 font-medium ${
            darkMode
              ? "border-gray-600 text-gray-300 hover:bg-gray-700"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium flex items-center justify-center"
        >
          <Save className="w-5 h-5 mr-2" />
          Create User
        </button>
      </div>
    </form>
  );
};

export default FormAddUser;
