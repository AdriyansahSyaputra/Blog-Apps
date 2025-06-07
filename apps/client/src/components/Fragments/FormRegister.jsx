import { ChevronRight, Mail, UserIcon, Lock, Phone } from "lucide-react";
import InputField from "../Elements/Input/InputField";
import axios from "axios";
import { useState } from "react";

const FormRegister = ({
  darkMode,
  showPassword,
  setShowPassword,
  setIsLogin,
}) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      const res = await axios.post("/api/auth/register", form);

      setSuccess(res.data.message);
      setForm({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      {success && <p className="text-green-600">{success}</p>}
      {errors.general && <p className="text-red-600">{errors.general}</p>}

      {/* Name */}
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="text"
          id="register-name"
          name="name"
          value={form.name}
          onChange={handleChange}
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
          value={form.username}
          onChange={handleChange}
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
          value={form.email}
          onChange={handleChange}
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
          value={form.phone}
          onChange={handleChange}
          placeholder="123-456-7890"
          label="Phone"
          icon={<Phone size={18} />}
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>

      {/* Password */}
      <div className="mb-6">
        <InputField
          darkMode={darkMode}
          type={showPassword ? "text" : "password"}
          id="register-password"
          name="password"
          value={form.password}
          onChange={handleChange}
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
          type={showPassword ? "text" : "password"}
          id="register-confirm-password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          label="Confirm Password"
          icon={<Lock size={18} />}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
        )}
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
