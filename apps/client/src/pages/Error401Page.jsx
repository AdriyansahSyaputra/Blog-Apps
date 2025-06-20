import { Helmet } from "react-helmet-async";
import { Shield, ArrowLeft, AlertTriangle, Lock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error401Page = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Helmet title="401 | Unauthorized" />

      <div
        className={`min-h-screen transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"
            : "bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20 ${
              darkMode ? "bg-red-500" : "bg-orange-400"
            }`}
          ></div>
          <div
            className={`absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-15 ${
              darkMode ? "bg-orange-500" : "bg-red-400"
            }`}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-center max-w-2xl mx-auto">
            {/* 401 Number */}
            <div className="relative mb-8">
              <h1
                className={`text-8xl sm:text-9xl md:text-[12rem] font-black leading-none select-none ${
                  darkMode
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600"
                }`}
              >
                401
              </h1>
              <div
                className={`absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-black leading-none blur-lg opacity-30 ${
                  darkMode ? "text-red-400" : "text-red-600"
                }`}
              >
                401
              </div>
            </div>

            {/* Lock Icon with Animation */}
            <div className="mb-8">
              <div
                className={`inline-flex p-6 rounded-full ${
                  darkMode
                    ? "bg-white/10 backdrop-blur-md border border-white/20"
                    : "bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg"
                }`}
              >
                <Lock
                  className={`w-12 h-12 ${
                    darkMode ? "text-red-400" : "text-red-600"
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
              Akses Tidak Diizinkan
            </h2>

            <p
              className={`text-lg sm:text-xl mb-8 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Maaf, Anda tidak memiliki izin untuk mengakses halaman ini.
              <br className="hidden sm:block" />
              Silakan login atau hubungi administrator untuk bantuan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/auth"
                className={`group inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg hover:shadow-red-500/25"
                    : "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg hover:shadow-red-500/25"
                }`}
              >
                <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Login Sekarang
              </Link>

              <button
                onClick={() => navigate(-1)}
                className={`group inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
                    : "bg-black/5 hover:bg-black/10 text-gray-800 backdrop-blur-md border border-gray-200"
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Kembali
              </button>
            </div>

            {/* Additional Help */}
            <div
              className={`mt-12 mb-4 p-6 rounded-2xl ${
                darkMode
                  ? "bg-white/5 backdrop-blur-md border border-white/10"
                  : "bg-white/60 backdrop-blur-md border border-gray-200"
              }`}
            >
              <div className="flex items-center justify-center mb-3">
                <AlertTriangle
                  className={`w-6 h-6 mr-2 ${
                    darkMode ? "text-yellow-400" : "text-orange-600"
                  }`}
                />
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Butuh Bantuan?
                </h3>
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Jika Anda yakin seharusnya memiliki akses ke halaman ini,
                silakan hubungi tim support kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error401Page;
