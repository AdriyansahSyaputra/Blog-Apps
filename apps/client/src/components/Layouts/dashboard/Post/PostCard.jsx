import { useState } from "react";
import { Calendar, Heart, MessageCircle, Image, MoreHorizontal, Tag, Eye } from "lucide-react";
import PostActionMenu from "./PostActionMenu";

const PostCard = ({ post, darkMode, onDelete, onEdit }) => {
  const [showActions, setShowActions] = useState(false);

  const statusColors = {
    published: "bg-green-500",
    draft: "bg-yellow-500",
    scheduled: "bg-blue-500",
    archived: "bg-gray-500",
  };

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
            className={`w-12 h-12 rounded-xl overflow-hidden ${
              post.featuredImage
                ? ""
                : "bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center"
            }`}
          >
            {post.featuredImage ? (
              <img
                src={`${import.meta.env.VITE_BASE_URL}/uploads/img/thumbnails/${post.featuredImage}`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image className="w-6 h-6 text-white" />
            )}
          </div>
          <div>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                statusColors[post.status]
              } text-white`}
            >
              {post.status}
            </span>
            <div className="flex items-center mt-1 space-x-2">
              <Calendar
                className={`w-3 h-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {post.createdAt}
              </span>
            </div>
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
          <PostActionMenu
            darkMode={darkMode}
            isOpen={showActions}
            onClose={() => setShowActions(false)}
            onEdit={() => onEdit(post)}
            onDelete={() => onDelete(post._id)}
            onView={() => console.log("View:", post.id)}
          />
        </div>
      </div>

      {/* Title & Excerpt */}
      <div className="mb-4">
        <h3
          className={`text-lg font-semibold mb-2 line-clamp-2 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {post.title}
        </h3>
        <p
          className={`text-sm line-clamp-2 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {post.excerpt}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
              darkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
        {post.tags.length > 3 && (
          <span
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            +{post.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200/20">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Eye
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              155
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              254
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              54
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
          <span
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {post.author.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;