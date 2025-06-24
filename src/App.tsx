import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Versions from "./pages/versions/versions";
import BlogList from "./pages/blog/blogList";
import BlogPost from "./pages/blog/blogPost";
import Projects from "./pages/projects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/versions" element={<Versions />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};