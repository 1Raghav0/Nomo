"use client";
import Image from "next/image";

export default function WhatSetsUsApart() {
  const featuresTop = [
    {
      title: "Seamless trading essentials",
      desc: "Explore a new era of trading with nomo's flawless essentials. Trade and manage your positions effortlessly, ensuring a seamless trading experience.",
      img: "/icons/trading.png",
      bg: "bg-[#E9F7FF]",
    },
    {
      title: "Smart trading",
      desc: "Execute smart trades with nomo. Leverage our platform's intelligent features to make informed decisions and maximize your trading potential.",
      img: "/icons/smart.png",
      bg: "bg-[#F2F3F7]",
    },
    {
      title: "Copytrading",
      desc: "Enhance your trading experience with nomo's copytrading feature. Follow the strategies of experienced traders and potentially boost your profits automatically.",
      img: "/icons/copy.png",
      bg: "bg-[#EEFAE9]",
    },
    {
      title: "Stay informed",
      desc: "Stay up-to-date with nomo's real-time view of your trading activities. Monitor your portfolio, receive notifications, and stay connected to your trades.",
      img: "/icons/informed.png",
      bg: "bg-[#FFF3E4]",
    },
  ];

  const featuresBottom = [
    {
      title: "Latest market insights",
      desc: "Stay informed about the latest market trends with nomo. We're dedicated to providing you with valuable insights to support your trading decisions.",
      img: "/icons/market.png",
      bg: "bg-[#FFECEC]",
    },
    {
      title: "Favorite asset monitoring",
      desc: "Customize your trading experience by marking assets as favorites. Easily monitor the assets that matter most to you.",
      img: "/icons/favorite.png",
      bg: "bg-[#EDE3FF]",
    },
    {
      title: "Demo mode for practice",
      desc: "Perfect your trading strategies with nomo's demo mode. Practice risk-free to build confidence before engaging in live trading.",
      img: "/icons/demo.png",
      bg: "bg-[#E9F1FF]",
      wide: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-bold mb-14">
          What <span className="text-blue-600">sets us apart?</span>
        </h2>

        {/* Top 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuresTop.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl px-8 py-10 flex items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[220px]`}
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A0F2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresBottom.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl px-8 py-10 flex items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                item.wide ? "md:col-span-2 h-[200px]" : "h-[200px]"
              }`}
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A0F2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
