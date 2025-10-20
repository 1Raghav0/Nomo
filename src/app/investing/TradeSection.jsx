import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TradeSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trade everything you love,
          <br />
          <span className="text-gray-800">we provide the options you need</span>
        </h2>

        <p className="text-gray-600 mb-6 text-base md:text-lg">
          Explore <span className="text-blue-600 font-semibold cursor-pointer hover:underline">nomo’s</span> diverse offerings: indices, and stocks. <br />
          Trade seamlessly on web and mobile!
        </p>

        <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Discover more assets
          <FaArrowRight className="text-white text-sm" />
        </button>
      </div>

      {/* Right Content (Image & Notification Mockup) */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Main Image */}
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=900&q=80"
          alt="People trading together"
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />

        {/* Notification Box */}
        <div className="absolute top-4 -left-4 bg-white shadow-lg rounded-lg px-4 py-3 text-sm w-64 flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
            n
          </div>
          <div>
            <p className="text-gray-700 font-semibold">💹 A new trade has been opened!</p>
            <p className="text-gray-600">
              Invested $354.94. Bought 2 shares of Absci Corp (ABSI) at $177.48.
            </p>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute bottom-6 left-8 flex gap-3">
          <div className="w-10 h-20 rounded-full bg-red-600 flex items-center justify-center text-white font-semibold">
            devit
          </div>
          <div className="w-10 h-20 rounded-full bg-black flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSection;
