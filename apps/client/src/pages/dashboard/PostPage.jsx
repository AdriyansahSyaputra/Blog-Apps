import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";
import {
  FileText,
  TrendingUp,
  Clock,
  Star,
  Plus,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import PostCard from "../../components/Layouts/dashboard/Post/PostCard";
import FilterDropdown from "../../components/Layouts/dashboard/Post/FilterDropdown";
import StatsCard from "../../components/Layouts/dashboard/Post/StatsCard";
import NotificationCard from "../../components/Fragments/NotificationCard";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);
  const [notification, setNotification] = useState(null);
  const [posts, setPosts] = useState([]);

  // Sample data
  const stats = [
    { icon: FileText, title: "Total Posts", value: "156", change: 12 },
    { icon: TrendingUp, title: "Published", value: "124", change: 8 },
    { icon: Clock, title: "Drafts", value: "18", change: -2 },
    { icon: Star, title: "Featured", value: "24", change: 15 },
  ];

  // Fetch posts from the API
  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/dashboard/posts", {
        withCredentials: true,
      });
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // handle Delete Post
  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`/api/dashboard/posts/${postId}`, {
        withCredentials: true,
      });
      fetchPosts();

      setNotification({
        type: "success",
        message: "Post deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting post:", error);

      setNotification({
        type: "error",
        message: "Error deleting post.",
      });
    }
  };

  // Filter posts based on search and active filter
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilter =
      activeFilter === "all" || post.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Helmet title="Dashboard | Post" />

      {notification && (
        <NotificationCard
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <div
        className={`min-h-screen transition-all duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
      >
        <Sidebar
          darkMode={darkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        {/* Main Content */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-20"
          }`}
        >
          {/* Topbar */}
          <Topbar
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* Dashboard Content */}
          <main className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1
                  className={`text-3xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Posts Management
                </h1>
                <p
                  className={`text-sm mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Manage your blog posts, drafts, and published content
                </p>
              </div>

              <Link
                to="/dashboard/posts/new"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>New Post</span>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} darkMode={darkMode} />
              ))}
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
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
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border backdrop-blur-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400"
                      : "bg-white/50 border-gray-200/50 text-gray-800 placeholder-gray-500"
                  }`}
                />
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative">
                  <button
                    onClick={() => setShowFilter(!showFilter)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl backdrop-blur-xl border transition-all duration-200 ${
                      darkMode
                        ? "bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/60 text-gray-300"
                        : "bg-white/50 border-gray-200/50 hover:bg-white/70 text-gray-700"
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                    <span className="capitalize">{activeFilter}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        showFilter ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <FilterDropdown
                    darkMode={darkMode}
                    isOpen={showFilter}
                    onClose={() => setShowFilter(false)}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                  />
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Showing {filteredPosts.length} of {posts.length} posts
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  darkMode={darkMode}
                  onDelete={handleDeletePost}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div
                className={`text-center py-12 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No posts found</h3>
                <p className="text-sm">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Post;
