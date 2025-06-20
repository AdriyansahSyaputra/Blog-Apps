import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import ArticleFooter from "../../components/Layouts/client/ArticleReader/ArticleFooter";
import AuthorMetaInfo from "../../components/Layouts/client/ArticleReader/AuthorMetaInfo";
import CategoryTags from "../../components/Layouts/client/ArticleReader/CategoryTags";
import NavArticle from "../../components/Layouts/client/ArticleReader/NavArticle";
import axios from "axios";
import { useParams } from "react-router-dom";
import { extractTextFromPTags } from "../../utils/sanitizeUtils";
import LoadingAnimation from "../../components/Fragments/LoadingAnimation";

const ArticleReaderPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [article, setArticle] = useState(null);
  const paragraphs = extractTextFromPTags(article?.content || "");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const [totalComments, setTotalComments] = useState(0);

  const { slug } = useParams();

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const fetchArticle = useCallback(async () => {
    try {
      const res = await axios.get(`/api/client/articles/${slug}`);
      setArticle(res.data);
      setLikes(res.data.totalLikes);
      setIsLiked(res.data.liked);
    } catch (err) {
      console.error("Gagal memuat artikel:", err);
    }
  }, [slug]);

  const toggleLike = async () => {
    try {
      const res = await axios.post(
        `/api/client/posts/${article._id}/like`,
        null,
        {
          withCredentials: true,
        }
      );
      setIsLiked(res.data.liked);
      setLikes(res.data.totalLikes);
    } catch (err) {
      console.error("Gagal menyukai artikel:", err);
    }
  };

  // Handle add comment
  const handleAddComment = async (comment) => {
    try {
      await axios.post(`/api/client/comment`, comment, {
        withCredentials: true,
      });

      setCommentText("");

      fetchComments();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchComments = useCallback(
    async (page = 1, append = false) => {
      try {
        const res = await axios.get("/api/client/comments", {
          params: {
            postId: article?._id,
            parent: null,
            limit: 5,
            page,
          },
          withCredentials: true,
        });

        if (append) {
          setComments((prev) => [...prev, ...res.data.comments]);
        } else {
          setComments(res.data.comments);
        }

        setTotalComments(res.data.total);

        const total = res.data.total;
        const loaded = page * 5;
        setHasMoreComments(loaded < total);
      } catch (err) {
        console.error("Gagal mengambil komentar:", err);
      }
    },
    [article?._id]
  );

  const fetchRepliesByCommentId = async (commentId) => {
    try {
      const res = await axios.get("/api/client/comments", {
        params: {
          postId: article._id,
          parent: commentId,
        },
        withCredentials: true,
      });

      return res.data;
    } catch (err) {
      console.log("Gagal mengambil balasan komentar:", err);
      return [];
    }
  };

  const fetchCurrentUser = useCallback(async () => {
    try {
      const res = await axios.get("/api/client/me", {
        withCredentials: true,
      });
      setCurrentUser(res.data);
    } catch (err) {
      console.error("Gagal mengambil user:", err);
    }
  }, []);

  useEffect(() => {
    if (slug) {
      fetchArticle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchArticle]);

  useEffect(() => {
    if (article?._id) {
      fetchComments();
    }
  }, [article?._id, fetchComments]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  if (!article) {
    return <LoadingAnimation />;
  }

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
              {article.excerpt}
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
              {paragraphs.map((paragraph, index) => {
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
                } else {
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
              })}
            </div>
          </article>

          {/* Article Footer */}
          <ArticleFooter
            darkMode={darkMode}
            isLiked={isLiked}
            likes={likes}
            toggleLike={() => toggleLike(article._id)}
            handleAddComment={handleAddComment}
            commentText={commentText}
            setCommentText={setCommentText}
            article={article}
            comments={comments}
            currentUser={currentUser}
            fetchRepliesByCommentId={fetchRepliesByCommentId}
            hasMoreComments={hasMoreComments}
            fetchComments={fetchComments}
            totalComments={totalComments}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ArticleReaderPage;
