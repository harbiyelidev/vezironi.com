
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

export default function App() {

  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};