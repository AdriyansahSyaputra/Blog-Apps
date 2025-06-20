import { MessageSquare, Send } from "lucide-react";
import CommentItem from "./CommentItem";
import { useState, useEffect } from "react";

const CommentArticle = ({
  darkMode,
  handleAddComment,
  commentText,
  setCommentText,
  article,
  comments,
  fetchRepliesByCommentId,
  currentUser,
  hasMoreComments,
  fetchComments,
  totalComments,
}) => {
  const [localPage, setLocalPage] = useState(1);

  const handleLoadMore = () => {
    const nextPage = localPage + 1;
    setLocalPage(nextPage);
    fetchComments(nextPage, true);
  };

  useEffect(() => {
    setLocalPage(1); // reset pagination saat article berubah
  }, [article._id]);

  return (
    <div id="comments-section" className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare
          className={`w-6 h-6 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
        />
        <h3
          className={`text-2xl font-semibold ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Comments ({totalComments})
        </h3>
      </div>

      {/* Comment Form - Improved */}
      <div
        className={`mb-8 p-6 rounded-xl shadow-sm ${
          darkMode ? "bg-gray-800" : "bg-white border border-gray-200"
        } transition-all duration-200`}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {currentUser.avatar ? (
              <img
                src={`${import.meta.env.VITE_BASE_URL}/uploads/img/profile/${
                  currentUser.avatar
                }`}
                alt={currentUser.username}
                className={`h-10 w-10 rounded-full object-cover border-2 ${
                  darkMode ? "border-blue-500" : "border-blue-400"
                } shadow-sm hover:shadow-md transition-shadow duration-200`}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}

            <span
              className={`${
                currentUser.avatar ? "hidden" : "flex"
              } items-center justify-center h-10 w-10 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-blue-400"
                  : "bg-blue-100 text-blue-600"
              } border-2 ${
                darkMode ? "border-blue-500" : "border-blue-400"
              } font-medium text-lg shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              {currentUser.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 space-y-3">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 transition ${
                darkMode
                  ? "bg-gray-700 text-gray-200 focus:ring-blue-500 border-gray-600"
                  : "bg-gray-50 text-gray-800 focus:ring-blue-400 border-gray-200"
              } border`}
              rows="3"
              placeholder="Share your thoughts..."
            ></textarea>
            <div className="flex justify-between items-center">
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Markdown supported
              </span>
              <button
                onClick={() =>
                  handleAddComment({
                    postId: article._id,
                    content: commentText,
                    parentCommentId: null,
                  })
                }
                disabled={!commentText.trim()}
                className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-700 disabled:text-gray-500"
                    : "bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-200 disabled:text-gray-400"
                }`}
              >
                <Send size={16} /> Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              article={article}
              darkMode={darkMode}
              currentUser={currentUser}
              handleAddComment={handleAddComment}
              fetchRepliesByCommentId={fetchRepliesByCommentId}
              isTopLevel={true}
            />
          ))
        ) : (
          <div
            className={`p-6 rounded-xl text-center ${
              darkMode
                ? "bg-gray-800 text-gray-400"
                : "bg-gray-50 text-gray-500"
            }`}
          >
            No comments yet. Be the first to share your thoughts!
          </div>
        )}
      </div>
      {hasMoreComments && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className={`px-4 py-2 rounded-md font-medium ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
          >
            Load more comments
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentArticle;
