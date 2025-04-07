import React from "react";
import { FaGamepad, FaUsers, FaShieldAlt, FaMoneyBillWave, FaTrophy } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen py-10 font-serif">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-6 mt-28 animate-bounce">
          Krishnaji Online Book - #1 Online Betting ID Provider
        </h1>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          Your premier destination in India for secure and reliable online betting IDs. 
          Enjoy seamless sports betting and casino gaming with ease.
        </p>

        {/* Our Mission */}
        <div className="bg-black p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-3xl font-semibold mb-3 flex items-center ">
            <FaShieldAlt className="mr-3 text-blue-500 text-center" /> Our Mission
          </h2>
          <p className="text-gray-300 text-2xl text-center mb-2">
        <mark>  Krishna Online Book Is the #1 Online IDs Provider</mark>
          </p>
          <p className="text-gray-300 text-2xl mt-2">
            
            Krishna Online Book - Your Premier Destination in India for Secure and Reliable Online Betting IDs
            
          </p><br></br>
          <p> Krishna Online Book primarily caters to Indian players, but individuals residing in countries where online gambling and betting are legal can also explore the platform. With a rapidly expanding audience surpassing 10 million users, Mahadev Book is gaining traction. Here are some essential insights about this website to consider before signing up.<br></br><br></br>

</p>
<p>
We’re proud to partner with some of the most reputable and widely recognized exchanges in the industry.<br></br><br></br>

You’ll find a comprehensive selection of major sports games, including cricket, tennis, football, table tennis, basketball, volleyball, and many others.<br></br>
Our live casino boasts over 500+ thrilling games, ranging from classics like baccarat, teenpatti, roulette, and poker to exciting options like Lucky7 and Dragon Tiger.<br></br>
Easy Deposit And Withdrawal.<br></br>
Refer Your Friends And Get Benefits<br></br>
</p><br></br>
<p>We share your passion for sports and games, and our team thrives on the excitement of competition. Positioned proudly as one of India’s leading online betting platforms, Mahadev Book is tailored to be your ultimate destination for seamless and enjoyable sports betting. Our mission is crystal clear – we aim to demystify online sports betting and inject it with accessible excitement for all. No convoluted terminology or bewildering rules here; just a secure and welcoming space for you to bet on your favorite sports and events.</p>
        </div>
        <PaymentOptions/>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaGamepad className="text-4xl text-yellow-500" />}
            title="Diverse Gaming Options"
            description="Enjoy 500+ live casino games, sports betting on cricket, football, tennis, and more."
          />
          <FeatureCard
            icon={<FaMoneyBillWave className="text-4xl text-green-500" />}
            title="Easy Deposits & Withdrawals"
            description="Instant transactions with secure payment options for a hassle-free experience."
          />
          <FeatureCard
            icon={<FaUsers className="text-4xl text-blue-500" />}
            title="10M+ Active Users"
            description="Trusted by millions, growing daily with a strong reputation in online betting."
          />
          <FeatureCard
            icon={<FaTrophy className="text-4xl text-purple-500" />}
            title="Exciting Rewards"
            description="Refer friends and earn benefits while enjoying exclusive promotions and bonuses."
          />
        </div>

        {/* Why Choose Mahadev Book */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg mt-10">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaUsers className="mr-3 text-yellow-500" /> Why Choose Krishna Online Book?
          </h2>
          <ul className="list-disc pl-5 text-gray-300">
            <li>🚀 **Premier Online Betting Platform** – Trusted by players across India.</li>
            <li>🎮 **Extensive Sports Selection** – Bet on cricket, football, tennis, and more.</li>
            <li>💰 **Secure Transactions** – Fast and reliable payment methods.</li>
            <li>🎁 **Exclusive Promotions** – Referral bonuses, cashback, and special offers.</li>
            <li>🔧 **24/7 Customer Support** – Always available to assist you.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold mb-4">📞 Join Krishna Online Book Today!</h2>
          <p className="text-gray-300 mb-2">📍 **Location:** India (Serving legally allowed regions)</p>
          <p className="text-gray-300 mb-2">📧 **Email:** support@mahadevbook.com</p>
          <p className="text-gray-300">📞 **Phone:** +91 98765 43210</p>
          <a 
            href="https://wa.me/919876543210" 
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-all mt-4 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Your Online Betting ID
          </a>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-center mt-4">{title}</h3>
      <p className="text-gray-300 text-center mt-2">{description}</p>
    </div>
  );
};

// Payment option 
const PaymentOptions = () => {
    const options = [
      { id: 1, image: "images/p1.png", name: "Paytm", link: "https://paytm.com" },
      { id: 2, image: "images/p.jpeg", name: "Google Pay", link: "https://pay.google.com" },
      { id: 3, image: "images/p2.png", name: "PhonePe", link: "https://www.phonepe.com" },
      { id: 4, image: "images/p3.jpeg", name: "Visa", link: "#" },
      { id: 5, image: "images/p4.png", name: "MasterCard", link: "#" },
     
    ];
  
    return (
      <div>
         <div>
              <h1 class="text-white font-serif bg-black text-center mt-10 text-2xl">
              <mark>Payment Options for Deposits and Withdrawals</mark>
              </h1>
              <h3 className="text-white font-serif bg-black text-center mt-4 ">
              Easy and secure financial transactions are the core of an online betting platform. We at Mahadev Book, strive to give you a worry-free gaming and betting experience by ensuring smooth deposits and withdrawals by implementing modern, secure technologies and payment modes. You can choose from online payment options such as PhonePe, Google Pay, credit cards, debit cards, Visa, MasterCard, PayTM, and E-wallets for convenient transactions. Our technically advanced website reflects payments, deposits, and withdrawals immediately, eliminating any concerns for faulty transactions and sufficiently managing your precious funds.
              </h3>
            </div>
      <div className="flex flex-wrap justify-center space-x-4 p-4 bg-black-100 rounded-lg mt-10 mb-10">
    
        {options.map((option) => (
          <a key={option.id} href={option.link} target="_blank" rel="noopener noreferrer">
           
            <img src={option.image} alt={option.name} className="w-36 h-20 mx-5 hover:scale-110 transition duration-300" />
          </a>
        ))}
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

export default AboutUs;
