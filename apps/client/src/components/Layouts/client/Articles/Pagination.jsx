const Pagination = ({ darkMode }) => {
  return (
    <div
      className={`flex items-center justify-between mt-12 p-6 rounded-xl ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-sm`}
    >
      <button
        className={`px-4 py-2 rounded-lg ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
        } transition-colors duration-200`}
        disabled
      >
        Previous
      </button>
      <div className="flex space-x-2">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              page === 1
                ? darkMode
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-100 text-indigo-600"
                : darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            } transition-colors duration-200`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className={`px-4 py-2 rounded-lg ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
        } transition-colors duration-200`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
