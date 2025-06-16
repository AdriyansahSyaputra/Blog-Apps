import { Upload, Tag, X, Image } from "lucide-react";
import RichTextEditor from "./RichTextEditor";

const FormAddPost = ({
  darkMode,
  formData,
  handleInputChange,
  statusOptions,
  previewImage,
  setPreviewImage,
  setFormData,
  handleImageUpload,
  handleAddTag,
  tagInput,
  categories,
  handleCategoryToggle,
  setTagInput,
  handleRemoveTag,
}) => {

  return (
    <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        {/* Basic Information */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-gray-900/50 border-gray-700/50"
              : "bg-white border-gray-200"
          }`}
        >
          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Basic Information
          </h2>

          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Post Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter your post title..."
                className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                URL Slug
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => handleInputChange("slug", e.target.value)}
                placeholder="url-slug-for-post"
                className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Excerpt
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => handleInputChange("excerpt", e.target.value)}
                placeholder="Brief description of your post..."
                rows={3}
                className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
          </div>
        </div>

        <RichTextEditor
          value={formData.content}
          onChange={(html) => setFormData({ ...formData, content: html })}
        />
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Publish Settings */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-gray-900/50 border-gray-700/50"
              : "bg-white border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Publish Settings
          </h3>

          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm font-medium mb-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Status
              </label>
              <div className="space-y-2">
                {statusOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <label
                      key={option.value}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="status"
                        value={option.value}
                        checked={formData.status === option.value}
                        onChange={(e) =>
                          handleInputChange("status", e.target.value)
                        }
                        className="sr-only"
                      />
                      <div
                        className={`flex items-center w-full p-3 rounded-xl border-2 transition-all duration-200 ${
                          formData.status === option.value
                            ? "border-blue-500 bg-blue-50/50"
                            : darkMode
                            ? "border-gray-700 hover:border-gray-600"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <Icon className={`w-4 h-4 mr-3 ${option.color}`} />
                        <span
                          className={darkMode ? "text-white" : "text-gray-900"}
                        >
                          {option.label}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {formData.status === "scheduled" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.publishDate}
                    onChange={(e) =>
                      handleInputChange("publishDate", e.target.value)
                    }
                    className={`w-full px-3 py-2 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                      darkMode
                        ? "bg-gray-800/50 border-gray-700 text-white"
                        : "bg-gray-50/50 border-gray-200 text-gray-900"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    value={formData.publishTime}
                    onChange={(e) =>
                      handleInputChange("publishTime", e.target.value)
                    }
                    className={`w-full px-3 py-2 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                      darkMode
                        ? "bg-gray-800/50 border-gray-700 text-white"
                        : "bg-gray-50/50 border-gray-200 text-gray-900"
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-gray-900/50 border-gray-700/50"
              : "bg-white border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Image
          </h3>

          <div className="space-y-4">
            {previewImage ? (
              <div className="relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewImage(null);
                    setFormData((prev) => ({
                      ...prev,
                      featuredImage: null,
                    }));
                  }}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 ${
                  darkMode
                    ? "border-gray-700 hover:border-gray-600"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <Image
                  className={`w-12 h-12 mx-auto mb-4 ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                />
                <p
                  className={`text-sm mb-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Upload featured image
                </p>
                <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-gray-900/50 border-gray-700/50"
              : "bg-white border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Categories
          </h3>

          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.categories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="sr-only"
                />
                <div
                  className={`flex items-center w-full p-3 rounded-xl border transition-all duration-200 ${
                    formData.categories.includes(category.id)
                      ? "border-blue-500 bg-blue-50/50"
                      : darkMode
                      ? "border-gray-700 hover:border-gray-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                      formData.categories.includes(category.id)
                        ? "bg-blue-500 border-blue-500"
                        : darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    {formData.categories.includes(category.id) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className={darkMode ? "text-white" : "text-gray-900"}>
                    {category.name}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-gray-900/50 border-gray-700/50"
              : "bg-white border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Tags
          </h3>

          <div className="space-y-3">
            <div className="relative">
              <Tag
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder="Add tags (press Enter)"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>

            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? "bg-gray-800 text-gray-300 border border-gray-700"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className={`ml-2 hover:text-red-500 transition-colors duration-200`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormAddPost;
