import { Plus, Edit, Trash2 } from "lucide-react";

const RecentPosts = ({ darkMode }) => {
  const recentPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      status: "Published",
      views: 1250,
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "Advanced Node.js Patterns",
      status: "Draft",
      views: 0,
      date: "1 day ago",
    },
    {
      id: 3,
      title: "MongoDB Best Practices",
      status: "Published",
      views: 890,
      date: "3 days ago",
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox",
      status: "Review",
      views: 0,
      date: "1 week ago",
    },
  ];

  return (
    <div
      className={`p-6 rounded-2xl border backdrop-blur-sm ${
        darkMode
          ? "bg-gray-800/50 border-gray-700/50"
          : "bg-white/50 border-gray-200/50"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Recent Posts
        </h2>
        <button
          className={`px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all duration-200`}
        >
          <Plus className="w-4 h-4 inline mr-2" />
          New Post
        </button>
      </div>

      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div
            key={post.id}
            className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
              darkMode
                ? "bg-gray-700/30 border-gray-600/30 hover:bg-gray-700/50"
                : "bg-gray-50/50 border-gray-200/50 hover:bg-gray-50/80"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3
                  className={`font-medium mb-1 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {post.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-800"
                        : post.status === "Draft"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {post.status}
                  </span>
                  <span
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {post.views} views
                  </span>
                  <span
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {post.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? "hover:bg-gray-600 text-gray-400"
                      : "hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? "hover:bg-gray-600 text-gray-400"
                      : "hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
