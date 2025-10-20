"use client";
import React, { useRef } from "react";

const ZeroCommission = () => {
  // Separate refs for each section
  const scrollRefOne = useRef(null);
  const scrollRefTwo = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      ref.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
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
    <>
      {/* --- First Section --- */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 py-10">
        {/* Left scrollable section */}
        <div className="w-full lg:w-[60%] px-4 md:px-8 py-10 bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Top traded assets at{" "}
              <span className="text-blue-600 font-bold">nomo</span>
            </h2>

            <div className="flex gap-2">
              <button
                onClick={() => scroll(scrollRefOne, "left")}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                ◀
              </button>
              <button
                onClick={() => scroll(scrollRefOne, "right")}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                ▶
              </button>
            </div>
          </div>

          <div
            ref={scrollRefOne}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {assets.map((asset, index) => (
              <div
                key={index}
                className={`min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] xl:min-w-[300px] h-[280px] md:h-[300px] bg-gradient-to-br ${asset.bg} rounded-xl p-5 flex-shrink-0 shadow-sm hover:shadow-md transition flex flex-col gap-4`}
              >
                <img
                  src={asset.icon}
                  alt={asset.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-1">
                    {asset.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{asset.symbol}</p>
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-800">
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
              </div>
            ))}
          </div>
        </div>

        {/* Right text */}
        <div className="w-full lg:w-[35%] text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zero Commission
            <br />
            <span className="text-gray-800">on Leading stocks</span>
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Diversify your portfolio effortlessly — invest in top stocks without
            any trading fees. Explore endless opportunities today!
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Discover more assets
          </button>
        </div>
      </section>

      {/* --- Second Section (with its own ref) --- */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 py-10">
        {/* Left text */}
        <div className="w-full lg:w-[35%] text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simplified global
            <br />
            <span className="text-gray-800">indices trading</span>
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Explore and diversify your portfolio effortlessly — invest in top
            stocks without any trading fees. Explore endless opportunities
            today!
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Discover more assets
          </button>
        </div>

        {/* Right scrollable section */}
        <div className="w-full lg:w-[60%] px-4 md:px-8 py-10 bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Top traded assets at{" "}
              <span className="text-blue-600 font-bold">nomo</span>
            </h2>

            <div className="flex gap-2">
              <button
                onClick={() => scroll(scrollRefTwo, "left")}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                ◀
              </button>
              <button
                onClick={() => scroll(scrollRefTwo, "right")}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                ▶
              </button>
            </div>
          </div>

          <div
            ref={scrollRefTwo}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {assets.map((asset, index) => (
              <div
                key={index}
                className={`min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] xl:min-w-[300px] h-[280px] md:h-[300px] bg-gradient-to-br ${asset.bg} rounded-xl p-5 flex-shrink-0 shadow-sm hover:shadow-md transition flex flex-col gap-4`}
              >
                <img
                  src={asset.icon}
                  alt={asset.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-1">
                    {asset.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{asset.symbol}</p>
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-800">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ZeroCommission;
