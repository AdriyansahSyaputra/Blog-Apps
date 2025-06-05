import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import HeroSection from "../../components/Layouts/client/Home/HeroSection";
import FeaturedPost from "../../components/Layouts/client/Home/FeaturedPost";
import StatsSection from "../../components/Layouts/client/Home/StatsSection";
import AuthorSection from "../../components/Layouts/client/Home/AuthorSection";
import TrendingTags from "../../components/Layouts/client/Home/TrendingTags";
import CategoriesSection from "../../components/Layouts/client/Home/CategoriesSection";
import TestimoniSection from "../../components/Layouts/client/Home/TestimoniSection";
import CtaSection from "../../components/Layouts/client/Home/CtaSection";
import { ArrowRight, Bookmark, Hash, PenTool, TrendingUp, Zap } from "lucide-react";
 

const HomePage = () => {
  const { darkMode } = useTheme();

  // Sample data
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring the latest trends shaping web development.",
      category: "Technology",
      readTime: "8 min read",
      date: "May 15, 2024",
      likes: 142,
      comments: 28,
    },
    {
      id: 2,
      title: "Minimalist Design Principles for Modern Blogs",
      excerpt: "Create clean, readable blog layouts that enhance UX.",
      category: "Design",
      readTime: "6 min read",
      date: "May 10, 2024",
      likes: 89,
      comments: 14,
    },
    {
      id: 3,
      title: "Mastering React Hooks: A Comprehensive Guide",
      excerpt: "Deep dive into React Hooks with practical examples.",
      category: "Programming",
      readTime: "12 min read",
      date: "May 5, 2024",
      likes: 210,
      comments: 42,
    },
  ];

  const popularCategories = [
    { name: "Technology", count: 42, icon: <Zap className="h-5 w-5" /> },
    { name: "Design", count: 28, icon: <PenTool className="h-5 w-5" /> },
    { name: "Lifestyle", count: 35, icon: <Bookmark className="h-5 w-5" /> },
    {
      name: "Productivity",
      count: 19,
      icon: <TrendingUp className="h-5 w-5" />,
    },
    { name: "Programming", count: 56, icon: <Hash className="h-5 w-5" /> },
    { name: "Travel", count: 23, icon: <ArrowRight className="h-5 w-5" /> },
  ];

  const topAuthors = [
    {
      name: "Sarah Johnson",
      posts: 28,
      followers: "1.2K",
      avatar: "/avatars/sarah.jpg",
    },
    {
      name: "Michael Chen",
      posts: 42,
      followers: "2.4K",
      avatar: "/avatars/michael.jpg",
    },
    {
      name: "Emma Wilson",
      posts: 19,
      followers: "890",
      avatar: "/avatars/emma.jpg",
    },
  ];

  const trendingTags = [
    { name: "#webdev", posts: 128 },
    { name: "#javascript", posts: 256 },
    { name: "#designsystem", posts: 84 },
    { name: "#productivity", posts: 92 },
    { name: "#reactjs", posts: 312 },
    { name: "#uxdesign", posts: 76 },
  ];

  return (
    <>
      <Helmet title="Home | Client" />

      <Navbar />
      <main
        className={`pt-24 pb-12 min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <HeroSection darkMode={darkMode} />
        <FeaturedPost darkMode={darkMode} featuredPosts={featuredPosts} />
        <StatsSection darkMode={darkMode} />
        <AuthorSection darkMode={darkMode} topAuthors={topAuthors} />
        <TrendingTags darkMode={darkMode} trendingTags={trendingTags} />
        <CategoriesSection
          darkMode={darkMode}
          popularCategories={popularCategories}
        />
        <TestimoniSection darkMode={darkMode} />
        <CtaSection darkMode={darkMode} />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
