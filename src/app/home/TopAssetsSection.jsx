"use client";
import React, { useRef } from "react";

const TopAssetsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  const assets = [
    {
      name: "nomo AI index",
      symbol: "NMAI",
      price: 351.68,
      change: +0.67,
      bg: "from-blue-50 to-blue-100",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "McDonald's",
      symbol: "MCD",
      price: 306.94,
      change: +0.74,
      bg: "from-rose-50 to-rose-100",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732217.png",
    },
    {
      name: "Alphabet",
      symbol: "GOOG",
      price: 249.8,
      change: -1.48,
      bg: "from-yellow-50 to-yellow-100",
      icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      name: "Tesla",
      symbol: "TSLA",
      price: 431.11,
      change: -0.64,
      bg: "from-rose-50 to-rose-100",
      icon: "https://cdn-icons-png.flaticon.com/512/731/731962.png",
    },
  ];

  return (
    <section className="w-full px-5 lg:px-24 py-10 bg-white">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Top traded assets at{" "}
          <span className="text-blue-600 font-bold">nomo</span>
        </h2>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {assets.map((asset, index) => (
          <div
            key={index}
            className={`min-w-[240px] sm:min-w-[260px] h-[300px] lg:min-w-[300px] bg-gradient-to-br ${asset.bg} rounded-xl p-5 flex-shrink-0 shadow-sm hover:shadow-md transition flex flex-col gap-4`}
          >
            
              <img
                src={asset.icon}
                alt={asset.name}
                className="w-8 h-8 rounded-full"
              />
            

            <div>
                <h3 className="font-semibold text-gray-800 text-lg sm:text-base mb-1">
                  {asset.name}
                </h3>
                <p className="text-gray-500 text-xs">{asset.symbol}</p>
              </div>

            <p className="text-xl font-semibold text-gray-800">
              ${asset.price.toFixed(2)}
            </p>
            <p
              className={`text-sm font-medium ${
                asset.change >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {asset.change >= 0 ? "+" : ""}
              {asset.change}%
            </p>

            {/* Small chart placeholder */}
            <div className="mt-3 h-10 w-full bg-white/40 rounded-md flex items-end overflow-hidden">
              <div className="w-full h-[2px] bg-gray-300 relative">
                <div
                  className={`absolute bottom-0 left-0 h-[2px] ${
                    asset.change >= 0 ? "bg-green-500" : "bg-red-500"
                  } animate-pulse`}
                  style={{ width: `${Math.min(Math.abs(asset.change) * 15, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopAssetsSection;
