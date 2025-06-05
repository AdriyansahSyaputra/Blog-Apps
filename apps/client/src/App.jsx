import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/client/HomePage";
import About from "./pages/client/About";
import HomeDashboard from "./pages/dashboard/HomeDashboard";
import Post from "./pages/dashboard/Post";
import User from "./pages/dashboard/User";
import Categories from "./pages/dashboard/Categories";
import SettingsPage from "./pages/dashboard/Settings";
import CommentPage from "./pages/dashboard/CommentPage";
import ContactPage from "./pages/client/ContactPage";
import ArticlesPage from "./pages/client/ArticlesPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/dashboard/posts" element={<Post />} />
        <Route path="/dashboard/users" element={<User />} />
        <Route path="/dashboard/categories" element={<Categories />} />
        <Route path="/dashboard/comments" element={<CommentPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
