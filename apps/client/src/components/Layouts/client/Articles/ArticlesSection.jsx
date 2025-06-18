import {
  BookOpen,
  Clock,
  Heart,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const ArticlesSection = ({ darkMode, articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <article
          key={article._id}
          className={`rounded-xl overflow-hidden transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-white hover:bg-gray-50"
          } shadow-lg hover:shadow-xl`}
        >
          <div
            className={`h-48 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL}/uploads/img/thumbnails/${article.featuredImage}`}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                <span>{article.categories[0]?.name || "Tanpa Kategori"}</span>
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
                      article.isBookmarked ? "fill-current text-indigo-500" : ""
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
              className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
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
                  <Heart className="mr-1 h-3 w-3" /> 521
                </span>
                <span
                  className={`flex items-center text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <MessageSquare className="mr-1 h-3 w-3" /> 15
                </span>
                <span
                  className={`flex items-center text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Clock className="mr-1 h-3 w-3" /> 15 min
                </span>
              </div>
              <Link
                to={`/articles/${article.slug}`}
                className={`text-sm font-medium ${
                  darkMode
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                } transition-colors duration-200`}
              >
                Read more
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticlesSection;
