import {
  BookOpen,
  Clock,
  Heart,
  MessageSquare,
  Search,
  Sliders,
  Star,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "../../../../context/ThemeContext";

const Index = () => {
  const { darkMode } = useTheme();

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Advanced React Patterns for Modern Applications",
      excerpt:
        "Learn about compound components, render props, and hooks patterns to build flexible React applications.",
      category: "React",
      readTime: "12 min read",
      date: "June 15, 2024",
      likes: 245,
      comments: 42,
      isBookmarked: true,
      isTrending: true,
    },
    {
      id: 2,
      title: "The Complete Guide to CSS Grid Layout",
      excerpt:
        "Master CSS Grid with practical examples and real-world use cases for modern web layouts.",
      category: "CSS",
      readTime: "18 min read",
      date: "June 12, 2024",
      likes: 189,
      comments: 31,
      isBookmarked: false,
      isTrending: true,
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt:
        "Essential patterns and strategies for maintaining type safety in complex codebases.",
      category: "TypeScript",
      readTime: "15 min read",
      date: "June 10, 2024",
      likes: 156,
      comments: 28,
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      excerpt:
        "Comprehensive guide to implementing WCAG standards in your frontend projects.",
      category: "Accessibility",
      readTime: "20 min read",
      date: "June 8, 2024",
      likes: 132,
      comments: 19,
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: 5,
      title: "State Management Solutions in 2024",
      excerpt:
        "Comparing Redux, Zustand, Jotai, and other state management libraries.",
      category: "JavaScript",
      readTime: "14 min read",
      date: "June 5, 2024",
      likes: 201,
      comments: 37,
      isBookmarked: true,
      isTrending: true,
    },
    {
      id: 6,
      title: "Optimizing Next.js Applications for Performance",
      excerpt:
        "Practical techniques to improve your Next.js app's speed and user experience.",
      category: "Next.js",
      readTime: "16 min read",
      date: "June 3, 2024",
      likes: 178,
      comments: 24,
      isBookmarked: false,
      isTrending: false,
    },
  ];

  const popularTags = [
    { name: "React", count: 128 },
    { name: "JavaScript", count: 256 },
    { name: "TypeScript", count: 184 },
    { name: "CSS", count: 92 },
    { name: "Next.js", count: 112 },
    { name: "Performance", count: 76 },
  ];

  return (
    <div
      className={`pt-24 pb-12 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"} border-b ${
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

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Categories */}
            <div
              className={`p-6 rounded-xl shadow-sm ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Categories
              </h3>
              <ul className="space-y-3">
                {[
                  "All Articles",
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "CSS",
                  "Performance",
                  "Accessibility",
                ].map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors duration-200 ${
                        darkMode
                          ? "hover:bg-gray-700 text-gray-300"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span>{category}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {Math.floor(Math.random() * 50) + 10}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div
              className={`p-6 rounded-xl shadow-sm ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <a
                    key={tag.name}
                    href="#"
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-indigo-300"
                        : "bg-gray-100 hover:bg-gray-200 text-indigo-600"
                    }`}
                  >
                    #{tag.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Trending Articles */}
            <div
              className={`p-6 rounded-xl shadow-sm ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 flex items-center ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <TrendingUp className="h-5 w-5 mr-2 text-indigo-500" />
                Trending Now
              </h3>
              <div className="space-y-4">
                {articles
                  .filter((a) => a.isTrending)
                  .map((article) => (
                    <a
                      key={article.id}
                      href="#"
                      className={`block p-3 rounded-lg transition-colors duration-200 ${
                        darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                      }`}
                    >
                      <h4
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {article.title}
                      </h4>
                      <div
                        className={`flex items-center mt-1 text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="lg:w-3/4">
            {/* Sorting and Stats */}
            <div
              className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-8 p-6 rounded-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-sm`}
            >
              <div>
                <h2
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Latest Articles
                </h2>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Showing {articles.length} articles
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <select
                  className={`px-4 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-700"
                  } focus:outline-none focus:ring-2 ${
                    darkMode ? "focus:ring-indigo-500" : "focus:ring-indigo-400"
                  }`}
                >
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Most Popular</option>
                  <option>Most Commented</option>
                </select>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  } shadow-lg hover:shadow-xl`}
                >
                  <div
                    className={`h-48 ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          darkMode
                            ? "bg-indigo-900/30 text-indigo-300"
                            : "bg-indigo-100 text-indigo-600"
                        }`}
                      >
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-3">
                        {article.isTrending && (
                          <span
                            className={`flex items-center text-xs px-2 py-1 rounded-full ${
                              darkMode
                                ? "bg-yellow-900/30 text-yellow-300"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </span>
                        )}
                        <button
                          className={`p-1.5 rounded-full ${
                            darkMode
                              ? "text-gray-400 hover:text-indigo-300"
                              : "text-gray-500 hover:text-indigo-500"
                          } transition-colors duration-200`}
                          aria-label={
                            article.isBookmarked
                              ? "Remove bookmark"
                              : "Bookmark article"
                          }
                        >
                          <BookOpen
                            className={`h-4 w-4 ${
                              article.isBookmarked
                                ? "fill-current text-indigo-500"
                                : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {article.title}
                    </h3>
                    <p
                      className={`mb-4 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <span
                          className={`flex items-center text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <Heart className="mr-1 h-3 w-3" /> {article.likes}
                        </span>
                        <span
                          className={`flex items-center text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" />{" "}
                          {article.comments}
                        </span>
                        <span
                          className={`flex items-center text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <Clock className="mr-1 h-3 w-3" /> {article.readTime}
                        </span>
                      </div>
                      <a
                        href="#"
                        className={`text-sm font-medium ${
                          darkMode
                            ? "text-indigo-400 hover:text-indigo-300"
                            : "text-indigo-600 hover:text-indigo-700"
                        } transition-colors duration-200`}
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div
              className={`flex items-center justify-between mt-12 p-6 rounded-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-sm`}
            >
              <button
                className={`px-4 py-2 rounded-lg ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } transition-colors duration-200`}
                disabled
              >
                Previous
              </button>
              <div className="flex space-x-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      page === 1
                        ? darkMode
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-100 text-indigo-600"
                        : darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    } transition-colors duration-200`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                className={`px-4 py-2 rounded-lg ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } transition-colors duration-200`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
