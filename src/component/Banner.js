import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img src="/images/bg_main.jpg" alt="Description" className="w-full h-screen object-cover flex mr-4 " />

      {/* Content */}
      <div className="relative z-10 bg-black text-white py-16 px-8 flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to Krishnaji Online Book</h1>
          <p className="text-lg mb-6">
            <h2>Welcome to Krishna Book: The ultimate game-changer of the Indian betting world!</h2>
          </p>
          <p>
            Experience the Ultimate Betting Platform with Krishna Book!
            <br />
            Betting is all about strategy, precision, and maximizing profits. Krishna Book is your trusted gateway to the world of legal online betting, providing a highly secure and seamless betting experience.
            <br />
            As a leading online betting ID provider, we offer access to top gambling platforms in India, ensuring you get the best betting IDs with unparalleled security and convenience.
          </p>
          <br />
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md mt-4">
            Get Online Cricket Ticket ID
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="/images/imag.jpg" alt="Banner" className="w-full md:w-3/4 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
