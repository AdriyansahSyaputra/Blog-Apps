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
import AddPostPage from "./pages/dashboard/AddPostPage";
import AddUserPage from "./pages/dashboard/AddUserPage";
import ArticleReaderPage from "./pages/client/ArticleReaderPage";
import AuthorRequestPage from "./pages/client/AuthorRequestPage";
import UserRequestsPage from "./pages/dashboard/UserRequestPage";
import Error404Page from "./pages/Error404Page";
import Error401Page from "./pages/Error401Page";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes / Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/articles/:slug" element={<ArticleReaderPage />} />

        <Route element={<ProtectedRoute allowedRoles={["viewer"]} />}>
          <Route path="/write-for-us" element={<AuthorRequestPage />} />
        </Route>

        {/* Dashboard Routes / Private Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/dashboard" element={<HomeDashboardPage />} />
          <Route path="/dashboard/users" element={<UserPage />} />
          <Route path="/dashboard/categories" element={<CategoriesPage />} />
          <Route path="/dashboard/comments" element={<CommentPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/dashboard/users/new" element={<AddUserPage />} />
          <Route
            path="/dashboard/authors/request"
            element={<UserRequestsPage />}
          />
        </Route>

        {/* Only Author & Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={["author", "admin"]} />}>
          <Route path="/dashboard/posts" element={<PostPage />} />
          <Route path="/dashboard/posts/new" element={<AddPostPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Error Routes */}
        <Route path="*" element={<Error404Page />} />
        <Route path="/unauthorized" element={<Error401Page />} />
      </Routes>
    </Router>
  );
}

export default App;
