import { Upload, Tag, X, Image, Check } from "lucide-react";
import RichTextEditor from "./RichTextEditor";

// Basic Information Section Component
const BasicInformationSection = ({
  darkMode,
  formData,
  handleInputChange,
  setFormData,
  errors,
}) => (
  <div
    className={`p-4 rounded-xl border ${
      darkMode
        ? "bg-gray-900/30 border-gray-700/50"
        : "bg-white/50 border-gray-200"
    }`}
  >
    <h2
      className={`text-base font-semibold mb-3 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Basic Information
    </h2>

    <div className="space-y-3">
      {/* Post Title */}
      <div>
        <label
          className={`block text-xs font-medium mb-1 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Post Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter your post title..."
          className={`w-full px-3 py-2 text-sm rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title}</p>
        )}
      </div>

      {/* URL Slug */}
      <div>
        <label
          className={`block text-xs font-medium mb-1 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          URL Slug
        </label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={(e) => {
            handleInputChange("slug", e.target.value);
            setFormData((prev) => ({
              ...prev,
              slugManuallyEdited: true,
            }));
          }}
          placeholder="url-slug-for-post"
          className={`w-full px-3 py-2 text-sm rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
        {errors.slug && (
          <p className="text-red-500 text-xs mt-1">{errors.slug}</p>
        )}
      </div>

      {/* Excerpt */}
      <div>
        <label
          className={`block text-xs font-medium mb-1 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Excerpt
        </label>
        <textarea
          value={formData.excerpt}
          name="excerpt"
          onChange={(e) => handleInputChange("excerpt", e.target.value)}
          placeholder="Brief description of your post..."
          rows={2}
          className={`w-full px-3 py-2 text-sm rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
        {errors.excerpt && (
          <p className="text-red-500 text-xs mt-1">{errors.excerpt}</p>
        )}
      </div>
    </div>
  </div>
);

// Publish Settings Section Component
const PublishSettingsSection = ({
  darkMode,
  formData,
  handleInputChange,
  statusOptions,
  errors,
}) => (
  <div
    className={`p-4 rounded-xl border ${
      darkMode
        ? "bg-gray-900/30 border-gray-700/50"
        : "bg-white/50 border-gray-200"
    }`}
  >
    <h3
      className={`text-base font-semibold mb-3 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Publish Settings
    </h3>

    <div className="space-y-3">
      {/* Status Options */}
      <div>
        <label
          className={`block text-xs font-medium mb-2 ${
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
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="sr-only"
                />

                <div
                  className={`flex items-center w-full p-2 rounded-lg border-2 transition-all duration-200 ${
                    formData.status === option.value
                      ? "border-blue-500 bg-blue-50/50"
                      : darkMode
                      ? "border-gray-700 hover:border-gray-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Icon className={`w-3 h-3 mr-2 ${option.color}`} />
                  <span
                    className={`text-sm ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {option.label}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
        {errors.status && (
          <p className="text-red-500 text-xs mt-1">{errors.status}</p>
        )}
      </div>

      {/* Scheduled DateTime */}
      {formData.status === "scheduled" && (
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Date
            </label>
            <input
              type="date"
              name="publishDate"
              value={formData.publishDate}
              onChange={(e) => handleInputChange("publishDate", e.target.value)}
              className={`w-full px-2 py-1.5 text-sm rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 text-white"
                  : "bg-gray-50/50 border-gray-200 text-gray-900"
              }`}
            />
          </div>
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Time
            </label>
            <input
              type="time"
              name="publishTime"
              value={formData.publishTime}
              onChange={(e) => handleInputChange("publishTime", e.target.value)}
              className={`w-full px-2 py-1.5 text-sm rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
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
);

// Featured Image Section Component
const FeaturedImageSection = ({
  darkMode,
  previewImage,
  setPreviewImage,
  setFormData,
  handleImageUpload,
  errors,
}) => (
  <div
    className={`p-4 rounded-xl border ${
      darkMode
        ? "bg-gray-900/30 border-gray-700/50"
        : "bg-white/50 border-gray-200"
    }`}
  >
    <h3
      className={`text-base font-semibold mb-3 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Featured Image
    </h3>
    <div className="space-y-3">
      {previewImage ? (
        <div className="relative">
          <img
            src={
              previewImage.startsWith("data:")
                ? previewImage
                : `${
                    import.meta.env.VITE_BASE_URL
                  }/uploads/img/thumbnails/${previewImage}`
            }
            alt="Preview"
            className="w-full h-32 object-cover rounded-lg"
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
            className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors duration-200 ${
            darkMode
              ? "border-gray-700 hover:border-gray-600"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <Image
            className={`w-8 h-8 mx-auto mb-2 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          />
          <p
            className={`text-xs mb-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Upload featured image
          </p>
          <label className="inline-flex items-center px-3 py-1.5 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
            <Upload className="w-3 h-3 mr-1" />
            Choose File
            <input
              type="file"
              accept="image/*"
              name="featuredImage"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      )}
    </div>
    {errors.featuredImage && (
      <p className="text-xs text-red-500 mt-1">{errors.featuredImage}</p>
    )}
  </div>
);

// Categories Section Component
const CategoriesSection = ({
  darkMode,
  formData,
  categories,
  handleCategoryToggle,
  errors,
}) => (
  <div
    className={`p-4 rounded-xl border ${
      darkMode
        ? "bg-gray-900/30 border-gray-700/50"
        : "bg-white/50 border-gray-200"
    }`}
  >
    <h3
      className={`text-base font-semibold mb-3 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Categories
    </h3>

    <div className="space-y-1 max-h-32 overflow-y-auto">
      {categories.map((category) => (
        <label key={category._id} className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="categories"
            checked={formData.categories.includes(category._id)}
            onChange={() => handleCategoryToggle(category._id)}
            className="sr-only"
          />
          <div
            className={`flex items-center w-full p-2 rounded-lg border transition-all duration-200 ${
              formData.categories.includes(category._id)
                ? "border-blue-500 bg-blue-50/50"
                : darkMode
                ? "border-gray-700 hover:border-gray-600"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div
              className={`w-3 h-3 rounded border-2 mr-2 flex items-center justify-center ${
                formData.categories.includes(category._id)
                  ? "bg-blue-500 border-blue-500"
                  : darkMode
                  ? "border-gray-600"
                  : "border-gray-300"
              }`}
            >
              {formData.categories.includes(category._id) && (
                <Check className="w-2 h-2 text-white" />
              )}
            </div>
            <span
              className={`text-sm ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              {category.name}
            </span>
          </div>
        </label>
      ))}
    </div>
    {errors.categories && (
      <p className="text-xs text-red-500 mt-1">{errors.categories}</p>
    )}
  </div>
);

// Tags Section Component
const TagsSection = ({
  darkMode,
  formData,
  tagInput,
  setTagInput,
  handleAddTag,
  handleRemoveTag,
  errors,
}) => (
  <div
    className={`p-4 rounded-xl border ${
      darkMode
        ? "bg-gray-900/30 border-gray-700/50"
        : "bg-white/50 border-gray-200"
    }`}
  >
    <h3
      className={`text-base font-semibold mb-3 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Tags
    </h3>

    <div className="space-y-2">
      {/* Tag Input */}
      <div className="relative">
        <Tag
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        />
        <input
          type="text"
          name="tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="Add tags (press Enter)"
          className={`w-full pl-7 pr-3 py-2 text-sm rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
      </div>
      {errors.tags && (
        <span className="text-red-500 text-xs">{errors.tags}</span>
      )}

      {/* Tags Display */}
      {formData.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border border-gray-700"
                  : "bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              #{tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className={`ml-1 hover:text-red-500 transition-colors duration-200`}
              >
                <X className="w-2 h-2" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

// Main Content Section Component
const MainContentSection = ({
  darkMode,
  formData,
  handleInputChange,
  setFormData,
  errors,
}) => (
  <div className="space-y-4">
    <BasicInformationSection
      darkMode={darkMode}
      formData={formData}
      handleInputChange={handleInputChange}
      setFormData={setFormData}
      errors={errors}
    />

    <div
      className={`p-4 rounded-xl border ${
        darkMode
          ? "bg-gray-900/30 border-gray-700/50"
          : "bg-white/50 border-gray-200"
      }`}
    >
      <h3
        className={`text-base font-semibold mb-3 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Content
      </h3>
      <RichTextEditor
        value={formData.content}
        onChange={(html) => setFormData({ ...formData, content: html })}
        darkMode={darkMode}
      />
      {errors.content && (
        <p className="text-xs text-red-500 mt-1">{errors.content}</p>
      )}
    </div>
  </div>
);

// Sidebar Section Component
const SidebarSection = ({
  darkMode,
  formData,
  handleInputChange,
  statusOptions,
  previewImage,
  setPreviewImage,
  setFormData,
  handleImageUpload,
  categories,
  handleCategoryToggle,
  tagInput,
  setTagInput,
  handleAddTag,
  handleRemoveTag,
  errors,
}) => (
  <div className="space-y-4">
    <PublishSettingsSection
      darkMode={darkMode}
      formData={formData}
      handleInputChange={handleInputChange}
      statusOptions={statusOptions}
      errors={errors}
    />

    <FeaturedImageSection
      darkMode={darkMode}
      previewImage={previewImage}
      setPreviewImage={setPreviewImage}
      setFormData={setFormData}
      handleImageUpload={handleImageUpload}
      errors={errors}
      formData={formData}
    />

    <CategoriesSection
      darkMode={darkMode}
      formData={formData}
      categories={categories}
      handleCategoryToggle={handleCategoryToggle}
      errors={errors}
    />

    <TagsSection
      darkMode={darkMode}
      formData={formData}
      tagInput={tagInput}
      setTagInput={setTagInput}
      handleAddTag={handleAddTag}
      handleRemoveTag={handleRemoveTag}
      errors={errors}
    />
  </div>
);

// Modal Component
const ModalFormUpdatePost = ({
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
  errors,
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 ${
          darkMode
            ? "bg-black/60 backdrop-blur-sm"
            : "bg-gray-900/50 backdrop-blur-sm"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className={`relative w-full max-w-7xl transform transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 border border-gray-700/50"
                : "bg-white border border-gray-200"
            } rounded-2xl shadow-2xl`}
          >
            {/* Modal Header */}
            <div
              className={`flex items-center justify-between p-6 border-b ${
                darkMode ? "border-gray-700/50" : "border-gray-200"
              }`}
            >
              <h1
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Update Post
              </h1>
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              <form
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Main Content - 2 columns on large screens */}
                <div className="lg:col-span-2">
                  <MainContentSection
                    darkMode={darkMode}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    setFormData={setFormData}
                    statusOptions={statusOptions}
                    errors={errors}
                  />
                </div>

                {/* Sidebar - 1 column on large screens */}
                <div className="lg:col-span-1">
                  <SidebarSection
                    darkMode={darkMode}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    statusOptions={statusOptions}
                    previewImage={previewImage}
                    setPreviewImage={setPreviewImage}
                    setFormData={setFormData}
                    handleImageUpload={handleImageUpload}
                    categories={categories}
                    handleCategoryToggle={handleCategoryToggle}
                    tagInput={tagInput}
                    setTagInput={setTagInput}
                    handleAddTag={handleAddTag}
                    handleRemoveTag={handleRemoveTag}
                    errors={errors}
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div
              className={`flex items-center justify-end gap-3 p-6 border-t ${
                darkMode ? "border-gray-700/50" : "border-gray-200"
              }`}
            >
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={onSubmit}
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFormUpdatePost;