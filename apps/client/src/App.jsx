import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client/Home";
import Articles from "./pages/client/Articles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
