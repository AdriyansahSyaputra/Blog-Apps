import { Plus } from "lucide-react";

const CategoryHeader = ({ darkMode, setShowModal, setEditingCategory }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Categories Management
        </h1>
        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Organize and manage your blog categories
        </p>
      </div>

      <button
        onClick={() => {
          setEditingCategory(null);
          setShowModal(true);
        }}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
      >
        <Plus className="w-5 h-5" />
        <span>New Category</span>
      </button>
    </div>
  );
};

export default CategoryHeader;
