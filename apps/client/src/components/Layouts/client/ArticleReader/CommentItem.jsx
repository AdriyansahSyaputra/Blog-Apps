import { useState, useEffect } from "react";
import {
  Reply,
  ChevronDown,
  ChevronUp,
  Send,
  Heart,
  MoreHorizontal,
} from "lucide-react";
import LoadingAnimation from "../../../Fragments/LoadingAnimation";

export const CommentItem = ({
  comment,
  article,
  darkMode,
  currentUser,
  handleAddComment,
  fetchRepliesByCommentId,
  isTopLevel = false,
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  const fetchReplies = async () => {
    setIsLoading(true);
    try {
      const res = await fetchRepliesByCommentId(comment._id);
      setReplies(res?.comments || []);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isTopLevel) {
      fetchReplies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReplySubmit = async () => {
    if (!replyText.trim()) return;

    setIsLoading(true);
    try {
      await handleAddComment({
        postId: article._id,
        content: replyText,
        parentCommentId: comment._id,
      });
      setReplyText("");
      setShowReplyInput(false);
      setReplyingTo(null);
      fetchReplies();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleReplies = () => {
    if (replies.length === 0 && !isLoading) {
      fetchReplies();
    }
    setShowReplies(!showReplies);
  };

  const handleReplyClick = (username) => {
    setShowReplyInput(true);
    setReplyingTo(username);
    setReplyText(`@${username} `);
  };

  return (
    <div>
      <div
        className={`p-4 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"} ${
          isTopLevel ? "mb-4" : "mb-2"
        }`}
      >
        <div className="flex items-start gap-3">
          {comment.user?.avatar ? (
            <img
              src={`${import.meta.env.VITE_BASE_URL}/uploads/img/profile/${
                comment.user?.avatar
              }`}
              alt={comment.user?.username}
              className={`h-9 w-9 rounded-full object-cover border ${
                darkMode ? "border-blue-500" : "border-blue-400"
              }`}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}

          <div
            className={`${
              comment.user?.avatar ? "hidden" : "flex"
            } items-center justify-center h-9 w-9 rounded-full ${
              darkMode
                ? "bg-gray-700 text-blue-400"
                : "bg-blue-100 text-blue-600"
            } border ${
              darkMode ? "border-blue-500" : "border-blue-400"
            } font-medium`}
          >
            {comment.user?.username.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {comment.user?.username || "Anonymous"}
                </span>
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <button
                className={`p-1 rounded-full ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                <MoreHorizontal
                  size={16}
                  className={darkMode ? "text-gray-400" : "text-gray-500"}
                />
              </button>
            </div>

            <p
              className={`mt-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {comment.content}
            </p>

            <div className="mt-2 flex items-center gap-4">
              <button
                className={`flex items-center gap-1 text-sm ${
                  darkMode
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <Heart size={14} /> Like
              </button>

              {isLoading ? (
                <LoadingAnimation />
              ) : (
                <button
                  onClick={() => handleReplyClick(comment.user?.username)}
                  className={`flex items-center gap-1 text-sm ${
                    darkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  <Reply size={14} /> Reply
                </button>
              )}

              {replies.length > 0 && (
                <button
                  onClick={toggleReplies}
                  className={`flex items-center gap-1 text-sm ${
                    darkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {showReplies ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                  {replies.length} {replies.length === 1 ? "reply" : "replies"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Reply Input */}
        {showReplyInput && (
          <div className="mt-3 ml-10">
            <div className="flex items-start gap-3">
              {currentUser.avatar ? (
                <img
                  src={`${import.meta.env.VITE_BASE_URL}/uploads/img/profile/${
                    currentUser.avatar
                  }`}
                  alt={currentUser.username}
                  className={`h-9 w-9 rounded-full object-cover border ${
                    darkMode ? "border-blue-500" : "border-blue-400"
                  }`}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}

              <div
                className={`${
                  currentUser.avatar ? "hidden" : "flex"
                } items-center justify-center h-9 w-9 rounded-full ${
                  darkMode
                    ? "bg-gray-700 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                } border ${
                  darkMode ? "border-blue-500" : "border-blue-400"
                } font-medium`}
              >
                {currentUser.username.charAt(0).toUpperCase()}
              </div>

              <div className="flex-1">
                {replyingTo && (
                  <div className="flex items-center gap-1 mb-1">
                    <span
                      className={`text-xs ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      Replying to @{replyingTo}
                    </span>
                    <button
                      onClick={() => setReplyingTo(null)}
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      ×
                    </button>
                  </div>
                )}
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows="2"
                  placeholder="Write your reply..."
                  className={`w-full p-2 rounded-lg resize-none focus:outline-none focus:ring-1 text-sm ${
                    darkMode
                      ? "bg-gray-700 text-gray-100 focus:ring-blue-500 border-gray-600"
                      : "bg-white text-gray-900 focus:ring-blue-400 border-gray-300"
                  } border`}
                ></textarea>
                <div className="mt-2 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setShowReplyInput(false);
                      setReplyingTo(null);
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-medium ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                    }`}
                  >
                    Cancel
                  </button>
                  {isLoading ? (
                    <LoadingAnimation />
                  ) : (
                    <button
                      onClick={handleReplySubmit}
                      disabled={!replyText.trim()}
                      className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1 ${
                        darkMode
                          ? "bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-700 disabled:text-gray-500"
                          : "bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-200 disabled:text-gray-400"
                      }`}
                    >
                      <Send size={12} /> Reply
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Replies Section - All replies at same level */}
      {showReplies && replies.length > 0 && (
        <div className="mt-2 ml-4 space-y-2">
          {replies.map((reply) => (
            <CommentItem
              key={reply._id}
              comment={reply}
              article={article}
              darkMode={darkMode}
              currentUser={currentUser}
              handleAddComment={handleAddComment}
              fetchRepliesByCommentId={fetchRepliesByCommentId}
              isTopLevel={false}
            />
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center py-2">
          <div
            className={`animate-spin rounded-full h-5 w-5 border-b-2 ${
              darkMode ? "border-blue-400" : "border-blue-500"
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
