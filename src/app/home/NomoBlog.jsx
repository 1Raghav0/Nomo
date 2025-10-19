// src/components/NomoBlog.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "News",
    subcategory: "Investing • 2 mins",
    title: "Latin America’s rise as a smart investment hub 🌎🔥",
    description:
      "Latin America is emerging as a prime destination for strategic investors, offering currency advantages, high-growth markets, and unique opportunities.",
    color: "bg-purple-100 text-purple-700",
    image: "./blog-1.avif", // replace with your real image
  },
  {
    id: 2,
    category: "Copytrading",
    subcategory: "Trading • 3 mins",
    title:
      "Best investment strategies: AI Index, copytrading, or trading on your own? 🤖",
    description:
      "Compare the top investment strategies of 2025: AI-powered portfolios, and active trading. Learn how each method works, who it's best for, and their performance.",
    color: "bg-orange-100 text-orange-700",
    image: "./blog-2.avif",
  },
  {
    id: 3,
    category: "Tools",
    subcategory: "Investing • 2 mins",
    title:
      "How to protect your wealth in 2025: Gold, silver, and other safe haven assets 🛡️",
    description:
      "Worried about market instability in 2025? Learn how gold, silver, and strong currencies can protect your money, and how nomo helps you invest safely.",
    color: "bg-yellow-100 text-yellow-700",
    image: "./blog-3.avif",
  },
];

export default function NomoBlog() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-blue-600">nomo</span> Blog: expert tips,
            market insights, and exciting updates
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-56 bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${post.color}`}
                  >
                    {post.category}
                  </span>
                  <p className="text-sm text-gray-500">{post.subcategory}</p>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {post.description}
                </p>

                <button className="mt-4 flex items-center text-blue-600 font-semibold hover:underline">
                  Continue reading <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show all button */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-16 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Show all
          </button>
        </div>
      </div>
    </section>
  );
}
