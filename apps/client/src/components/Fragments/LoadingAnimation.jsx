const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="relative w-16 h-16">
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-green-500 animate-spin-slow"></div>

        {/* Inner ring with different gradient */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-green-500 border-r-blue-500 border-b-purple-500 border-l-pink-500 animate-spin-reverse"></div>

        {/* Center dot */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
