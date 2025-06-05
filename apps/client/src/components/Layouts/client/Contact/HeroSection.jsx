import { Mail, MapPin, Phone, Send } from "lucide-react";

const HeroSection = ({ darkMode }) => {
  return (
    <section
      className={`relative py-32 overflow-hidden ${
        darkMode ? "bg-gray-800" : "bg-white"
      } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                darkMode
                  ? "bg-indigo-900/30 text-indigo-300"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              <Send className="h-4 w-4 mr-2" />
              Get in Touch
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Let's{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p
              className={`text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className={`flex items-center px-4 py-2 rounded-lg ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } transition-colors duration-200`}
              >
                <Mail className="h-5 w-5 mr-2" />
                hello@blogzen.com
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 rounded-lg ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } transition-colors duration-200`}
              >
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div
              className={`p-1 rounded-2xl ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } shadow-lg`}
            >
              <div
                className={`rounded-xl overflow-hidden ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="aspect-video bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <div className="p-8">
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Our Headquarters
                  </h3>
                  <p
                    className={`mb-6 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    123 Tech Street, Suite 456
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                  <button
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium ${
                      darkMode
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
                    } transition-colors duration-300`}
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`absolute -bottom-6 -left-6 h-32 w-32 rounded-xl ${
                darkMode ? "bg-indigo-900/20" : "bg-indigo-100/80"
              } -z-10`}
            ></div>
            <div
              className={`absolute -top-6 -right-6 h-32 w-32 rounded-xl ${
                darkMode ? "bg-purple-900/20" : "bg-purple-100/80"
              } -z-10`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
