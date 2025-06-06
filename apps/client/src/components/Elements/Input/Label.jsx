const Label = ({ darkMode, htmlFor, label }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium ${
        darkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {label}
    </label>
  );
};

export default Label;
