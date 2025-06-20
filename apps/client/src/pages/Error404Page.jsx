import { Helmet } from "react-helmet-async";
import { Home, Search, RefreshCw } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Error404Page = () => {
  const { darkMode } = useTheme();

  return (
    <>
      <Helmet title="404" />

      <div
        className={`min-h-screen transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 ${
              darkMode ? "bg-purple-500" : "bg-blue-400"
            }`}
          ></div>
          <div
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 ${
              darkMode ? "bg-indigo-500" : "bg-purple-400"
            }`}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="relative mb-8">
              <h1
                className={`text-8xl sm:text-9xl md:text-[12rem] font-black leading-none select-none ${
                  darkMode
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
                }`}
              >
                404
              </h1>
              <div
                className={`absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-black leading-none blur-lg opacity-30 ${
                  darkMode ? "text-purple-400" : "text-blue-600"
                }`}
              >
                404
              </div>
            </div>

            {/* Search Icon with Animation */}
            <div className="mb-8">
              <div
                className={`inline-flex p-6 rounded-full ${
                  darkMode
                    ? "bg-white/10 backdrop-blur-md border border-white/20"
                    : "bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg"
                }`}
              >
                <Search
                  className={`w-12 h-12 ${
                    darkMode ? "text-purple-400" : "text-indigo-600"
                  } animate-pulse`}
                />
              </div>
            </div>

            {/* Title and Description */}
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Halaman Tidak Ditemukan
            </h2>

            <p
              className={`text-lg sm:text-xl mb-8 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Maaf, halaman yang Anda cari tidak dapat ditemukan.
              <br className="hidden sm:block" />
              Mungkin halaman telah dipindahkan atau dihapus.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className={`group inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg hover:shadow-purple-500/25"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg hover:shadow-blue-500/25"
                }`}
              >
                <Home className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Kembali ke Beranda
              </button>

              <button
                onClick={() => window.location.reload()}
                className={`group inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
                    : "bg-black/5 hover:bg-black/10 text-gray-800 backdrop-blur-md border border-gray-200"
                }`}
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Muat Ulang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404Page;
