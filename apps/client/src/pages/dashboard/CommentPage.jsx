import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import CommentCard from "../../components/Layouts/dashboard/Comment/CommentCard";
import FilterSearch from "../../components/Layouts/dashboard/Comment/FilterSearch";
import StatsCard from "../../components/Layouts/dashboard/Comment/StatsCard";

const commentsData = [
  {
    id: 1,
    author: "John Doe",
    avatar: null,
    email: "john@example.com",
    content:
      "This is an amazing article! I really enjoyed reading it and learned a lot. Thank you for sharing this valuable content.",
    postTitle: "Getting Started with React Hooks",
    postSlug: "getting-started-react-hooks",
    status: "approved",
    createdAt: "2024-06-04T10:30:00Z",
    likes: 12,
    replies: 3,
    isSpam: false,
    sentiment: "positive",
  },
  {
    id: 2,
    author: "Jane Smith",
    avatar: null,
    email: "jane@example.com",
    content:
      "I disagree with some points mentioned here. The approach could be better explained with more examples.",
    postTitle: "Advanced JavaScript Patterns",
    postSlug: "advanced-javascript-patterns",
    status: "pending",
    createdAt: "2024-06-04T09:15:00Z",
    likes: 3,
    replies: 1,
    isSpam: false,
    sentiment: "neutral",
  },
  {
    id: 3,
    author: "Mike Johnson",
    avatar: null,
    email: "mike@example.com",
    content:
      "Great tutorial! Step by step explanation is very helpful. Looking forward to more content like this.",
    postTitle: "CSS Grid Layout Masterclass",
    postSlug: "css-grid-layout-masterclass",
    status: "approved",
    createdAt: "2024-06-04T08:45:00Z",
    likes: 8,
    replies: 0,
    isSpam: false,
    sentiment: "positive",
  },
  {
    id: 4,
    author: "Spam User",
    avatar: null,
    email: "spam@spam.com",
    content:
      "Check out this amazing deal! Click here to get 50% off on everything!!! www.scam-site.com",
    postTitle: "Getting Started with React Hooks",
    postSlug: "getting-started-react-hooks",
    status: "spam",
    createdAt: "2024-06-04T07:20:00Z",
    likes: 0,
    replies: 0,
    isSpam: true,
    sentiment: "negative",
  },
  {
    id: 5,
    author: "Sarah Wilson",
    avatar: null,
    email: "sarah@example.com",
    content:
      "This helped me solve a problem I was stuck on for days. Thank you so much!",
    postTitle: "Debugging React Applications",
    postSlug: "debugging-react-applications",
    status: "approved",
    createdAt: "2024-06-03T16:30:00Z",
    likes: 15,
    replies: 2,
    isSpam: false,
    sentiment: "positive",
  },
];

const CommentPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [filteredComments, setFilteredComments] = useState(commentsData);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [comments, setComments] = useState(commentsData);

  // Filter dan search logic
  useEffect(() => {
    let filtered = comments;

    // Apply status filter
    if (selectedFilter !== "all") {
      filtered = filtered.filter(
        (comment) => comment.status === selectedFilter
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (comment) =>
          comment.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.postTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredComments(filtered);
  }, [comments, selectedFilter, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const handleAction = (action, commentId) => {
    switch (action) {
      case "approve":
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === commentId
              ? { ...comment, status: "approved" }
              : comment
          )
        );
        break;
      case "spam":
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === commentId
              ? { ...comment, status: "spam", isSpam: true }
              : comment
          )
        );
        break;
      case "delete":
        setComments((prev) =>
          prev.filter((comment) => comment.id !== commentId)
        );
        break;
      case "reply":
        console.log("Reply to comment:", commentId);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet title="Dashboard | Comments" />

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
            sidebarOpen ? "lg:ml-64" : "ml-0"
          }`}
        >
          {/* Topbar */}
          <Topbar
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content */}
          <main className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Comments Management
              </h1>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Manage and moderate user comments across all blog posts
              </p>
            </div>

            {/* Stats Cards */}
            <StatsCard darkMode={darkMode} comments={comments} />

            {/* Filter and Search */}
            <FilterSearch
              darkMode={darkMode}
              onSearch={handleSearch}
              onFilter={handleFilter}
              selectedFilter={selectedFilter}
              searchTerm={searchTerm}
            />

            {/* Comments List */}
            <div className="space-y-6">
              {filteredComments.length > 0 ? (
                filteredComments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    comment={comment}
                    darkMode={darkMode}
                    onAction={handleAction}
                  />
                ))
              ) : (
                <div
                  className={`text-center py-12 rounded-2xl backdrop-blur-xl border ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-700/50"
                      : "bg-white/50 border-gray-200/50"
                  }`}
                >
                  <MessageSquare
                    className={`w-16 h-16 mx-auto mb-4 ${
                      darkMode ? "text-gray-600" : "text-gray-400"
                    }`}
                  />
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    No comments found
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {searchTerm || selectedFilter !== "all"
                      ? "Try adjusting your search or filter criteria"
                      : "Comments will appear here once users start engaging with your posts"}
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CommentPage;
