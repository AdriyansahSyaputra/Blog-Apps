import { ArrowRight, Clock, MessageSquare, Star } from "lucide-react";

const FeaturedPost = ({ darkMode, featuredPosts }) => {
  return (
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
  );
};

export default FeaturedPost;
