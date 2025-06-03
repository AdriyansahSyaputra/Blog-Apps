import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Plus,
  ChevronDown,
  ChevronRight,
  Calendar,
  Eye,
  MessageSquare,
  ThumbsUp,
  Edit,
  Trash2,
  MoreVertical,
  Loader2,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Index = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // Simulate data fetching
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      const dummyPosts = Array.from({ length: 24 }, (_, i) => ({
        id: `post-${i + 1}`,
        title: `How to build a modern React application ${i + 1}`,
        status: ["published", "draft", "scheduled", "archived"][
          Math.floor(Math.random() * 4)
        ],
        views: Math.floor(Math.random() * 10000),
        comments: Math.floor(Math.random() * 100),
        likes: Math.floor(Math.random() * 500),
        author: "Admin User",
        date: new Date(
          Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
        ),
        category: ["Technology", "Design", "Business", "Lifestyle"][
          Math.floor(Math.random() * 4)
        ],
        featured: Math.random() > 0.7,
      }));

      setPosts(dummyPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Filter posts based on search and selected filter
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || post.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "newest") return b.date - a.date;
    if (sortBy === "oldest") return a.date - b.date;
    if (sortBy === "views") return b.views - a.views;
    if (sortBy === "likes") return b.likes - a.likes;
    return 0;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const toggleSelectPost = (postId) => {
    setSelectedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedPosts.length === currentPosts.length) {
      setSelectedPosts([]);
    } else {
      setSelectedPosts(currentPosts.map((post) => post.id));
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "published":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "draft":
        return <FileText className="w-4 h-4 text-yellow-500" />;
      case "scheduled":
        return <Clock className="w-4 h-4 text-blue-500" />;
      case "archived":
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Main Content */}
      <div className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Posts Management
              </h1>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Manage all your blog posts in one place
              </p>
            </div>
            <button
              className={`flex items-center px-4 py-2 mt-4 md:mt-0 rounded-xl transition-all duration-200 font-medium ${
                darkMode
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
              }`}
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Post
            </button>
          </div>

          {/* Filters and Search */}
          <div
            className={`rounded-xl p-4 mb-6 transition-all duration-300 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-200"
            } border`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500/50"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-500 focus:ring-blue-500/30"
                  }`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className={`appearance-none pl-3 pr-8 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500/50"
                        : "bg-white border-gray-200 text-gray-800 focus:ring-blue-500/30"
                    }`}
                  >
                    <option value="all">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="archived">Archived</option>
                  </select>
                  <ChevronDown
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`appearance-none pl-3 pr-8 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500/50"
                        : "bg-white border-gray-200 text-gray-800 focus:ring-blue-500/30"
                    }`}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="views">Most Views</option>
                    <option value="likes">Most Likes</option>
                  </select>
                  <Filter
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Posts Table */}
          <div
            className={`rounded-xl overflow-hidden border transition-all duration-300 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {/* Table Header */}
            <div
              className={`grid grid-cols-12 items-center px-4 py-3 border-b ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="col-span-1 flex items-center">
                <input
                  type="checkbox"
                  checked={
                    selectedPosts.length === currentPosts.length &&
                    currentPosts.length > 0
                  }
                  onChange={toggleSelectAll}
                  className={`rounded ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500/50"
                      : "bg-white border-gray-300 text-blue-500 focus:ring-blue-500"
                  }`}
                />
              </div>
              <div className="col-span-5 md:col-span-4">
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Title
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 text-center hidden sm:block">
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Status
                </span>
              </div>
              <div className="col-span-2 text-center hidden md:block">
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Date
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 text-center hidden lg:block">
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Views
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 text-center hidden lg:block">
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Likes
                </span>
              </div>
              <div className="col-span-1 text-right">
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Actions
                </span>
              </div>
            </div>

            {/* Table Body */}
            {loading ? (
              <div
                className={`flex items-center justify-center p-8 ${
                  darkMode ? "bg-gray-800/30" : "bg-white"
                }`}
              >
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              </div>
            ) : currentPosts.length === 0 ? (
              <div
                className={`flex flex-col items-center justify-center p-8 ${
                  darkMode ? "bg-gray-800/30" : "bg-white"
                }`}
              >
                <FileText className="w-12 h-12 mb-4 text-gray-400" />
                <h3
                  className={`text-lg font-medium mb-1 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  No posts found
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div
                className={`divide-y ${
                  darkMode
                    ? "divide-gray-700 bg-gray-800/30"
                    : "divide-gray-200 bg-white"
                }`}
              >
                {currentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="grid grid-cols-12 items-center px-4 py-3 hover:bg-opacity-50 transition-colors duration-200 group"
                    style={{
                      backgroundColor: darkMode
                        ? selectedPosts.includes(post.id)
                          ? "rgba(59, 130, 246, 0.2)"
                          : "transparent"
                        : selectedPosts.includes(post.id)
                        ? "rgba(59, 130, 246, 0.1)"
                        : "transparent",
                    }}
                  >
                    <div className="col-span-1 flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedPosts.includes(post.id)}
                        onChange={() => toggleSelectPost(post.id)}
                        className={`rounded ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500/50"
                            : "bg-white border-gray-300 text-blue-500 focus:ring-blue-500"
                        }`}
                      />
                    </div>
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-center">
                        {post.featured && (
                          <span
                            className={`mr-2 px-1.5 py-0.5 text-xs rounded ${
                              darkMode
                                ? "bg-yellow-900/50 text-yellow-400 border border-yellow-800/50"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            Featured
                          </span>
                        )}
                        <h3
                          className={`text-sm font-medium truncate ${
                            darkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {post.title}
                        </h3>
                      </div>
                      <p
                        className={`text-xs truncate ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {post.category}
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center hidden sm:block">
                      <div className="flex items-center justify-center">
                        {getStatusIcon(post.status)}
                        <span
                          className={`ml-1 text-xs capitalize ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {post.status}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center hidden md:block">
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center hidden lg:block">
                      <div className="flex items-center justify-center">
                        <Eye
                          className={`w-3 h-3 mr-1 ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {post.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center hidden lg:block">
                      <div className="flex items-center justify-center">
                        <ThumbsUp
                          className={`w-3 h-3 mr-1 ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {post.likes.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1 text-right">
                      <div className="relative inline-block text-left">
                        <button
                          className={`p-1 rounded-full ${
                            darkMode
                              ? "hover:bg-gray-700 text-gray-300"
                              : "hover:bg-gray-100 text-gray-600"
                          }`}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination and Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
            <div
              className={`text-sm mb-4 sm:mb-0 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Showing {indexOfFirstPost + 1} to{" "}
              {Math.min(indexOfLastPost, sortedPosts.length)} of{" "}
              {sortedPosts.length} posts
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50"
                    : darkMode
                    ? "hover:bg-gray-800 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <ChevronRight className="w-5 h-5 transform rotate-180" />
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      currentPage === pageNum
                        ? darkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-500 text-white"
                        : darkMode
                        ? "hover:bg-gray-800 text-gray-300"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : darkMode
                    ? "hover:bg-gray-800 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
