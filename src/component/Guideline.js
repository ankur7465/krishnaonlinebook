import React, { useState } from 'react';

const GuidelineCard = ({ logoUrl, title, description }) => {
  return (
    
    <div className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Logo Section */}
      {logoUrl && (
        <div className="mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
          <img src={logoUrl} alt="logo" className="w-12 h-15 mx-auto" />
        </div>
      )}

      {/* Title Section */}
      <h3 className="text-xl font-bold text-black mb-1">{title}</h3>

      {/* Description Section */}
      <p className="text-black">{description}</p>
    </div>
    
  );
};

const Guidelines = () => {
  return (
    <div className="bg-black">
        <h1 className="text-white text-center font-serif text-2xl ml-10"><mark>Krishna ji's Book is the best! Know why</mark></h1><br></br>
        <h2 className="text-white text-center font-serif ">"The success of our gaming and betting platform is rooted in its intuitive features, providing users with an immersive gaming experience and secure earnings."</h2>
      <div className="max-w-6xl mx-auto my-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-serif">
        <GuidelineCard
          logoUrl="/images/g1.webp"
          title="Extensive user base"
          description="At Krishnaji Book, user satisfaction is our top priority, and it's evident in our growing community of over 10 million active users who place their trust in our platform. This trust is built on the foundation of our seamless, secure betting services and a wide range of exciting betting options, all designed to offer the best experience possible."
        />
        <GuidelineCard
          logoUrl="/images/g3.avif"
          title="Safe and secure transactions"
          description="Safe payment methods offer peace of mind and elevate your overall betting experience. That's why our platform is dedicated to providing a secure and reliable transaction process, whether you're depositing or withdrawing funds. With Krishnaji Book ID, you can enjoy highly secure financial transactions, ensuring your money is always safe."
        />
        <GuidelineCard
          logoUrl="/images/g5.avif"
          title="24*7 Customer Support"
          description="We offer top-notch gaming support through our highly trained and dedicated team, who are always ready to resolve your queries. This ensures you can bet with complete peace of mind, knowing assistance is just a step away."
        />
        <GuidelineCard
          logoUrl="/images/g6.avif"
          title="Instant money withdrawal and Refill"
          description="Leveraging state-of-the-art technology, Mahadev Book offers users the convenience of instant money withdrawals and deposits. This feature plays a key role in earning the trust of our users, while enhancing their overall gaming experience with seamless and efficient transactions."
        />
        <GuidelineCard
          logoUrl="/images/g7.avif"
          title="Unlimited Money withdrawal"
          description="Winning is earning, and that's why we offer unlimited daily withdrawals on our platform. There are no restrictions, allowing our users to enjoy uninterrupted gameplay and withdraw their winnings freely."
        />
        <GuidelineCard
          logoUrl="/images/g8.webp"
          title="User-friendly Interface"
          description="We offer a highly user-friendly gaming platform that even beginners can navigate with confidence. Our website is designed to deliver an exceptional user experience, featuring cutting-edge graphics and intuitive navigation for seamless interaction."
        />
        <GuidelineCard
          logoUrl="/images/g9.jpg"
          title="Promotions and Bonuses"
          description="With us, you’ll enjoy a wide variety of promotions and bonuses that keep users engaged and satisfied. Our gaming platform offers exciting rewards and surprises, ensuring that players keep coming back for more."
        />
        <GuidelineCard
          logoUrl="/images/g10.webp"
          title="Considerable ID Options"
          description="We offer a diverse range of betting IDs, including those for online cricket, live events, casinos, gambling, and more. Our platform is designed to meet the varied expectations of all our users, ensuring a comprehensive and engaging experience."
        />
        <GuidelineCard
          logoUrl="/images/g11.webp"
          title="Live Betting"
          description="Live betting brings an exciting and dynamic experience, where every wager is placed in real-time, allowing you to adapt to ever-changing scenarios for maximum profit. It's a thrilling adventure that offers a rush no other form of betting can match!"
        />
        <GuidelineCard
          logoUrl="/images/g12.avif"
          title="Responsive Gaming"
          description="We prioritize responsive gaming by providing specialized tools and resources that help our users enjoy betting within safe limits. This encourages responsible behavior, ensuring a secure and enjoyable experience for everyone."
        />
      </div>
      <AccountCreationSteps/>
      <Accountstep/>
      <Benefits/>
      <Accountstep1/>
      {/* <PaymentOptionSlider/> */}
      <PaymentOptions/>
      <FaqSection/>

    </div>
  );
};

const AccountCreationSteps = () => {
    return (
      <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-10 font-serif">
        <h2 className="text-3xl font-bold text-center mb-6"><mark>How to Create Your Krishnaji Betting Account? </mark></h2>
  
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Begin with Krishnaji Book Website:</strong> Open your browser and visit the official website: <a href="https://mahadevbook.social" className="text-blue-400">mahadevbook.social</a>.</li>
          
          <li><strong>Click on “Sign Up” or “Create an Account”:</strong> Once on the homepage, find and click the "Sign Up" or "Create an Account" button.</li>
          
          <li><strong>Provide Necessary Information:</strong> Fill in your personal details like name, email, phone number, and date of birth. Complete the registration process.</li>
          
          <li><strong>Mahadev Book Account Login:</strong> After registration, log in with your newly created account using your login ID and password.</li>
          
          <li><strong>Verification Process:</strong> Check your email for a verification link, click on it to confirm your details and complete verification.</li>
          
          <li><strong>Set Your Preferences:</strong> Customize your account settings such as payment methods, language, and currency to suit your preferences.</li>
          
          <li><strong>Accept Terms and Conditions:</strong> Read and accept the terms and conditions to finalize your account creation.</li>
          
          <li><strong>Access Betting Options:</strong> Once the process is complete, you're all set to explore and enjoy a variety of betting options on our platform.</li>
        </ol>
        
        <p className="mt-4 text-center text-xl">Start your exciting betting journey with Krishna Book!</p>
      </div>
    
    );
  };
// accountstep

  const StepsCard = ({ step, title, description }) => {
    return (
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 "> <mark>{title}</mark></h3>
        <p className="text-lg">{description}</p>
      </div>
    );
  };

//   accountsetep
const Accountstep =()=>{
    return(
<div>
<div className="bg-black text-white p-6">
<h1 className=" text-center text-4xl text-bold">  <mark>How can you get Krishnaji ID?</mark></h1> <br></br>
<h2 className="text-center text-xl text-bold"> With 3 easy steps, you can get your ID and start gaming with us!</h2> <br></br>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
       
        {/* Step 1 */}
        <StepsCard 
          title="Step 1"
          description="Click on any of our 'Mahadev Book Online – Get Cricket ID' buttons located in multiple places on our web page."
        />
        
        {/* Step 2 */}
        <StepsCard 
          title="Step 2"
          description="Post clicking the button, you will be redirected to our WhatsApp chat, wherein you can fill in the necessary details to proceed with generating your ID."
        />
        
        {/* Step 3 */}
        <StepsCard 
          title="Step 3"
          description="Once the required details are received, your online cricket betting ID will be created which you can use to log in to certain websites and start with your betting journey."
        />
      </div>
    </div>
</div>
    )
};

// benifites and krishnaji online book
const Benefits = () => {
    return (
      <div className="bg-yellow-900 text-white p-6 font-serif">
        <h1 className=" text-center text-4xl font-serif font-bold">Benefits of Krishna Book</h1><br></br>
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-6">
            <h3 className="font-bold text-xl">Diverse Sports Betting Options</h3>
            <p>We offer a variety of betting options, including cricket, football, tennis, and more for an exciting experience.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-xl">Casino Gaming Options</h3>
            <p>Enjoy games like Blackjack, Teen Patti, Keno, and more, with rewards and bonuses.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-xl">Security & Licensing</h3>
            <p>Your safety is our priority, with secure transactions and data protection measures in place.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-xl">Krishna Book Verdict</h3>
            <p>We are the most preferred platform for users looking for a secure, dependable betting experience with continuous innovation.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-xl">Bonuses and Promotions</h3>
            <p>Join us and receive bonuses like welcome offers, free bets, and event-specific promotions.</p>
          </div>
  
        </div>
      </div>
    );
  };

//    how to betting in Krishna ji online book
const StepsCard1 = ({ step, title, description }) => {
  return (
    <div className="bg-black text-white p-6 border-2 border-blue-500 animate-border-glow scale-110 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-center "> {title}  </h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

const Accountstep1 =()=>{
  return(
<div>
<div className="bg-black text-white p-6 font-serif ">
<h1 className=" text-center text-4xl text-bold">  <mark>How to get on with Betting at Mahadev Book?</mark></h1> <br></br>
<h2 className="text-center text-xl text-bold"> The process is so simple that a new user with zero prior experience can also start betting with us easily by below given simple steps:</h2> <br></br>
    <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
     
      {/* Step 1 */}
      <StepsCard1 
        title="Sign in to your Mahadev Book account"
        description="Click on any of our 'Mahadev Book Online – Get Cricket ID' buttons located in multiple places on our web page."
      />
      
      {/* Step 2 */}
      <StepsCard1 
        title="Choose from multiple sports and gaming options"
        description="You can choose your desired sports from multiple options such as cricket, basketball, football, tennis, etc for popular gaming choices although many other options are available to satisfy every sport-loving user."
      />
      
      {/* Step 3 */}
      <StepsCard1 
        title="Select the desired sports event"
        description="After zeroing in on the desired sports, you can move further to select a cricket or football match, an intense basketball battle, or a pulsating horse racing event, choose any that matches your taste of sports and pick up your interest."
      />
      <StepsCard1 
        title="Choose the odds of the game"
        description="In this step, you are required to choose your odds. No worries, as we offers interesting odds in all events which help you in making conscious decisions and increase your chances of winning."
      />
      <StepsCard1 
        title="Fix your Wager amount"
        description="Once you select your odds, it is time to decide your Wager amount. You can play big with large sums or go slow and steady with smaller amounts, Krishnaji’s features allow you to adjust your wager amount according to your preferences.."
      />
      <StepsCard1 
        title="Place The Bet"
        description="Once you have finalized your wager amount, you can proceed further to place your bet and start your betting by simply reviewing your selections and confirming the bet. Now sit back and enjoy the rush of adrenaline as the event starts unfolding."
      />
    </div>
  </div>
</div>
  )
};


// faq section in website 
const faqs = [
  {
    question: "How to create a betting ID in Krishna Book?",
    answer:
      "Creating an ID with us is a very simple process. Just visit our website and locate the “Sign Up” button. Click on it, and fill in the registration form with some basic information. Follow the given instructions on the screen, agree to the terms and conditions, and your Mahadev Book ID will be created",
  },
  {
    question: "What is the minimum amount required for betting?",
    answer:
      "You can get all the required details regarding the deposit amount for betting by simply contacting our customer support whose details are mentioned on the web page.",
  },
  {
    question: "Is Krishna a safe gaming and betting platform?",
    answer:
      " Our platform abides by the legal frameworks, adhering to all relevant laws and regulations. We have collaborations with licensed and esteemed betting providers, thereby creating a secure and safe environment for our users..",
  },
  {
    question: "What kind of bets I can place on Krishna Book?",
    answer:
      "Here at this place, we provide a wide range of betting options, covering pre-match, live, outright, and prop bets. Bettors can wager on numerous game aspects such as match outcomes, leading run-scorers, and highest wicket-takers.",
  },
  {
    question: "How does Krishna book work?",
    answer:
      "Mahadev Online Betting is platform that allows users to wager on various sports events, including cricket, football, and more. The platform operates by offering odds on different outcomes of sporting events, and users can place bets on their predictions.",
  },
  {
    question: "Is Krishna book legal?",
    answer:
      "In terms of legality, Mahadev Book operates in compliance with applicable laws and regulations. It holds the necessary licenses and approvals required to operate as a legal online betting platform.",
  },
  {
    question: "What is Krishna book online?",
    answer:
      "Mahadev Book Online is a platform that provides an easy and safe way for users to engage in online betting. It offers a wide range of betting options, competitive odds, and a user-friendly interface for an enhanced betting experience.",
  },
  {
    question: "How do I contact Krishna bet?",
    answer:
      "To get in touch with them, visit their website and find the contact information. They usually present an email, a form or a chat for customer questions.",
  },
  {
    question: "What can I bet on at Krishna Online?",
    answer:
      "Krishna Online provides several betting options for games like cricket, football, tennis, basketball among others. Additionally they offer wagers on political elections as well as entertainment award shows etcetera. Depending on where you are located and what time of year it is there could be particular events that are open for bets more than others",
  },
];

const FaqCard = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-3 transition-all duration-300 font-serif">
      <button
        className="w-full flex justify-between items-center text-lg font-semibold"
        onClick={toggle}
      >
        {question}
        <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <p className="mt-2  text-black bg-white">{answer}</p>}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-yellow-700">
      <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FaqCard
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          toggle={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
};

//  payment option in wbesite 
const PaymentOptions = () => {
  const options = [
    { id: 1, image: "images/p1.png", name: "Paytm", link: "https://paytm.com" },
    { id: 2, image: "images/p.jpeg", name: "Google Pay", link: "https://pay.google.com" },
    { id: 3, image: "images/p2.png", name: "PhonePe", link: "https://www.phonepe.com" },
    { id: 4, image: "images/p3.jpeg", name: "Visa", link: "#" },
    { id: 5, image: "images/p4.png", name: "MasterCard", link: "#" },
    { id: 6, image: "images/p5.png", name: "UPI", link: "#" },
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
    </div>
    
  );
};


export default Guidelines;
