import React from "react";

const InvestorSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 w-full ml-30 mt-10 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Keep growing as <span className="text-blue-600">an investor</span>
        </h2>
        <p className="text-gray-500 mt-4 leading-relaxed max-w-md">
          Join our global community of investors to view other traders’
          portfolios, discuss strategies and access their collective expertise.
          Then practise what you learn with a free demo account.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2 transition">
          <img
            src="https://www.metatrader5.com/i/logo.svg"
            alt="icon"
            className="w-5 h-5"
          />
          Join nomo
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Findex-page%2Fkeep-growing.avif&w=3840&q=75" // replace with your image path
          alt="Investor working on laptop"
          className="rounded-2xl w-full md:w-[90%] object-cover"
        />
      </div>
    </section>
  );
};

export default InvestorSection;
