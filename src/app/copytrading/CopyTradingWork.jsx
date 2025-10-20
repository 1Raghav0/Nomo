"use client";
import React from "react";

const CopyTradingWork = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center lg:text-left">
      {/* ---- Top Heading ---- */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          How does <span className="text-blue-600">nomo</span> copytrading work?
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
          Copytrading is easy: just pick skilled traders to follow. Adjust your
          settings, and your investments will follow their trades automatically.
          It’s like having expert advisors, perfect for beginners in trading.
        </p>
      </div>

      {/* ---- Middle Content ---- */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full max-w-6xl">
        {/* Left Text Section */}
        <div className="flex flex-col items-start text-left space-y-6 lg:w-1/2">
          {/* Step 1 */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Step 1</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Select a Top Trader to copy
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Sign up and deposit with your preferred method. Explore Top
              Traders, check traders' performance stats, and select a trader to
              copy.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Step 2</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Set the amount you want to copy
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The multiplier setting allows you to choose the size of the amount
              you want to copy. Experiment with different strategies to find the
              one that suits you best.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Step 3</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Successfully mirror the trades!
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Press "Start copying," and their orders will be replicated
              automatically. Monitor the trades in the Copier’s Dashboard.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/poster.webp" // Replace with your image path
            alt="Copytrading demo"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* ---- CTA Button ---- */}
      <div className="mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition">
          <span className="text-white">🔁</span> Try nomo copytrading
        </button>
      </div>
    </section>
  );
};

export default CopyTradingWork;
