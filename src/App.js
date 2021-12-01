import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./Home/ProjectDetails/ProjectDetails";
import Home from "./Home/Home/Home";
import Blogs from "./Home/Blogs/Blogs";
import Particles from "react-particles-js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
