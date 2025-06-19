import CommentItem from "./CommentItem";

const CommentArticle = ({
  darkMode,
  handleAddComment,
  commentText,
  setCommentText,
  article,
  comments,
  fetchRepliesByCommentId,
  currentUser,
}) => {
  return (
    <div id="comments-section" className="mt-12">
      <h3
        className={`text-xl font-semibold mb-6 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Comments (348)
      </h3>

      {/* Form Tambah Komentar */}
      <div
        className={`mb-8 p-6 rounded-lg ${
          darkMode ? "bg-gray-800" : "bg-white border border-gray-200"
        }`}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={`${import.meta.env.VITE_BASE_URL}/uploads/img/profile/${currentUser.avatar}`}
              alt="User avatar"
            />
          </div>
          <div className="flex-1">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 text-gray-200 focus:ring-blue-500"
                  : "bg-gray-100 text-gray-800 focus:ring-blue-400"
              }`}
              rows="3"
              placeholder="Add a comment..."
            ></textarea>
            <div className="mt-3 flex justify-end">
              <button
                onClick={() =>
                  handleAddComment({
                    postId: article._id,
                    content: commentText,
                    parentCommentId: null, // atau isi kalau ini reply
                  })
                }
                className={`px-4 py-2 rounded-md font-medium ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Komentar */}
      <div className="space-y-6">
        {/* Komentar Utama */}
        <div
          className={`p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pravatar.cc/150?img=5"
                alt="User avatar"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span
                  className={`font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  JaneDoe
                </span>
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  2 hours ago
                </span>
              </div>
              <p
                className={`mt-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                This is a great post! I really enjoyed reading it and learned a
                lot of new things.
              </p>
              <div className="mt-3 flex items-center space-x-4">
                <button
                  className={`text-sm font-medium ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-500 hover:text-blue-600"
                  }`}
                >
                  Reply
                </button>
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  12 replies
                </span>
              </div>
            </div>
          </div>

          {/* Balasan Komentar */}
          <div className="mt-6 pl-12 space-y-6 border-l-2 border-gray-300 dark:border-gray-600">
            {/* Reply 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pravatar.cc/150?img=8"
                  alt="User avatar"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span
                    className={`font-medium text-sm ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    JohnSmith
                  </span>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    1 hour ago
                  </span>
                </div>
                <p
                  className={`mt-1 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  I completely agree with you! The author did an excellent job
                  explaining these concepts.
                </p>
                <button
                  className={`mt-2 text-xs font-medium ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-500 hover:text-blue-600"
                  }`}
                >
                  Reply
                </button>
              </div>
            </div>

            {/* Reply 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pravatar.cc/150?img=11"
                  alt="User avatar"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span
                    className={`font-medium text-sm ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    AlexJohnson
                  </span>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    30 minutes ago
                  </span>
                </div>
                <p
                  className={`mt-1 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Does anyone have additional resources on this topic? I'd love
                  to learn more.
                </p>
                <button
                  className={`mt-2 text-xs font-medium ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-500 hover:text-blue-600"
                  }`}
                >
                  Reply
                </button>
              </div>
            </div>

            {/* Form Reply (Tampil saat tombol reply diklik) */}
            <div className="pt-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://i.pravatar.cc/150?img=3"
                    alt="User avatar"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    className={`w-full px-3 py-2 text-sm rounded-lg resize-none focus:outline-none focus:ring-1 ${
                      darkMode
                        ? "bg-gray-700 text-gray-200 focus:ring-blue-500"
                        : "bg-gray-100 text-gray-800 focus:ring-blue-400"
                    }`}
                    rows="2"
                    placeholder="Write a reply..."
                  ></textarea>
                  <div className="mt-2 flex justify-end space-x-2">
                    <button className="text-sm px-3 py-1 rounded text-gray-600 dark:text-gray-300">
                      Cancel
                    </button>
                    <button
                      className={`text-sm px-3 py-1 rounded-md font-medium ${
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
            </div>
          </div>
        </div>

        {/* Komentar Lainnya */}
        <div
          className={`p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white border border-gray-200"
          }`}
        >
          {/* Komentar utama */}
          {comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              article={article}
              darkMode={darkMode}
              currentUser={currentUser}
              handleAddComment={handleAddComment}
              fetchRepliesByCommentId={fetchRepliesByCommentId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentArticle;
