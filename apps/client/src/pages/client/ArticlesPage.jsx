import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import Categories from "../../components/Layouts/client/Articles/Categories";
import PopularTags from "../../components/Layouts/client/Articles/PopularTags";
import TrendingArticles from "../../components/Layouts/client/Articles/TrendingArticles";
import SortingSection from "../../components/Layouts/client/Articles/SortingSection";
import ArticlesSection from "../../components/Layouts/client/Articles/ArticlesSection";
import Pagination from "../../components/Layouts/client/Articles/Pagination";
import HeroSection from "../../components/Layouts/client/Articles/HeroSection";

const ArticlesPage = () => {
  const { darkMode } = useTheme();

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Advanced React Patterns for Modern Applications",
      excerpt:
        "Learn about compound components, render props, and hooks patterns to build flexible React applications.",
      category: "React",
      readTime: "12 min read",
      date: "June 15, 2024",
      likes: 245,
      comments: 42,
      isBookmarked: true,
      isTrending: true,
    },
    {
      id: 2,
      title: "The Complete Guide to CSS Grid Layout",
      excerpt:
        "Master CSS Grid with practical examples and real-world use cases for modern web layouts.",
      category: "CSS",
      readTime: "18 min read",
      date: "June 12, 2024",
      likes: 189,
      comments: 31,
      isBookmarked: false,
      isTrending: true,
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt:
        "Essential patterns and strategies for maintaining type safety in complex codebases.",
      category: "TypeScript",
      readTime: "15 min read",
      date: "June 10, 2024",
      likes: 156,
      comments: 28,
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      excerpt:
        "Comprehensive guide to implementing WCAG standards in your frontend projects.",
      category: "Accessibility",
      readTime: "20 min read",
      date: "June 8, 2024",
      likes: 132,
      comments: 19,
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: 5,
      title: "State Management Solutions in 2024",
      excerpt:
        "Comparing Redux, Zustand, Jotai, and other state management libraries.",
      category: "JavaScript",
      readTime: "14 min read",
      date: "June 5, 2024",
      likes: 201,
      comments: 37,
      isBookmarked: true,
      isTrending: true,
    },
    {
      id: 6,
      title: "Optimizing Next.js Applications for Performance",
      excerpt:
        "Practical techniques to improve your Next.js app's speed and user experience.",
      category: "Next.js",
      readTime: "16 min read",
      date: "June 3, 2024",
      likes: 178,
      comments: 24,
      isBookmarked: false,
      isTrending: false,
    },
  ];

  const popularTags = [
    { name: "React", count: 128 },
    { name: "JavaScript", count: 256 },
    { name: "TypeScript", count: 184 },
    { name: "CSS", count: 92 },
    { name: "Next.js", count: 112 },
    { name: "Performance", count: 76 },
  ];

  return (
    <>
      <Helmet title="Articles | Client" />

      <Navbar />
      <HeroSection darkMode={darkMode} />

      <main
        className={`pb-12 min-h-screen transition-colors duration-300 container mx-auto px-6 py-12 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            <Categories darkMode={darkMode} />

            <PopularTags darkMode={darkMode} popularTags={popularTags} />

            <TrendingArticles darkMode={darkMode} articles={articles} />
          </div>

          {/* Articles List */}
          <div className="lg:w-3/4">
            <SortingSection darkMode={darkMode} articles={articles} />

            <ArticlesSection darkMode={darkMode} articles={articles} />

            <Pagination darkMode={darkMode} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticlesPage;
