"use client";

import { useState } from "react";

export default function ProblemsSection() {
  const [activeTab, setActiveTab] = useState("problem");

  const problems = [
    {
      icon: "💻",
      title: "Complex platforms",
      desc: "Too many features overwhelm users.",
    },
    {
      icon: "🛠️",
      title: "Limited access to advanced tools",
      desc: "Professional tools should be available to all.",
    },
    {
      icon: "💰",
      title: "Barriers to passive income",
      desc: "Copytrading should be easy for everyone.",
    },
    {
      icon: "🎓",
      title: "Lack of practical education",
      desc: "Traders need clear, actionable resources.",
    },
    {
      icon: "🌍",
      title: "Neglected emerging markets",
      desc: "We cater to regions like Latin America.",
    },
    {
      icon: "📱",
      title: "Poor mobile experience",
      desc: "Mobile trading should be seamless and powerful.",
    },
  ];

  const solutions = [
    {
      icon: "⚙️",
      title: "Simplified user interface",
      desc: "Designed for clarity and usability.",
    },
    {
      icon: "🔓",
      title: "Access for all",
      desc: "Everyone gets access to powerful tools.",
    },
    {
      icon: "📈",
      title: "Automated income systems",
      desc: "Seamless copytrading experience.",
    },
    {
      icon: "📚",
      title: "Hands-on learning",
      desc: "Learn trading with practical examples.",
    },
    {
      icon: "🌐",
      title: "Localized platforms",
      desc: "Supporting emerging markets worldwide.",
    },
    {
      icon: "🚀",
      title: "Powerful mobile app",
      desc: "Trade anywhere, anytime.",
    },
  ];

  const content = activeTab === "problem" ? problems : solutions;

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        Problems <span className="text-blue-600">we solve:</span>
      </h2>

      {/* Toggle Tabs */}
      <div className="flex justify-center mb-14">
        <div className="bg-gray-100 rounded-xl p-1 flex">
          <button
            onClick={() => setActiveTab("problem")}
            className={`px-8 py-3 rounded-lg font-medium transition-all ${
              activeTab === "problem"
                ? "bg-white shadow text-black"
                : "text-gray-500"
            }`}
          >
            Problem
          </button>
          <button
            onClick={() => setActiveTab("solution")}
            className={`px-8 py-3 rounded-lg font-medium transition-all ${
              activeTab === "solution"
                ? "bg-white shadow text-black"
                : "text-gray-500"
            }`}
          >
            Solution
          </button>
        </div>
      </div>

      {/* Larger Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-3xl p-10 text-left hover:shadow-xl transition-all min-h-[220px] flex flex-col justify-center"
          >
            <div className="text-5xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
