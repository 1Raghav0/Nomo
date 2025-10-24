"use client";
import { useState } from "react";
import Image from "next/image";

export default function LeadTraderActionsSection() {
  const [activeTab, setActiveTab] = useState("Research");

  const tabs = [
    {
      title: "Research",
      desc: "As a lead trader, you will oversee the market, research instruments, and stay updated on news that impacts your trades.",
      image: "https://nomotrade.com/_next/image?url=%2Fimages%2Fbecome-a-lead-trader%2Fwhat-does%2Fimg-1.avif&w=828&q=75",
    },
    {
      title: "Market and Instruments",
      desc: "You’ll analyze various markets — from forex to stocks — and select instruments that fit your trading strategy and risk profile.",
      image: "https://nomotrade.com/_next/image?url=%2Fimages%2Fbecome-a-lead-trader%2Fwhat-does%2Fimg-2.avif&w=828&q=75",
    },
    {
      title: "Interact",
      desc: "Engage with copiers by sharing insights and strategies, building trust and growing your follower base to earn additional income.",
      image: "https://nomotrade.com/_next/image?url=%2Fimages%2Fbecome-a-lead-trader%2Fwhat-does%2Fimg-3.avif&w=828&q=75",
    },
  ];

  const activeContent = tabs.find((tab) => tab.title === activeTab);

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0D1A3B] mb-12 text-center md:text-left">
        What does a <span className="text-[#0059FF]">Lead Trader</span> do?
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Left Section - Tabs */}
        <div className="w-full md:w-1/4">
          <div className="space-y-5 mb-8">
            {tabs.map((tab) => (
              <div
                key={tab.title}
                onClick={() => setActiveTab(tab.title)}
                className={`cursor-pointer border-b pb-3 transition-colors ${
                  activeTab === tab.title
                    ? "text-[#0D1A3B] font-semibold border-[#0059FF]"
                    : "text-gray-500 border-gray-200 hover:text-[#0D1A3B]"
                }`}
              >
                {tab.title}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔑</span>
              <p className="text-lg font-semibold text-[#0D1A3B]">
                Start trading now
              </p>
            </div>

            <button className="bg-[#0059FF] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center shadow-md hover:bg-[#0048D6] transition">
              <Image
                src="/images/nomo-icon.png"
                alt="nomo"
                width={20}
                height={20}
                className="mr-2"
              />
              Become a lead trader
            </button>
          </div>
        </div>

        {/* Right Section - Dynamic Content */}
        <div className="w-full md:w-3/4 bg-[#F9FAFB] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src={activeContent.image}
            alt={activeContent.title}
            width={320}
            height={350}
            className="object-contain"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#0D1A3B] mb-3">
              {activeContent.title}
            </h3>
            <p className="text-gray-600 text-lg max-w-md">
              {activeContent.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
