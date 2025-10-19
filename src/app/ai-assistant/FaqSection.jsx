"use client";
import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Where do I start with nomo?" },
    { question: "How many assets are available at nomo?" },
    { question: "How can I reach out to the support team?" },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 py-12 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl
      lg:4xl font-semibold text-gray-900">
        Frequently asked questions
      </h2>


      {/* FAQ Grid */}
      <div className="mt-10 grid gap-1 max-w-xl mx-auto">
        {[leftFaqs, rightFaqs].map((column, colIndex) => (
          <div key={colIndex}>
            {column.map((faq, index) => {
              const globalIndex =
                colIndex === 0 ? index : index + leftFaqs.length;

              return (
                <div
                  key={globalIndex}
                  className="border-b border-gray-300 pb-3 mb-6 text-left cursor-pointer transition-all duration-300"
                  onClick={() => handleToggle(globalIndex)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg text-gray-900 font-medium">
                      {faq.question}
                    </h3>
                    <span className="text-blue-600 text-2xl font-bold select-none">
                      {openIndex === globalIndex ? "−" : "+"}
                    </span>
                  </div>

                  {/* Animated answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === globalIndex
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer tincidunt vitae lorem vel vehicula.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
        Try nomo autocopy
      </button>
    </section>
  );
};

export default FaqSection;
