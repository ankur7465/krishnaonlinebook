import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "What is an Online Betting ID and Why Is It Required?",
      excerpt: "As the world of online betting continues to grow in popularity, the need for an online betting ID has become standard for any devotee within.",
      date: "February 18, 2025",
      image: "images/game1.jpg",
    },
    {
      id: 2,
      title: "Exploring the Pros and Cons of Online Sports Betting: Insights From Mahadev Book ",
      excerpt: "Online sports betting has come a long way from being merely a sports accompaniment to becoming a mainstream entertainment, it has gone through many transformations!",
      date: "February 16, 2025",
      image: "images/c3.jpg",
    },
    {
      id: 3,
      title: "Breaking Down the Odds with Mahadev Book: A Beginner’s Guide to Online Sports Betting",
      excerpt: "Introduction: Krishna Book’s Online sports betting is an interesting aspect of the Betting and gambling world. This enchanting part of betting has a lot of excitement",
      date: "February 14, 2025",
      image: "images/c1.webp",
    },
    {
      id: 4,
      title: "Krishna Book: The IPL 2025 Online Betting Guide for Mastering the Betting Pitch",
      excerpt: "Scalability is crucial for web apps. This article discusses how to build scalable applications.",
      date: "February 12, 2025",
      image: "images/c.jpg",
    },
    {
        id: 5,
        title: "Gear Up for IPL 2025 with Mahadev Book: Your Ultimate Betting ID Destination",
        excerpt: "The entire cricketing world is rigorously preparing to keep up with another fast-paced mind-blowing season of the Indian Premier League (IPL) and so are we",
        date: "February 12, 2025",
        image: "images/c5.jpg",
      },
      {
        id: 6,
        title: "Want To Bet On Cricket? Check Out Mahadev’s Book! The Biggest Provider Of Online Sports Betting Ids! ",
        excerpt: "Online betting is a vast terrain where platforms like Krishna Book can turn any betting game into a thrill of anticipation and an allure of",
        date: "January 12, 2025",
        image: "images/bg_main.jpg",
      },
      {
        id: 7,
        title: "Master Odds with Krishna Book – Cricket Betting ID Strategy Guide",
        excerpt: "Cricket Betting ID Guide – Master Odds with Krishna  Book Discover the pivotal role of bookmakers in sports betting & master the odds with Mahadev",
        date: "February 12, 2025",
        image: "images/bg_main.jpg",
      },
      {
        id: 8,
        title: "let's play the sports game in krishna book store .step by step guide the game ",
        excerpt: "Krishna Book : Top Trusted Online Betting ID in India Introduction In the ever-changing world of online entertainment and leisure, one name shines brightly –",
        date: "February 12, 2025",
        image: "images/game5.jpg",
      },
      {
        id: 9,
        title: "Krishna  Book: Your Ultimate Online Cricket Betting ID Provider",
        excerpt: "Get your premier Online Cricket Betting ID with Krishna Book! Secure, easy, & the top choice for cricket betting enthusiasts. Bet smart, win big! Delve",
        date: "February 12, 2025",
        image: "images/c6.jpeg",
      },
      {
        id: 10,
        title: "Master Odds with Krishna Book – Cricket Betting ID Strategy Guide",
        excerpt: "Cricket Betting ID Guide – Master Odds with Krishna Book Discover the pivotal role of bookmakers in sports betting & master the odds with Mahadev",
        date: "February 12, 2025",
        image: "images/c4.webp",
      },
  ];

  return (
    <div className="bg-black min-h-screen py-10 font-serif">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10 mt-11">
        Our Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden group relative transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-4">
                {blog.excerpt}
              </p>
              <span className="text-gray-400 text-sm">{blog.date}</span>

              {/* Read More Button */}
              <div className="mt-4">
                <Link
                  to={`/blog/${blog.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-all duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Blog;
