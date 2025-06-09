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
  const isConfirmPassword = name === "confirmPassword";

  // Tentukan visibility state yang benar
  const shouldShowText = isConfirmPassword ? showConfirmPassword : showPassword;

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
          type={isPasswordField ? (shouldShowText ? "text" : "password") : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() =>
              isConfirmPassword
                ? setShowConfirmPassword(!showConfirmPassword)
                : setShowPassword(!showPassword)
            }
            className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
              darkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {shouldShowText ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </>
  );
};

export default InputField;
