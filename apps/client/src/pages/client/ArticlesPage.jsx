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
import { useState, useEffect } from "react";
import axios from "axios";

const ArticlesPage = () => {
  const { darkMode } = useTheme();
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("/api/client/posts");
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
      <Helmet title="Blog | Articles" />

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
