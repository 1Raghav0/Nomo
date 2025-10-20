
import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 lg:pt-24 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 w-full space-y-6">

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Trade With
          <br></br>
          confidence
          <br></br>
          <span className="text-purple-600">copy with ease</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          A fully AI-managed portfolio built from the strategies of nomo’s top traders.
          Steady profits. One-click simplicity.
        </p>

        {/* CTA Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
            Try nomo AI Index
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Registration takes less than 1 minute
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full h-[400px] mt-12 lg:mt-0 flex justify-center relative">
        <img
          src="./copy-trading.jpg"
          alt="Hero Illustration"
          className="max-w-full lg:max-w-3xl"
        />
      </div>
      
    </section>

    <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 lg:pt-24 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="w-full space-y-6">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            <span className="text-purple-600">Join </span>
          our big trading
          <br></br>
          community
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          Join our thriving trader community for shared success. Connect, trade, and thrive with like-minded individuals, whether you're a beginner or pro. Join us today!
        </p>

        {/* CTA Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
            Try nomo AI Index
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Registration takes less than 1 minute
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full h-[400px] mt-12 lg:mt-0 flex justify-center relative">
        <img
          src="./tradingCommunity.avif"
          alt="Hero Illustration"
          className="max-w-full lg:max-w-3xl"
        />
      </div>
      
    </section>
    </>
    
  );
};

export default HeroSection;
