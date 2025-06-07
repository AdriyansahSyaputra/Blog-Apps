import { useState } from "react";
import { Sun, Moon, BookOpen } from "lucide-react";
import FormLogin from "../../components/Fragments/FormLogin";
import FormRegister from "../../components/Fragments/FormRegister";
import { useTheme } from "../../context/ThemeContext";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { darkMode, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // Handle login logic
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Dark mode toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-2 rounded-full transition-all duration-300 ${
          darkMode
            ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
            : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
        }`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Main container */}
      <div
        className={`w-full max-w-md mx-4 transition-all duration-500 ${
          isLogin ? "block" : "hidden"
        }`}
      >
        {/* Login Form */}
        <div
          className={`rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div
            className={`p-6 ${
              darkMode ? "bg-gray-900" : "bg-gray-800"
            } text-white`}
          >
            <div className="flex items-center justify-center mb-2">
              <BookOpen size={28} className="mr-2" />
              <h1 className="text-2xl font-bold">BlogAuth</h1>
            </div>
            <p className="text-center text-gray-300">Sign in to your account</p>
          </div>

          <FormLogin
            darkMode={darkMode}
            loginData={loginData}
            handleLoginChange={handleLoginChange}
            handleLoginSubmit={handleLoginSubmit}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setIsLogin={setIsLogin}
          />
        </div>
      </div>

      {/* Register Form */}
      <div
        className={`w-full max-w-md mx-4 transition-all duration-500 ${
          !isLogin ? "block" : "hidden"
        }`}
      >
        <div
          className={`rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div
            className={`p-6 ${
              darkMode ? "bg-gray-900" : "bg-gray-800"
            } text-white`}
          >
            <div className="flex items-center justify-center mb-2">
              <BookOpen size={28} className="mr-2" />
              <h1 className="text-2xl font-bold">BlogAuth</h1>
            </div>
            <p className="text-center text-gray-300">Create a new account</p>
          </div>

          <FormRegister
            darkMode={darkMode}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setIsLogin={setIsLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
