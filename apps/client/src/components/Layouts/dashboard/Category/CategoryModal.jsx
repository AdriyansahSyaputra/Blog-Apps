import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CategoryModal = ({
  darkMode,
  isOpen,
  onClose,
  category = null,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    color: "#3B82F6",
    icon: "Tag",
    parentId: null,
  });

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        slug: category.slug,
        description: category.description,
        color: category.color,
        icon: category.icon,
        parentId: category.parentId,
      });
    } else {
      setFormData({
        name: "",
        slug: "",
        description: "",
        color: "#3B82F6",
        icon: "Tag",
        parentId: null,
      });
    }
  }, [category, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const colors = [
    "#3B82F6",
    "#8B5CF6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#06B6D4",
    "#84CC16",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-md mx-4 p-6 rounded-2xl backdrop-blur-xl border ${
          darkMode
            ? "bg-gray-900/90 border-gray-700/50"
            : "bg-white/90 border-gray-200/50"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {category ? "Edit Category" : "Create Category"}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              darkMode
                ? "hover:bg-gray-800 text-gray-400"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Category Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-xl border backdrop-blur-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
              }`}
              placeholder="Enter category name"
              required
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className={`w-full px-4 py-3 rounded-xl border backdrop-blur-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
              }`}
              placeholder="Enter category description"
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Color
            </label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setFormData({ ...formData, color })}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    formData.color === color
                      ? "border-white shadow-lg scale-110"
                      : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 px-4 py-3 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                onSave(formData);
                onClose();
              }}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
            >
              {category ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;