import { Search, Sliders } from "lucide-react";

const HeroSection = ({ darkMode }) => {
  return (
    <div
      className={`py-36 ${darkMode ? "bg-gray-800" : "bg-white"} border-b ${
        darkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mb-10`}
          >
            Discover in-depth tutorials, guides, and insights on modern web
            development technologies and best practices.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div
              className={`flex-1 relative ${
                darkMode ? "bg-gray-700" : "bg-white"
              } rounded-lg shadow-md`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  className={`h-5 w-5 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-gray-700 text-white placeholder-gray-400 focus:ring-indigo-500"
                    : "bg-white text-gray-900 placeholder-gray-500 focus:ring-indigo-400"
                }`}
              />
            </div>
            <button
              className={`flex items-center justify-center px-4 py-3 rounded-lg ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  : "bg-white hover:bg-gray-100 text-gray-700"
              } shadow-md transition-colors duration-200`}
            >
              <Sliders className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
