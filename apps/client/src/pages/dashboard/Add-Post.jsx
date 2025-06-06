import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ImageIcon, Plus } from "lucide-react";

const AddPostPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [post, setPost] = useState({
    title: "",
    content: "",
    excerpt: "",
    status: "draft",
    featuredImage: null,
    categories: [],
    tags: [],
  });
  const [errors, setErrors] = useState({});
  const [newTag, setNewTag] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      const updatedCategories = checked
        ? [...post.categories, value]
        : post.categories.filter((cat) => cat !== value);
      setPost({ ...post, categories: updatedCategories });
    } else if (type === "file") {
      const file = files[0];
      setPost({ ...post, featuredImage: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      setPost({ ...post, tags: [...post.tags, newTag.trim()] });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setPost({
      ...post,
      tags: post.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleRemoveImage = () => {
    setPost({ ...post, featuredImage: null });
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic would go here
    console.log("Post submitted:", post);
  };

  return (
    <>
      <Helmet title="Dashboard | Add Post" />

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
          <main className="p-6 space-y-6">
            <form
              id="post-form"
              onSubmit={handleSubmit}
              className="max-w-6xl mx-auto"
            >
              {/* Page Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Add New Post
                  </h1>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Create and publish a new blog post
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      darkMode
                        ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Publish
                  </button>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column (Form) */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Post Title */}
                  <div
                    className={`rounded-lg shadow p-6 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <label
                      htmlFor="title"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Post Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={post.title}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                        darkMode
                          ? "border-gray-600 bg-gray-700 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      }`}
                      placeholder="Enter post title..."
                    />
                    {errors?.title && (
                      <p
                        className={`mt-2 text-sm ${
                          darkMode ? "text-red-400" : "text-red-500"
                        }`}
                      >
                        {errors.title}
                      </p>
                    )}
                  </div>

                  {/* Post Content Editor */}
                  <div
                    className={`rounded-lg shadow ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div
                      className={`p-4 border-b ${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <label
                        className={`block text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Post Content
                      </label>
                    </div>
                    <div id="editor" className="p-2">
                      <textarea
                        name="content"
                        id="editor-content"
                        value={post.content}
                        onChange={handleInputChange}
                        className={`w-full h-64 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                          darkMode
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                        }`}
                        placeholder="Write your post content here..."
                      />
                    </div>
                    <div className="p-4">
                      {errors?.content && (
                        <p
                          className={`mt-2 text-sm ${
                            darkMode ? "text-red-400" : "text-red-500"
                          }`}
                        >
                          {errors.content}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div
                    className={`rounded-lg shadow p-6 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <label
                      htmlFor="excerpt"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Excerpt
                    </label>
                    <textarea
                      id="excerpt"
                      rows="3"
                      name="excerpt"
                      value={post.excerpt}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                        darkMode
                          ? "border-gray-600 bg-gray-700 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      }`}
                      placeholder="Write a short excerpt..."
                    />
                    {errors?.excerpt && (
                      <p
                        className={`mt-2 text-sm ${
                          darkMode ? "text-red-400" : "text-red-500"
                        }`}
                      >
                        {errors.excerpt}
                      </p>
                    )}
                    <p
                      className={`mt-2 text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      A brief description of your post for SEO and preview
                      purposes.
                    </p>
                  </div>
                </div>

                {/* Right Column (Settings) */}
                <div className="space-y-6">
                  {/* Publish Card */}
                  <div
                    className={`rounded-lg shadow p-6 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-lg font-medium mb-4 ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Publish
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          className={`block text-sm font-medium mb-1 ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Status
                        </label>
                        <select
                          className={`w-full border rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500 ${
                            darkMode
                              ? "border-gray-600 bg-gray-700 text-white"
                              : "border-gray-300 bg-white text-gray-900"
                          }`}
                          name="status"
                          value={post.status}
                          onChange={handleInputChange}
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="scheduled">Scheduled</option>
                        </select>
                        {errors?.status && (
                          <p
                            className={`mt-2 text-sm ${
                              darkMode ? "text-red-400" : "text-red-500"
                            }`}
                          >
                            {errors.status}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div
                    className={`rounded-lg shadow p-6 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-lg font-medium mb-4 ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Featured Image
                    </h3>
                    <div
                      id="image-upload-container"
                      onClick={() =>
                        document.getElementById("image-upload").click()
                      }
                      className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                        darkMode
                          ? "border-gray-600 hover:bg-gray-700"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {imagePreview ? (
                        <>
                          <img
                            id="image-preview"
                            src={imagePreview}
                            alt="Preview"
                            className="w-full mb-2 rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveImage();
                            }}
                            className={`mt-2 text-sm ${
                              darkMode
                                ? "text-red-400 hover:text-red-300"
                                : "text-red-600 hover:text-red-800"
                            }`}
                          >
                            Remove image
                          </button>
                        </>
                      ) : (
                        <>
                          <ImageIcon
                            className={`w-10 h-10 mx-auto mb-2 ${
                              darkMode ? "text-gray-400" : "text-gray-300"
                            }`}
                          />
                          <p
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Click to upload or drag and drop
                          </p>
                          <p
                            className={`text-xs mt-1 ${
                              darkMode ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            Recommended size: 1200x630 pixels
                          </p>
                        </>
                      )}
                      <input
                        type="file"
                        id="image-upload"
                        name="featuredImage"
                        accept="image/*"
                        className="hidden"
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors?.featuredImage && (
                      <p
                        className={`mt-2 text-sm ${
                          darkMode ? "text-red-400" : "text-red-500"
                        }`}
                      >
                        {errors.featuredImage}
                      </p>
                    )}
                  </div>

                  {/* Categories */}
                  <div
                    className={`rounded-lg shadow p-6 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-lg font-medium mb-4 ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <input
                            id={category.id}
                            type="checkbox"
                            name="categories"
                            value={category._id}
                            checked={post.categories.includes(category.id)}
                            onChange={handleInputChange}
                            className={`h-4 w-4 text-blue-600 focus:ring-blue-500 rounded ${
                              darkMode
                                ? "border-gray-600 bg-gray-700"
                                : "border-gray-300 bg-white"
                            }`}
                          />
                          <label
                            htmlFor={category.id}
                            className={`ml-2 text-sm ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors?.categories && (
                      <p
                        className={`mt-2 text-sm ${
                          darkMode ? "text-red-400" : "text-red-500"
                        }`}
                      >
                        {errors.categories}
                      </p>
                    )}
                    <button
                      type="button"
                      className={`mt-3 text-sm flex items-center ${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add New Category
                    </button>
                  </div>

                  {/* Tags */}
                  <div
                    className={`rounded-lg shadow p-6 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-lg font-medium mb-4 ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Tags
                    </h3>
                    <div
                      className="flex flex-wrap gap-2 mb-3"
                      id="tags-container"
                    >
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        id="tag-input"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className={`flex-1 border rounded-l-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500 ${
                          darkMode
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                        }`}
                        placeholder="Add tag..."
                      />
                      <button
                        id="add-tag-btn"
                        type="button"
                        onClick={handleAddTag}
                        className="px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg text-sm transition-colors"
                      >
                        Add
                      </button>
                    </div>
                    {errors?.tags && (
                      <p
                        className={`mt-2 text-sm ${
                          darkMode ? "text-red-400" : "text-red-500"
                        }`}
                      >
                        {errors.tags}
                      </p>
                    )}
                    <input
                      type="hidden"
                      name="tags"
                      value={post.tags.join(",")}
                    />
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddPostPage;
