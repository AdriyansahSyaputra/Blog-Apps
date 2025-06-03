import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client/Home";
import Articles from "./pages/client/Articles";
import About from "./pages/client/About";
import HomeDashboard from "./pages/dashboard/HomeDashboard";
import Contact from "./pages/client/Contact";
import Post from "./pages/dashboard/Post";
import User from "./pages/dashboard/User";

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/dashboard/posts" element={<Post />} />
        <Route path="/dashboard/users" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
