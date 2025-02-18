import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLoginToggle = () => {
    console.log("Login Toggle Clicked");
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <div>
      <nav className="bg-black text-white px-4 py-3 shadow-md fixed top-0 left-0 w-full z-50 font-serif">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold hover:text-gray-300 transition-colors">
            Krishnaji Online Book
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
            <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
            <button
              onClick={handleLoginToggle}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Login
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Login/Register Form */}
      {isLoginVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-black mb-6">
              {isLoginForm ? "Login" : "Register"}
            </h2>

            <div className="text-center mb-6">
              <button
                onClick={handleToggleForm}
                className="text-blue-600 hover:text-blue-700 transition-colors mx-2"
              >
                {isLoginForm ? "Don't have an account? Register" : "Already have an account? Login"}
              </button>
            </div>

            {isLoginForm ? (
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input type="email" id="email" className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input type="password" id="password" className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors">
                  Login
                </button>
              </form>
            ) : (
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input type="text" id="name" className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your full name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input type="email" id="email" className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input type="password" id="password" className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors">
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
