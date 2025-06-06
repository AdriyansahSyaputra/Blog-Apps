import { ArrowRight, Mail, Lock } from "lucide-react";
import InputField from "../Elements/Input/InputField";

const FormLogin = ({
  darkMode,
  loginData,
  handleLoginChange,
  handleLoginSubmit,
  showPassword,
  setShowPassword,
  setIsLogin,
}) => {
  return (
    <form onSubmit={handleLoginSubmit} className="p-6">
      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="email"
          id="login-email"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder="Email"
          label="Email"
          icon={<Mail size={18} />}
        />
      </div>

      <div className="mb-4">
        <InputField
          darkMode={darkMode}
          type="password"
          id="login-password"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder="••••••••"
          label="Password"
          icon={<Lock size={18} />}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className={`w-4 h-4 rounded ${
              darkMode
                ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                : "bg-white border-gray-300 focus:ring-blue-500"
            }`}
          />
          <label
            htmlFor="remember-me"
            className={`ml-2 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className={`text-sm ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className={`w-full py-3 px-4 ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center`}
      >
        Sign In <ArrowRight size={18} className="ml-2" />
      </button>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className={`text-sm font-medium ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          Don't have an account? Sign up
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
