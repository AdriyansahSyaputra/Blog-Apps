import { Mail, User } from "lucide-react";

const ContactFormSection = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div
        className={`p-8 rounded-2xl shadow-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Send Us a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Message
              </span>
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                    } focus:outline-none focus:ring-2`}
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                    } focus:outline-none focus:ring-2`}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                } focus:outline-none focus:ring-2`}
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                } focus:outline-none focus:ring-2`}
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
