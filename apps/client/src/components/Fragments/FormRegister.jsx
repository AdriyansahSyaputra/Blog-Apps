import { ChevronRight, Mail, UserIcon, Lock, Phone } from "lucide-react";
import InputField from "../Elements/Input/InputField";

const FormRegister = ({
  darkMode,
  registerData,
  handleRegisterChange,
  handleRegisterSubmit,
  showPassword,
  setShowPassword,
  setIsLogin,
}) => {
  return (
    <form onSubmit={handleRegisterSubmit} className="p-6">
      {/* Name */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="text"
          id="register-name"
          name="name"
          value={registerData.name}
          onChange={handleRegisterChange}
          placeholder="John Doe"
          label="Name"
          icon={<UserIcon size={18} />}
        />
      </div>

      {/* Username */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="text"
          id="register-username"
          name="username"
          value={registerData.username}
          onChange={handleRegisterChange}
          placeholder="johndoe"
          label="Username"
          icon={<UserIcon size={18} />}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="email"
          id="register-email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          placeholder="Email"
          label="Email"
          icon={<Mail size={18} />}
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="tel"
          id="register-phone"
          name="phone"
          value={registerData.phone}
          onChange={handleRegisterChange}
          placeholder="123-456-7890"
          label="Phone"
          icon={<Phone size={18} />}
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <InputField
          darkMode={darkMode}
          type={showPassword ? "text" : "password"}
          id="register-password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
          placeholder="Password"
          label="Password"
          icon={<Lock size={18} />}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <p
          className={`mt-2 text-xs ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Must be at least 8 characters
        </p>
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
        <InputField
          darkMode={darkMode}
          type={showPassword ? "text" : "password"}
          id="register-confirm-password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
          placeholder="Confirm Password"
          label="Confirm Password"
          icon={<Lock size={18} />}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className={`w-4 h-4 rounded ${
              darkMode
                ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                : "bg-white border-gray-300 focus:ring-blue-500"
            }`}
            required
          />
        </div>
        <label
          htmlFor="terms"
          className={`ml-2 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I agree to the{" "}
          <a
            href="#"
            className={`${
              darkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            Terms and Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className={`w-full py-3 px-4 ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center`}
      >
        Create Account <ChevronRight size={18} className="ml-2" />
      </button>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className={`text-sm font-medium ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          Already have an account? Sign in
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
