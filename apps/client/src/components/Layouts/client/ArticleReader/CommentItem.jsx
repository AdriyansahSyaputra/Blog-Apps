import { useState, useEffect } from "react";

export const CommentItem = ({
  comment,
  article,
  darkMode,
  currentUser,
  handleAddComment,
  fetchRepliesByCommentId,
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    fetchReplies();
  }, []);

  const fetchReplies = async () => {
    const res = await fetchRepliesByCommentId(comment._id);
    setReplies(res);
  };

  const handleReplySubmit = async () => {
    if (!replyText.trim()) return;
    await handleAddComment({
      postId: article._id,
      content: replyText,
      parentCommentId: comment._id,
    });
    setReplyText("");
    setShowReplyInput(false);
    fetchReplies();
  };

  return (
    <div className="ml-0 md:ml-6 mt-6 relative">
      <div className="flex items-start space-x-4">
        <img
          className="h-10 w-10 rounded-full"
          src={`${import.meta.env.VITE_BASE_URL}/uploads/img/profile/${
            comment.user?.avatar
          }`}
          alt="Avatar"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {comment.user?.username || "Unknown"}
            </span>
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              2 hours ago
            </span>
          </div>
          <p className={`mt-1 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
            {comment.content}
          </p>
          <button
            onClick={() => setShowReplyInput(!showReplyInput)}
            className={`mt-2 text-sm font-medium ${
              darkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            Reply
          </button>

          {showReplyInput && (
            <div className="mt-3 flex items-start space-x-3">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/uploads/img/profile/${
                  currentUser.avatar
                }`}
                className="h-8 w-8 rounded-full"
                alt="User"
              />
              <div className="flex-1">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows="2"
                  placeholder="Write a reply..."
                  className={`w-full p-2 rounded-md resize-none focus:outline-none focus:ring-2 ${
                    darkMode
                      ? "bg-gray-700 text-gray-100 focus:ring-blue-500"
                      : "bg-gray-100 text-gray-900 focus:ring-blue-400"
                  }`}
                ></textarea>
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={handleReplySubmit}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                      darkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    Post Reply
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Render replies */}
          {replies.length > 0 && (
            <div className="mt-4">
              {replies.map((reply) => (
                <CommentItem
                  key={reply._id}
                  comment={reply}
                  article={article}
                  darkMode={darkMode}
                  currentUser={currentUser}
                  handleAddComment={handleAddComment}
                  fetchRepliesByCommentId={fetchRepliesByCommentId}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
