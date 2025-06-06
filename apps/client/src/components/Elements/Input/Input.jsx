const Input = ({ darkMode, type, id, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full pl-10 pr-3 py-2.5 rounded-lg border ${
        darkMode
          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
      } focus:outline-none focus:ring-2`}
      placeholder={placeholder}
    />
  );
};

export default Input;
