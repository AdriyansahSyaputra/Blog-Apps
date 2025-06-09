import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6">
          <div
            className={`inline-block px-4 py-2 rounded-full ${
              darkMode
                ? "bg-indigo-900/30 text-indigo-300"
                : "bg-indigo-100 text-indigo-600"
            } text-sm font-medium`}
          >
            Welcome to BlogZen
          </div>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Discover & Share{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Great Stories
            </span>
          </h1>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } max-w-lg`}
          >
            A modern platform for writers and readers to connect. Explore
            thought-provoking articles on technology, design, lifestyle, and
            more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
              Start Reading
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
          
            <Link to="/write-for-us"
              className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } shadow-sm`}
            >
              Become a Writer
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div
            className={`rounded-2xl overflow-hidden shadow-xl ${
              darkMode ? "ring-1 ring-gray-800" : "ring-1 ring-gray-200"
            }`}
          >
            <img
              src={
                darkMode ? "/images/hero-dark.jpg" : "/images/hero-light.jpg"
              }
              alt="Person writing in a notebook"
              className="w-full h-auto object-cover"
            />
          </div>
          <div
            className={`absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl ${
              darkMode ? "bg-indigo-900/50" : "bg-indigo-100"
            } -z-10`}
          ></div>
          <div
            className={`absolute -top-6 -right-6 h-32 w-32 rounded-2xl ${
              darkMode ? "bg-purple-900/50" : "bg-purple-100"
            } -z-10`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
