import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative w-full h-screen">
      <div
  className="cursor-pointer"
  onClick={() => window.open("https://wa.me/917465984577", "_blank")}
>
  <img
    src="/images/bg_main.jpg"
    alt="Background"
    className="w-full h-full object-cover"
  />
</div>

        

        {/* Overlay with Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 px-4 mt-11">
          <h1 className="text-4xl md:text-5xl font-bold mt-60 cursor-pointer"
           onClick={() => window.open("https://wa.me/917465984577", "_blank")}>Krishnaji Online Book</h1><br></br>
          <div>
          <img
           onClick={() => window.open("https://wa.me/917465984577", "_blank")}
          src="/images/logo4.jpg"
          alt="Background"
          className="h-16 w-16 cursor-pointer "
        />
          </div>
          <button
            onClick={() => window.open("https://wa.me/917465984577", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition duration-300 mt-10"
          >
            Get Online Cricket Ticket ID
          </button>
        </div>
        <WhatsAppButton/>
      </div>

      {/* Content Section */}
      <div className="relative z-10 bg-black text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Krishnaji Online Book
          </h1>
          <p className="text-lg mb-6 font-semibold">
            Welcome to Krishna Book: The ultimate game-changer of the Indian betting world!
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Experience the Ultimate Betting Platform with Krishna Book! Betting is all about
            strategy, precision, and maximizing profits. Krishna Book is your trusted gateway
            to the world of legal online betting, providing a highly secure and seamless experience.
            <br />
            As a leading online betting ID provider, we offer access to top gambling platforms
            in India, ensuring you get the best betting IDs with unparalleled security and convenience.
          </p>
          <button
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md mt-6 transition duration-300"
          >
            Get Online Cricket Ticket ID
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 cursor-pointer"
        onClick={() => window.open("https://wa.me/919876543210", "_blank")}
        >
          <img src="/images/imag.jpg" alt="Banner" className="w-full md:w-3/4 rounded-lg shadow-lg" />
        </div>
      </div>
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


export default Banner;
