import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  ExternalLink,
  Eye,
  MoreVertical,
  Reply,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";

const CommentCard = ({ comment, darkMode, onAction }) => {
  const [showActions, setShowActions] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-500 bg-green-500/10";
      case "pending":
        return "text-yellow-500 bg-yellow-500/10";
      case "spam":
        return "text-red-500 bg-red-500/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return <ThumbsUp className="w-4 h-4 text-green-500" />;
      case "negative":
        return <ThumbsDown className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:shadow-lg ${
        darkMode
          ? "bg-gray-900/50 border-gray-700/50"
          : "bg-white/50 border-gray-200/50"
      } ${comment.isSpam ? "border-red-500/30 bg-red-500/5" : ""}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {comment.author}
              </h4>
              <span
                className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                  comment.status
                )}`}
              >
                {comment.status}
              </span>
              {getSentimentIcon(comment.sentiment)}
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {comment.email}
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowActions(!showActions)}
            className={`p-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? "hover:bg-gray-800 text-gray-400"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <MoreVertical className="w-5 h-5" />
          </button>

          {showActions && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-xl border backdrop-blur-xl z-10 ${
                darkMode
                  ? "bg-gray-900/90 border-gray-700/50"
                  : "bg-white/90 border-gray-200/50"
              }`}
            >
              <div className="p-2">
                <button
                  onClick={() => onAction("approve", comment.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-300"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => onAction("reply", comment.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-300"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Reply className="w-4 h-4" />
                  <span>Reply</span>
                </button>
                <button
                  onClick={() => onAction("spam", comment.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-300"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Mark as Spam</span>
                </button>
                <button
                  onClick={() => onAction("delete", comment.id)}
                  className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-red-500 hover:bg-red-500/10"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p
          className={`${
            darkMode ? "text-gray-300" : "text-gray-700"
          } leading-relaxed`}
        >
          {comment.content}
        </p>
      </div>

      {/* Post Reference */}
      <div
        className={`p-3 rounded-lg mb-4 ${
          darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
        }`}
      >
        <div className="flex items-center space-x-2">
          <span
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Comment on:
          </span>
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1">
            <span>{comment.postTitle}</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {formatDate(comment.createdAt)}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <ThumbsUp
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {comment.likes}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Reply
              className={`w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {comment.replies}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className={`p-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? "hover:bg-gray-800 text-gray-400"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
