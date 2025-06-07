import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import {
  BookOpen,
  Briefcase,
  Link,
  MessageSquare,
  User,
  Moon,
  Sun,
  Twitter,
  Instagram,
  Facebook,
  PenTool,
} from "lucide-react";
import FormAuthorRequest from "../../components/Fragments/FormAuthorRequest";

const AuthorRequestPage = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    job: "",
    topics: [],
    portfolio: "",
    socialMedia: "",
    reason: "",
  });

  const topics = [
    "Technology",
    "Design",
    "Business",
    "Health",
    "Science",
    "Travel",
    "Food",
    "Lifestyle",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (topic) => {
    setFormData((prev) => {
      if (prev.topics.includes(topic)) {
        return { ...prev, topics: prev.topics.filter((t) => t !== topic) };
      } else {
        return { ...prev, topics: [...prev.topics, topic] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <Helmet title="Articles | Client" />

      <Navbar />

      <main
        className={`pb-12 min-h-screen transition-colors duration-300 container mx-auto px-6 py-12 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div
          className={`max-w-4xl mx-auto px-4 py-12 ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Become an Author
            </h1>
          </div>

          {/* Form Container */}
          <div
            className={`rounded-xl shadow-lg overflow-hidden transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className={`p-1 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <div
                className={`flex space-x-1 p-1 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <FormAuthorRequest
              darkMode={darkMode}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleCheckboxChange={handleCheckboxChange}
              topics={topics}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AuthorRequestPage;
