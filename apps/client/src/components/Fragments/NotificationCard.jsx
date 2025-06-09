import { useEffect, useState } from "react";
import StatusIcon from "../Elements/StatusIcon";

const NotificationCard = ({ type, message, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start enter animation
    const enterTimer = setTimeout(() => setIsAnimating(true), 100);

    // Start exit sequence after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 300); // Matches the transition duration
    }, 2500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onClose]);

  if (!isVisible) return null;

  const isSuccess = type === "success";
  const statusColor = isSuccess ? "green" : "red";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isAnimating ? "opacity-20" : "opacity-0"
        }`}
      />

      {/* Notification Card */}
      <div
        role="alert"
        aria-live="assertive"
        className={`
          relative pointer-events-auto
          bg-white rounded-2xl shadow-2xl
          p-8 mx-4 max-w-sm w-full
          transform transition-all duration-300 ease-out
          ${
            isAnimating
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }
          border-t-4 border-${statusColor}-500
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsAnimating(false);
            setTimeout(() => {
              setIsVisible(false);
              onClose();
            }, 300);
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Status Text */}
        <div className="text-center mb-6">
          <h3
            className={`text-2xl font-bold tracking-wide text-${statusColor}-600 ${
              isAnimating ? "animate-pulse" : ""
            }`}
          >
            {isSuccess ? "SUCCESS" : "FAILED"}
          </h3>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center mb-6">
          <div
            className={`
              rounded-full p-4 
              bg-${statusColor}-100 ring-4 ring-${statusColor}-200
              transform transition-transform duration-500
              ${isAnimating ? "rotate-0 scale-100" : "rotate-180 scale-0"}
            `}
          >
            <StatusIcon isSuccess={isSuccess} isAnimating={isAnimating} />
          </div>
        </div>

        {/* Message */}
        <div className="text-center">
          <p
            className={`
              text-gray-700 text-base leading-relaxed
              transform transition-all duration-500 delay-200
              ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            {message}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className={`
              h-full rounded-full transition-all duration-[2500ms] ease-linear
              bg-${statusColor}-500
              ${isAnimating ? "w-0" : "w-full"}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
