import {
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Coffee,
} from "lucide-react";
import CommentArticle from "./CommentArticle";

const ArticleFooter = ({
  darkMode,
  isLiked,
  likes,
  toggleLike,
  handleAddComment,
  commentText,
  setCommentText,
  article,
  comments,
  currentUser,
  fetchRepliesByCommentId,
}) => {
  return (
    <div
      className={`mt-12 pt-8 border-t transition-colors duration-300 ${
        darkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      {/* Reading Progress */}
      <div
        className={`flex items-center gap-2 mb-6 text-sm ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        <Coffee
          size={16}
          className={darkMode ? "text-amber-400" : "text-amber-600"}
        />
        <span>Thanks for reading! Hope you enjoyed this article.</span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button
          onClick={toggleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            isLiked
              ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
              : darkMode
              ? "bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900"
          }`}
        >
          <Heart
            size={18}
            fill={isLiked ? "currentColor" : "none"}
            className={
              isLiked ? "" : darkMode ? "text-gray-400" : "text-gray-500"
            }
          />
          <span className="font-medium">Like ({likes})</span>
        </button>

        <button
          onClick={() =>
            document
              .getElementById("comments-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900"
          }`}
        >
          <MessageCircle
            size={18}
            className={darkMode ? "text-blue-400" : "text-blue-500"}
          />
          <span className="font-medium">Comments (348)</span>
        </button>

        <button
          onClick={() => {
            /* Add share functionality here */
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900"
          }`}
        >
          <Share2
            size={18}
            className={darkMode ? "text-green-400" : "text-green-500"}
          />
          <span className="font-medium">Share</span>
        </button>
      </div>

      {/* Comments Section */}
      <CommentArticle
        darkMode={darkMode}
        handleAddComment={handleAddComment}
        commentText={commentText}
        setCommentText={setCommentText}
        article={article}
        comments={comments}
        currentUser={currentUser}
        fetchRepliesByCommentId={fetchRepliesByCommentId}
      />

      {/* Related Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
        <div className="flex items-center gap-3">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900"
            }`}
          >
            <ExternalLink
              size={16}
              className={darkMode ? "text-blue-400" : "text-blue-500"}
            />
            <span className="text-sm">Read More</span>
          </button>
        </div>

        <button
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30"
              : "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20"
          }`}
        >
          Subscribe for Updates
        </button>
      </div>
    </div>
  );
};

export default ArticleFooter;
