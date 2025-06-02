import { Heart, Github, Twitter, Linkedin, PenLine } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative border-t ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"
      }`}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2.5 rounded-xl ${
                  darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
                }`}
              >
                <PenLine
                  className={`h-6 w-6 ${
                    darkMode ? "text-indigo-300" : "text-indigo-600"
                  }`}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                BlogZen
              </span>
            </div>

            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A modern platform for sharing thoughts, ideas, and stories with
              the world.
            </p>

            <div className="flex space-x-3">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-2.5 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 text-gray-300 hover:text-indigo-300"
                      : "bg-gray-50 text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-200`}
                  aria-label={`${Icon.name} social link`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {["Categories", "Quick Links", "Company"].map((section) => (
            <div key={section} className="space-y-5">
              <h3
                className={`font-medium text-sm tracking-wider ${
                  darkMode ? "text-indigo-300" : "text-indigo-600"
                }`}
              >
                {section}
              </h3>
              <ul className="space-y-3">
                {Array.from({ length: 4 }, (_, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={`text-sm ${
                        darkMode
                          ? "text-gray-400 hover:text-indigo-300"
                          : "text-gray-600 hover:text-indigo-600"
                      } transition-colors duration-200`}
                    >
                      {section === "Categories"
                        ? ["Technology", "Lifestyle", "Travel", "Food"][i]
                        : section === "Quick Links"
                        ? [
                            "Popular Posts",
                            "Recent Posts",
                            "Authors",
                            "Newsletter",
                          ][i]
                        : `${section} Link ${i + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`my-12 h-px ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
        ></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            © {currentYear} BlogZen. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className={`text-sm ${
                darkMode
                  ? "text-gray-500 hover:text-indigo-300"
                  : "text-gray-400 hover:text-indigo-600"
              } transition-colors duration-200`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`text-sm ${
                darkMode
                  ? "text-gray-500 hover:text-indigo-300"
                  : "text-gray-400 hover:text-indigo-600"
              } transition-colors duration-200`}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className={`text-sm ${
                darkMode
                  ? "text-gray-500 hover:text-indigo-300"
                  : "text-gray-400 hover:text-indigo-600"
              } transition-colors duration-200`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 text-center">
          <p
            className={`text-xs ${
              darkMode ? "text-gray-600" : "text-gray-500"
            }`}
          >
            Made with <Heart className="inline h-3.5 w-3.5 text-pink-500" /> for
            bloggers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
