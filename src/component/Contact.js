import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // WhatsApp Redirect
    const phoneNumber = "+919876543210"; // Replace with your WhatsApp number
    const message = `Hello, my name is ${formData.name}. My email is ${formData.email}. Here is my message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Clear form fields after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen py-10 font-serif">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-6 mt-14">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows="4"
                  className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-all"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Details and Map */}
          <div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
              {/* <p className="text-gray-300 mb-2">
                📍 Location: Chandigarh University, Punjab, India
              </p> */}
              <p className="text-gray-300 mb-2">📧 Email: krishnaonline@gmail.com</p>
              <p className="text-gray-300">📞 Phone: +91 98765 43210</p>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.392841477127!2d76.5793343752695!3d30.767297089047675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedec8b3ed5e1%3A0xb6a832f7c8e4b949!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1649217449941!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton/>
    </div>
  );
};

const WhatsAppButton = () => {
    return (
      <div className="fixed bottom-5 right-5 z-50 items-center space-x-2">
           
        <a
          href="https://wa.me/919876543210" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
     
          <FaWhatsapp size={30} className="mr-2" /> 
          <span className="font-semibold">Get Online Ticket</span>
        </a><br></br>
        <div>
        <a
          href="https://wa.me/919876543210" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
     
          <FaWhatsapp size={30} className="mr-2" /> 
          <span className="font-semibold">Get Online Ticket</span>
        </a>
        </div>
      </div>
    );
  };

export default Contact;
