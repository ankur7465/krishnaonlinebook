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
        {/* Navbar should be outside of Routes to appear on all pages */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blogdeatils />} />
        </Routes>

        {/* Footer */}
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
