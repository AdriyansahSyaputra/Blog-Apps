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
      {/* Post Title */}
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
          name="title"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter your post title..."
          className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-xs md:text-sm">{errors.title}</p>
        )}
      </div>

      {/* URL Slug */}
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
          className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
        {errors.slug && (
          <p className="text-red-500 text-xs md:text-sm">{errors.slug}</p>
        )}
      </div>

      {/* Excerpt */}
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
          name="excerpt"
          onChange={(e) => handleInputChange("excerpt", e.target.value)}
          placeholder="Brief description of your post..."
          rows={3}
          className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
        {errors.excerpt && (
          <p className="text-red-500 text-xs md:text-sm mt-1">
            {errors.excerpt}
          </p>
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
      {/* Status Options */}
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
                  onChange={(e) => handleInputChange("status", e.target.value)}
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
                  <span className={darkMode ? "text-white" : "text-gray-900"}>
                    {option.label}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
        {errors.status && (
          <p className="text-red-500 text-xs md:text-sm">{errors.status}</p>
        )}
      </div>

      {/* Scheduled DateTime */}
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
              name="publishDate"
              value={formData.publishDate}
              onChange={(e) => handleInputChange("publishDate", e.target.value)}
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
              name="publishTime"
              value={formData.publishTime}
              onChange={(e) => handleInputChange("publishTime", e.target.value)}
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
              name="featuredImage"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      )}
    </div>
    {errors.featuredImage && (
      <p className="text-xs md:text-sm text-red-500">{errors.featuredImage}</p>
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
        <label key={category._id} className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="categories"
            checked={formData.categories.includes(category._id)}
            onChange={() => handleCategoryToggle(category._id)}
            className="sr-only"
          />
          <div
            className={`flex items-center w-full p-3 rounded-xl border transition-all duration-200 ${
              formData.categories.includes(category._id)
                ? "border-blue-500 bg-blue-50/50"
                : darkMode
                ? "border-gray-700 hover:border-gray-600"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                formData.categories.includes(category._id)
                  ? "bg-blue-500 border-blue-500"
                  : darkMode
                  ? "border-gray-600"
                  : "border-gray-300"
              }`}
            >
              {formData.categories.includes(category._id) && (
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
    {errors.categories && (
      <p className="text-xs md:text-sm text-red-500">{errors.categories}</p>
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
      {/* Tag Input */}
      <div className="relative">
        <Tag
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
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
          className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            darkMode
              ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              : "bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500"
          }`}
        />
      </div>
      {errors.tags && (
        <span className="text-red-500 text-xs md:text-sm">{errors.tags}</span>
      )}

      {/* Tags Display */}
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
              #{tag}
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
);

// Main Content Section Component
const MainContentSection = ({
  darkMode,
  formData,
  handleInputChange,
  setFormData,
  errors,
}) => (
  <div className="lg:col-span-2 space-y-6">
    <BasicInformationSection
      darkMode={darkMode}
      formData={formData}
      handleInputChange={handleInputChange}
      setFormData={setFormData}
      errors={errors}
    />

    <RichTextEditor
      value={formData.content}
      onChange={(html) => setFormData({ ...formData, content: html })}
      darkMode={darkMode}
    />
    {errors.content && (
      <p className="text-xs md:text-sm text-red-500 -mt-5">{errors.content}</p>
    )}
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
  <div className="space-y-6">
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

// Main FormAddPost Component
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
  errors,
}) => {
  return (
    <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <MainContentSection
        darkMode={darkMode}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        statusOptions={statusOptions}
        errors={errors}
      />

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
    </form>
  );
};

export default FormAddPost;
