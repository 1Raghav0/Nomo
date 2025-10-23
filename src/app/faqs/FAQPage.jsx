"use client";
import React, { useState } from "react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "General questions",
      items: [
        { question: "What is nomo?", answer: "nomo is a trading and copytrading platform." },
        { question: "How can I contact nomo customer support?", answer: "You can contact us via live chat or email." },
      ],
    },
    {
      category: "Trading and copytrading",
      items: [
        { question: "What assets can I trade on nomo?", answer: "You can trade forex, crypto, stocks, and more." },
        { question: "What is copytrading on nomo?", answer: "Copytrading allows you to automatically copy other traders' strategies." },
        { question: "Can I practice trading before investing real money?", answer: "Yes, you can use a demo account for practice." },
        { question: "How many types of accounts do you have in total?", answer: "We offer different account types suited to various traders." },
        { question: "In addition to spread, is there any additional trading commission charged for trading?", answer: "No additional commissions apply apart from the spread." },
        { question: "What is the maximum leverage ratio?", answer: "The maximum leverage ratio is 1:500." },
        { question: "How much is the stop-out level?", answer: "The stop-out level is 20%." },
      ],
    },
  ];

  // Filtered FAQs based on search term
  const filteredFaqs = faqs.map((section) => {
    const filteredItems = section.items.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...section, items: filteredItems };
  }).filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 md:px-8 lg:px-24 py-16 mt-20">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900">
        Frequently asked questions
      </h1>
      <p className="text-gray-500 text-sm mt-2 mb-8 text-center">
        Last updated May 2024
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-12">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* FAQ Sections */}
      <div className="w-full max-w-3xl">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {section.category}
              </h2>

              <div className="divide-y divide-gray-200">
                {section.items.map((item, index) => {
                  const isOpen = openIndex === `${sectionIndex}-${index}`;
                  return (
                    <div key={index}>
                      {/* Button */}
                      <button
                        onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
                        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                      >
                        <span className="text-gray-900 font-medium text-base md:text-lg">
                          {item.question}
                        </span>
                        <span
                          className={`text-2xl font-bold text-blue-600 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {/* Smooth Dropdown */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pb-4 text-gray-600 text-sm md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center text-lg mt-8">
            No results found for "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQPage;

