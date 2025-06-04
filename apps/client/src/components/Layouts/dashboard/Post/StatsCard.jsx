const StatsCard = ({ icon: Icon, title, value, change, darkMode }) => (
  <div
    className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
      darkMode
        ? "bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/60"
        : "bg-white/50 border-gray-200/50 hover:bg-white/70"
    }`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p
          className={`text-sm font-medium ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-2xl font-bold mt-1 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {value}
        </p>
        <p
          className={`text-sm mt-1 ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change >= 0 ? "+" : ""}
          {change}% from last month
        </p>
      </div>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

export default StatsCard;