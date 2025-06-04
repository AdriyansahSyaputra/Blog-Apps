import { Eye, Edit3, Settings, Trash2 } from "lucide-react";

const CategoryActionMenu = ({
  darkMode,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  onView,
}) => {
  if (!isOpen) return null;

  const actions = [
    { icon: Eye, label: "View Posts", onClick: onView, color: "text-blue-500" },
    {
      icon: Edit3,
      label: "Edit Category",
      onClick: onEdit,
      color: "text-green-500",
    },
    {
      icon: Settings,
      label: "Settings",
      onClick: () => {},
      color: "text-yellow-500",
    },
    { icon: Trash2, label: "Delete", onClick: onDelete, color: "text-red-500" },
  ];

  return (
    <div
      className={`absolute top-full right-0 mt-2 w-44 rounded-xl backdrop-blur-xl border shadow-lg z-50 ${
        darkMode
          ? "bg-gray-900/90 border-gray-700/50"
          : "bg-white/90 border-gray-200/50"
      }`}
    >
      <div className="p-2">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={() => {
                action.onClick();
                onClose();
              }}
              className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-300"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Icon className={`w-4 h-4 mr-3 ${action.color}`} />
              <span className="text-sm">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryActionMenu;
