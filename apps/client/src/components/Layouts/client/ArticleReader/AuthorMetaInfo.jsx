import { Calendar, Clock, Eye } from "lucide-react";

const AuthorMetaInfo = ({ darkMode, article }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-t border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <img
          src={article.author.avatar}
          alt={article.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className={darkMode ? "text-gray-200" : "text-gray-900"}>{article.author.name}</h3>
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {article.author.bio}
            </span>
          </div>
          <div
            className={`flex items-center gap-4 text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {article.publishDate}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {article.readTime}
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} />
              {article.views} views
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorMetaInfo;
