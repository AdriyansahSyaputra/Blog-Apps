import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/client/HomePage";
import PostPage from "./pages/dashboard/PostPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import CommentPage from "./pages/dashboard/CommentPage";
import ContactPage from "./pages/client/ContactPage";
import ArticlesPage from "./pages/client/ArticlesPage";
import AboutPage from "./pages/client/AboutPage";
import HomeDashboardPage from "./pages/dashboard/HomeDashboardPage";
import UserPage from "./pages/dashboard/UserPage";
import CategoriesPage from "./pages/dashboard/CategoriesPage";
import AuthPage from "./pages/auth/AuthPage";
import AddPostPage from "./pages/dashboard/Add-Post";
import AddUserPage from "./pages/dashboard/Add-User";

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<HomeDashboardPage />} />
        <Route path="/dashboard/posts" element={<PostPage />} />
        <Route path="/dashboard/users" element={<UserPage />} />
        <Route path="/dashboard/categories" element={<CategoriesPage />} />
        <Route path="/dashboard/comments" element={<CommentPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/posts/new" element={<AddPostPage/>} />
        <Route path="/dashboard/users/new" element={<AddUserPage/>} />
        

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
