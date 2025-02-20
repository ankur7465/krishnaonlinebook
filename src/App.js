import AboutUs from "./component/About";
import Fotter from "./component/Fotter";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Blog from "./component/blog";
import Navbar from "./component/Navbar";
import Blogdeatils from "./component/Blogdetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blogdeatils />} />
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
