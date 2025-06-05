import { Globe, Heart } from "lucide-react";

const MissionSection = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-xl`}
          >
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                darkMode
                  ? "bg-indigo-900/30 text-indigo-300"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              <Heart className="h-8 w-8" />
            </div>
            <h2
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our Mission
            </h2>
            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              To empower developers and designers with high-quality, practical
              content that helps them build better digital experiences.
            </p>
            <ul className="space-y-4">
              {[
                "Democratize web development knowledge",
                "Foster a supportive community",
                "Promote best practices",
                "Bridge the gap between theory and practice",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div
                    className={`flex-shrink-0 mt-1 mr-3 ${
                      darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-xl`}
          >
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                darkMode
                  ? "bg-purple-900/30 text-purple-300"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              <Globe className="h-8 w-8" />
            </div>
            <h2
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our Vision
            </h2>
            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We envision a world where anyone can learn to build beautiful,
              functional websites regardless of their background.
            </p>
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              } mb-6`}
            >
              <p
                className={`italic mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "Education is the most powerful weapon which you can use to
                change the world."
              </p>
              <p
                className={`font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                - Nelson Mandela
              </p>
            </div>
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                darkMode
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
              } transition-colors duration-300`}
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
