import {
  ArrowRight,
  BookOpen,
  Clock,
  TrendingUp,
  Users,
  MessageSquare,
  Star,
  Zap,
  Bookmark,
  Hash,
  PenTool,
} from "lucide-react";
import { useTheme } from "../../../../context/ThemeContext";

const Home = () => {
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
    <div
      className={`pt-24 pb-12 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div
              className={`inline-block px-4 py-2 rounded-full ${
                darkMode
                  ? "bg-indigo-900/30 text-indigo-300"
                  : "bg-indigo-100 text-indigo-600"
              } text-sm font-medium`}
            >
              Welcome to BlogZen
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Discover & Share{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Great Stories
              </span>
            </h1>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } max-w-lg`}
            >
              A modern platform for writers and readers to connect. Explore
              thought-provoking articles on technology, design, lifestyle, and
              more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                Start Reading
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button
                className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } shadow-sm`}
              >
                Become a Writer
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div
              className={`rounded-2xl overflow-hidden shadow-xl ${
                darkMode ? "ring-1 ring-gray-800" : "ring-1 ring-gray-200"
              }`}
            >
              <img
                src={
                  darkMode ? "/images/hero-dark.jpg" : "/images/hero-light.jpg"
                }
                alt="Person writing in a notebook"
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className={`absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl ${
                darkMode ? "bg-indigo-900/50" : "bg-indigo-100"
              } -z-10`}
            ></div>
            <div
              className={`absolute -top-6 -right-6 h-32 w-32 rounded-2xl ${
                darkMode ? "bg-purple-900/50" : "bg-purple-100"
              } -z-10`}
            ></div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <a
            href="#"
            className={`flex items-center text-sm font-medium ${
              darkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-700"
            } transition-colors duration-200`}
          >
            View all articles
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <div
                className={`h-48 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
              ></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      darkMode
                        ? "bg-indigo-900/30 text-indigo-300"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    {post.category}
                  </span>
                  <div
                    className={`flex items-center text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <span
                      className={`flex items-center text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <Star className="mr-1 h-3 w-3" /> {post.likes}
                    </span>
                    <span
                      className={`flex items-center text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <MessageSquare className="mr-1 h-3 w-3" /> {post.comments}
                    </span>
                  </div>
                  <a
                    href="#"
                    className={`text-sm font-medium ${
                      darkMode
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-700"
                    } transition-colors duration-200`}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Community
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                value: "1,240+",
                label: "Articles Published",
              },
              {
                icon: <Users className="h-8 w-8" />,
                value: "8,500+",
                label: "Active Readers",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                value: "95%",
                label: "Satisfaction Rate",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl text-center transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg hover:shadow-xl`}
              >
                <div
                  className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${
                    darkMode
                      ? "bg-indigo-900/30 text-indigo-300"
                      : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  {stat.icon}
                </div>
                <h3
                  className={`text-3xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Authors Section */}
      <section className="container mx-auto px-6 py-16">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Authors
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topAuthors.map((author, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl flex items-center space-x-4`}
            >
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3
                  className={`text-lg font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {author.name}
                </h3>
                <div className="flex space-x-4 mt-1">
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {author.posts} posts
                  </span>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {author.followers} followers
                  </span>
                </div>
                <button
                  className={`mt-3 px-4 py-1.5 text-sm rounded-lg ${
                    darkMode
                      ? "bg-indigo-900/30 text-indigo-300 hover:bg-indigo-900/50"
                      : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                  } transition-colors duration-200`}
                >
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Tags Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Trending{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tags
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {trendingTags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-indigo-300"
                    : "bg-white hover:bg-gray-50 text-indigo-600"
                } shadow-md hover:shadow-lg flex items-center`}
              >
                <span className="font-medium">{tag.name}</span>
                <span
                  className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tag.posts}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-16">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Explore{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Categories
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popularCategories.map((category, index) => (
            <a
              key={index}
              href="#"
              className={`p-6 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } shadow-md hover:shadow-lg flex items-center justify-between`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    darkMode
                      ? "bg-indigo-900/30 text-indigo-300"
                      : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  {category.icon}
                </div>
                <span
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.name}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {category.count} articles
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Readers Say
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "BlogZen has completely transformed how I consume content. The quality of articles is exceptional!",
                author: "David Miller",
                role: "Product Designer",
              },
              {
                quote:
                  "As a writer, I've found my perfect platform. The community engagement is unlike anything else.",
                author: "Sophia Chen",
                role: "Tech Writer",
              },
              {
                quote:
                  "The dark mode reading experience is so easy on the eyes. I spend hours here every day learning new things.",
                author: "James Wilson",
                role: "Developer",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg hover:shadow-xl`}
              >
                <div
                  className={`mb-6 text-5xl ${
                    darkMode ? "text-gray-600" : "text-gray-200"
                  }`}
                >
                  "
                </div>
                <p
                  className={`text-lg italic mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {testimonial.quote}
                </p>
                <div>
                  <h4
                    className={`font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.author}
                  </h4>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div
          className={`rounded-2xl p-12 text-center ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-xl`}
        >
          <h2
            className={`text-2xl md:text-3xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to start your writing journey?
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of writers sharing their knowledge with a global
            audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
              Get Started - It's Free
            </button>
            <button
              className={`px-8 py-3 font-medium rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } shadow-sm`}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
