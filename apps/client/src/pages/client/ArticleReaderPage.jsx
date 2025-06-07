import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import ArticleFooter from "../../components/Layouts/client/ArticleReader/ArticleFooter";
import AuthorMetaInfo from "../../components/Layouts/client/ArticleReader/AuthorMetaInfo";
import CategoryTags from "../../components/Layouts/client/ArticleReader/CategoryTags";
import NavArticle from "../../components/Layouts/client/ArticleReader/NavArticle";

const ArticleReaderPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(1247);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const article = {
    title:
      "The Future of Artificial Intelligence: Transforming Industries and Everyday Life",
    subtitle:
      "How AI is reshaping the way we work, learn, and interact with technology in the 21st century",
    author: {
      name: "Dr. Sarah Mitchell",
      bio: "AI Researcher & Technology Writer",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c364cca6?w=100&h=100&fit=crop&crop=face",
    },
    publishDate: "March 15, 2024",
    readTime: "8 min read",
    views: "12.5K",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Future Tech", "Innovation"],
    content: `
      Artificial Intelligence has evolved from a concept in science fiction to a transformative force that's reshaping every aspect of our daily lives. As we stand at the precipice of an AI-driven future, it's crucial to understand how this technology is not just changing industries, but fundamentally altering the way we interact with the world around us.

      ## The Current State of AI

      Today's AI landscape is vastly different from what we imagined just a decade ago. Machine learning algorithms now power everything from our social media feeds to autonomous vehicles, creating an interconnected web of intelligent systems that learn and adapt in real-time.

      The democratization of AI tools has accelerated innovation across sectors. Small startups can now access the same powerful AI capabilities that were once exclusive to tech giants, leveling the playing field and fostering unprecedented creativity and problem-solving.

      ## Transforming Industries

      ### Healthcare Revolution
      
      In healthcare, AI is revolutionizing diagnosis and treatment. Advanced imaging systems can detect cancers earlier than human radiologists, while predictive algorithms help hospitals manage resources more efficiently. Personalized medicine, powered by AI analysis of genetic data, is becoming a reality for millions of patients worldwide.

      ### Education Reimagined
      
      The education sector is experiencing a paradigm shift with AI-powered personalized learning platforms. These systems adapt to individual learning styles, providing customized curricula that maximize student engagement and comprehension. Virtual tutors are available 24/7, making quality education more accessible than ever before.

      ### Financial Services Evolution
      
      Financial institutions are leveraging AI for fraud detection, risk assessment, and algorithmic trading. Robo-advisors are democratizing investment advice, while blockchain and AI integration is creating new possibilities for secure, automated financial transactions.

      ## The Human Element

      Despite AI's rapid advancement, the human element remains irreplaceable. The most successful AI implementations are those that augment human capabilities rather than replace them entirely. This symbiotic relationship between human creativity and AI efficiency is creating new job categories and enhancing existing roles.

      ## Challenges and Considerations

      As we embrace AI's potential, we must also address its challenges. Data privacy, algorithmic bias, and the ethical implications of AI decision-making require careful consideration and robust governance frameworks. The goal is to harness AI's power while maintaining human agency and societal values.

      ## Looking Ahead

      The future of AI is not predetermined. It will be shaped by the choices we make today regarding research priorities, regulatory frameworks, and ethical guidelines. By fostering responsible AI development, we can ensure that this powerful technology serves humanity's best interests while opening new frontiers of innovation and discovery.

      As we continue to integrate AI into our lives, one thing is certain: the future will be defined by our ability to balance technological advancement with human wisdom, creating a world where AI enhances rather than diminishes our shared humanity.
    `,
  };

  return (
    <>
      <Helmet title="Articles | Client" />

      <Navbar />
      <main
        className={`pb-12 min-h-screen transition-colors duration-300 container mx-auto px-6 py-12 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        {/* Header */}
        <NavArticle
          darkMode={darkMode}
          isBookmarked={isBookmarked}
          toggleBookmark={toggleBookmark}
          toggleTheme={toggleTheme}
        />

        {/* Main Content */}
        <div
          className={`max-w-4xl mx-auto px-4 py-8 transition-colors duration-300 ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          {/* Article Header */}
          <div className="mb-8">
            {/* Category & Tags */}
            <CategoryTags darkMode={darkMode} article={article} />

            {/* Title */}
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {article.title}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl leading-relaxed mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {article.subtitle}
            </p>

            {/* Author & Meta Info */}
            <AuthorMetaInfo darkMode={darkMode} article={article} />
          </div>

          {/* Article Content */}
          <article
            className={`prose prose-lg max-w-none transition-colors duration-300 ${
              darkMode ? "prose-invert" : ""
            }`}
          >
            <div
              className={`${
                darkMode
                  ? "prose-headings:text-gray-200 prose-p:text-gray-300 prose-strong:text-gray-100 prose-a:text-blue-400"
                  : "prose-headings:text-gray-800 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600"
              }`}
            >
              {article.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2
                      key={index}
                      className={`text-2xl font-bold mt-8 mb-4 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                } else if (paragraph.startsWith("###")) {
                  return (
                    <h3
                      key={index}
                      className={`text-xl font-semibold mt-6 mb-3 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p
                      key={index}
                      className={`mb-4 leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </article>

          {/* Article Footer */}
          <ArticleFooter
            darkMode={darkMode}
            isLiked={isLiked}
            likes={likes}
            toggleLike={toggleLike}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ArticleReaderPage;
