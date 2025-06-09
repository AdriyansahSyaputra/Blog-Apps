const StatusIcon = ({ isSuccess, isAnimating }) => (
  <svg
    className={`w-12 h-12 ${isSuccess ? "text-green-500" : "text-red-500"} ${
      isAnimating ? "animate-pulse" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {isSuccess ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M6 18L18 6M6 6l12 12"
      />
    )}
  </svg>
);

export default StatusIcon;