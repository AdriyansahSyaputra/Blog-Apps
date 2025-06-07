import { ArrowLeft, Bookmark, Moon, Share2, Sun } from "lucide-react";

const NavArticle = ({
  darkMode,
  isBookmarked,
  toggleBookmark,
  toggleTheme,
}) => {
  return (
    <header
      className={`mt-12 max-w-4xl mx-auto border-b transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700 shadow-gray-900/20"
          : "bg-white border-gray-100 shadow-gray-200/20"
      } shadow-sm backdrop-blur-sm bg-opacity-80`}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => window.history.back()}
          className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
            darkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <ArrowLeft
            size={20}
            className={darkMode ? "text-blue-400" : "text-blue-500"}
          />
          <span>Back to Articles</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleBookmark}
            className={`p-2 rounded-full transition-all duration-200 ${
              isBookmarked
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                : darkMode
                ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
          </button>

          <button
            className={`p-2 rounded-full transition-all duration-200 ${
              darkMode
                ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
            aria-label="Share article"
          >
            <Share2 size={20} />
          </button>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-200 ${
              darkMode
                ? "text-amber-300 hover:bg-gray-800 hover:text-amber-200"
                : "text-amber-500 hover:bg-gray-100 hover:text-amber-600"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavArticle;
