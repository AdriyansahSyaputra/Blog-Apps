import { ChevronRight, Mail, UserIcon, Lock, Phone } from "lucide-react";
import InputField from "../Elements/Input/InputField";

const FormRegister = ({
  darkMode,
  showPassword,
  setShowPassword,
  setIsLogin,
  errors,
  handleChange,
  handleSubmitRegister,
  formRegister,
  setFormRegister,
  showConfirmPassword,
  setShowConfirmPassword,
}) => {

  return (
    <form onSubmit={handleSubmitRegister} className="p-6">

      {/* Name */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="text"
          id="register-name"
          name="name"
          value={formRegister.name}
          onChange={(e) => handleChange(e, "register")}
          placeholder="John Doe"
          label="Name"
          icon={<UserIcon size={18} />}
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      {/* Username */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="text"
          id="register-username"
          name="username"
          value={formRegister.username}
          onChange={(e) => handleChange(e, "register")}
          placeholder="johndoe"
          label="Username"
          icon={<UserIcon size={18} />}
        />
        {errors.username && (
          <p className="text-red-600 text-sm">{errors.username}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="email"
          id="register-email"
          name="email"
          value={formRegister.email}
          onChange={(e) => handleChange(e, "register")}
          placeholder="Email"
          label="Email"
          icon={<Mail size={18} />}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="tel"
          id="register-phone"
          name="phone"
          value={formRegister.phone}
          onChange={(e) => handleChange(e, "register")}
          placeholder="+6281234567890"
          label="Phone"
          icon={<Phone size={18} />}
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>

      {/* Password */}
      <div className="mb-6">
        <InputField
          darkMode={darkMode}
          type="password"
          id="register-password"
          name="password"
          value={formRegister.password}
          onChange={(e) => handleChange(e, "register")}
          placeholder="Password"
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
      <div className="mb-6">
        <InputField
          darkMode={darkMode}
          type="password"
          id="register-confirm-password"
          name="confirmPassword"
          value={formRegister.confirmPassword}
          onChange={(e) => handleChange(e, "register")}
          placeholder="Confirm Password"
          label="Confirm Password"
          icon={<Lock size={18} />}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={formRegister.terms || false}
            onChange={(e) => setFormRegister({ ...formRegister, terms: e.target.checked })}
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
        {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}
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
