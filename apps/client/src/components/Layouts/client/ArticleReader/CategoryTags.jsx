const CategoryTags = ({ darkMode, article }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      {article.categories.map((category) => (
        <span
          key={category._id}
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            darkMode
              ? "bg-blue-900 text-blue-300"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {category.name}
        </span>
      ))}
      <div className="flex items-center gap-1">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-1 text-xs rounded-md ${
              darkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryTags;
