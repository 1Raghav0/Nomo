
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LeadTrader = () => {
  const [activeTab, setActiveTab] = useState("Research");

  const tabs = [
    {
      name: "Research",
      title: "Research",
      description:
        "As a lead trader, you will oversee the market, research instruments, and stay updated on news that impacts your trades.",
      img: "./imag-5.avif",
    },
    {
      name: "Market and Instruments",
      title: "Market and Instruments",
      description:
        "Understand various financial instruments, evaluate market trends, and determine which assets align with your strategy.",
      img: "https://cdn-icons-png.flaticon.com/512/921/921591.png",
    },
    {
      name: "Interact",
      title: "Interact",
      description:
        "Collaborate with other traders, share insights, and make informed decisions based on team discussions and data.",
      img: "https://cdn-icons-png.flaticon.com/512/3271/3271009.png",
    },
  ];

  const activeContent = tabs.find((t) => t.name === activeTab);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between mx-auto p-6 md:px-16 lg:px-24 space-y-6 md:space-y-0 md:space-x-8">
      {/* Left Side */}
      <div className="w-full md:w-1/3 flex flex-col space-y-3">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`text-left text-2xl px-3 py-2 border-b ${
              activeTab === tab.name
                ? "text-blue-600 font-semibold border-blue-600"
                : "text-gray-500 border-transparent hover:text-blue-500"
            }`}
          >
            {tab.name}
          </button>
        ))}

        <div className="mt-6 space-y-3">
          <button className="flex items-center space-x-2 text-lg">
            <span>🔑</span>
            <span>Start trading now</span>
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Become a lead trader
          </button>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
  key={activeContent.name}
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="w-full md:w-2/3 bg-gray-50 rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
>
  <img
    src={activeContent.img}
    alt={activeContent.title}
    className="w-48 h-48 object-contain"
  />
  <div className="py-10">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {activeContent.title}
    </h3>
    <p className="text-gray-500 text-sm md:text-base">
      {activeContent.description}
    </p>
  </div>
</motion.div>

    </div>
  );
};

export default LeadTrader;
