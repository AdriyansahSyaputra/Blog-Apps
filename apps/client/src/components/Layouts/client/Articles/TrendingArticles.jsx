import { Clock, TrendingUp } from "lucide-react";

const TrendingArticles = ({ darkMode, articles }) => {
  return (
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
  );
};

export default TrendingArticles;
