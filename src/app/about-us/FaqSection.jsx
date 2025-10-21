"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is nomo suitable for beginners?",
      answer:
        "Absolutely! Nomo is designed for both beginners and experienced traders. Our intuitive interface and educational resources help you start trading confidently.",
    },
    {
      question: "How does copytrading work on nomo?",
      answer:
        "Copytrading lets you automatically mirror the trades of experienced traders. Simply choose a trader to follow, and your account will replicate their positions in real time.",
    },
    {
      question: "Can I practice trading before going live on nomo?",
      answer:
        "Yes! You can use demo mode to practice trading with virtual funds. This helps you learn strategies and gain confidence before trading with real money.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0A0F2C] mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-5">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-semibold text-[#0A0F2C]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FiMinus className="text-blue-600 text-2xl" />
                ) : (
                  <FiPlus className="text-blue-600 text-2xl" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
