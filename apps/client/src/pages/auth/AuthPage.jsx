import { useState } from "react";
import { Sun, Moon, BookOpen } from "lucide-react";
import FormLogin from "../../components/Fragments/FormLogin";
import FormRegister from "../../components/Fragments/FormRegister";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { darkMode, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [formRegister, setFormRegister] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });

  const handleChange = (e, formType = "register") => {
    const { name, value, type, checked } = e.target;
    const updateValue = type === "checkbox" ? checked : value;

    if (formType === "register") {
      setFormRegister((prev) => ({ ...prev, [name]: updateValue }));
    } else if (formType === "login") {
      setFormLogin((prev) => ({ ...prev, [name]: updateValue }));
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      const res = await axios.post("/api/auth/register", formRegister);

      setSuccess(res.data.message);
      setFormRegister({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      const res = await axios.post("/api/auth/login", formLogin, {
        withCredentials: true,
      });
      const { redirect, message } = res.data;
      setSuccess(message);
      window.location.href = redirect;
    } catch (err) {
      console.error(err.response?.data);
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: "Terjadi kesalahan" });
      }
    }
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
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setIsLogin={setIsLogin}
            success={success}
            errors={errors}
            handleSubmitLogin={handleSubmitLogin}
            formLogin={formLogin}
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
            errors={errors}
            success={success}
            formRegister={formRegister}
            handleChange={handleChange}
            handleSubmitRegister={handleSubmitRegister}
            setFormRegister={setFormRegister}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
