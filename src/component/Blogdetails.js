import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "What is an Online Betting ID and Why Is It Required?",
    content:
      "As the world of online betting continues to grow in popularity, the need for an online betting ID has become standard for any devotee within...",
    date: "February 18, 2025",
    image: "images/game1.jpg",
  },
  {
    id: 2,
    title:
      "Exploring the Pros and Cons of Online Sports Betting: Insights From Mahadev Book",
    content:
      "Online sports betting has come a long way from being merely a sports accompaniment to becoming a mainstream entertainment...",
    date: "February 16, 2025",
    image: "images/c3.jpg",
  },
  {
    id: 3,
    title:
      "Breaking Down the Odds with Mahadev Book: A Beginner’s Guide to Online Sports Betting",
    content:
      "Introduction: Krishna Book’s Online sports betting is an interesting aspect of the Betting and gambling world...",
    date: "February 14, 2025",
    image: "images/c1.webp",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-4xl font-bold">Blog Not Found</h2>
        <Link
          to="/"
          className="text-blue-500 text-lg underline hover:text-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white py-10">
      <div className="container mx-auto px-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mt-6">{blog.title}</h1>
        <p className="text-gray-400 text-sm mt-2">{blog.date}</p>
        <p className="text-lg mt-4">{blog.content}</p>

        <div className="mt-6">
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-all duration-300"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
