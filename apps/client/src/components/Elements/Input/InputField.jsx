import { Eye, EyeOff } from "lucide-react";
import Input from "./Input";
import Label from "./Label";

const InputField = ({
  darkMode,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  icon,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) => {
  const isPasswordField = type === "password";
  const isConfirmPasswordField = type === "confirmPassword";

  return (
    <>
      <Label htmlFor={id} label={label} darkMode={darkMode} />
      <div className="relative">
        {/* Icon di kiri */}
        <div
          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {icon}
        </div>

        {/* Input */}
        <Input
          darkMode={darkMode}
          type={isPasswordField && showPassword ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        {/* Eye button hanya untuk password */}
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
              darkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {/* Eye button hanya untuk confirm password */}
        {isConfirmPasswordField && (
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
              darkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </>
  );
};

export default InputField;
