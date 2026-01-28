import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Post from "./pages/Post";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ maxWidth: "max", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
      </main>
    </BrowserRouter>
  );
}

export default App;
