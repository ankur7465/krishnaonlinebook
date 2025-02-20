import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoginForm) {
      window.location.href = "https://wa.me/919876543210"; // Replace with your WhatsApp number
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white px-4 py-3 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src="/images/logo4.jpg" alt="Logo" className="h-12 w-16 ml-28 cursor-pointer"
          onClick={() => window.open("https://wa.me/917465984577", "_blank")} />
          <Link to="https://wa.me/919876543210" className="text-xl font-bold hover:text-gray-300 transition mr-96">
            Krishnaji Online Book
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center mr-12">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
            <Link to="/blog" className="hover:text-gray-300 transition">Blog</Link>
            <button
              onClick={() => setIsLoginVisible(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md transition"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 shadow-lg">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
            <Link to="/blog" className="hover:text-gray-300 transition">Blog</Link>
            <button
              onClick={() => {
                setIsLoginVisible(true);
                setIsMenuOpen(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md transition"
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Login Form Modal */}
      {isLoginVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
            <button
              onClick={() => setIsLoginVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-center text-black mb-4">
              {isLoginForm ? "Login" : "Register"}
            </h2>
            <button
              onClick={() => setIsLoginForm(!isLoginForm)}
              className="text-blue-600 hover:text-blue-700 transition text-sm text-center block w-full mb-4"
            >
              {isLoginForm ? "Don't have an account? Register" : "Already have an account? Login"}
            </button>
            <form onSubmit={handleSubmit}>
              {!isLoginForm && (
                <div className="mb-3">
                  <label className="block text-gray-700">Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Full Name" required />
                </div>
              )}
              <div className="mb-3">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" placeholder="Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full p-2 border rounded-md" placeholder="Password" required />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                {isLoginForm ? "Login" : "Register"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
