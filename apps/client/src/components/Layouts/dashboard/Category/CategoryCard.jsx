import { useState } from "react";
import { Tag, MoreHorizontal, FileText, TrendingUp } from "lucide-react";
import CategoryActionMenu from "./CategoryActionMenu";

const CategoryCard = ({ category, darkMode, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className={`group p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        darkMode
          ? "bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/60"
          : "bg-white/50 border-gray-200/50 hover:bg-white/70"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: category.color }}
          >
            <Tag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {category.name}
            </h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {category.slug}
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowActions(!showActions)}
            className={`p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ${
              darkMode
                ? "hover:bg-gray-800 text-gray-400"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
          <CategoryActionMenu
            darkMode={darkMode}
            isOpen={showActions}
            onClose={() => setShowActions(false)}
            onEdit={() => onEdit(category)}
            onDelete={() => onDelete(category)}
            onView={() => console.log("View posts for:", category.name)}
          />
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-sm mb-4 line-clamp-2 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {category.description || "No description available"}
      </p>

      {/* Subcategories */}
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="mb-4">
          <p
            className={`text-xs font-medium mb-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Subcategories:
          </p>
          <div className="flex flex-wrap gap-1">
            {category.subcategories.slice(0, 3).map((sub, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  darkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {sub}
              </span>
            ))}
            {category.subcategories.length > 3 && (
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                +{category.subcategories.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200/20">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FileText
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {category.postsCount} posts
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {category.trending ? "Trending" : "Normal"}
            </span>
          </div>
        </div>

        <div
          className={`text-xs px-2 py-1 rounded-full ${
            category.status === "active"
              ? "bg-green-500/20 text-green-600"
              : "bg-gray-500/20 text-gray-600"
          }`}
        >
          {category.status}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;