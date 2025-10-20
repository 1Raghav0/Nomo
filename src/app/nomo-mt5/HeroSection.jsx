
import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className=" mt-10 w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 lg:pt-24 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 w-full space-y-6">

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          MT5 on  
          <span className="text-blue-500"> nomo </span>-
          <br />
          take control of
          <br></br>
          your trading
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          MT5 on nomo gives you full control over your trading with customizable charts, real-time data, and expert advisors to automate your strategies.
        </p>

        {/* CTA Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
            Start trading on MT5 with nomo
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Registration takes less than 1 minute
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full h-[400px] mt-12 lg:mt-0 flex justify-center relative">
        <img
          src="./hero-2.avif"
          alt="Hero Illustration"
          className="max-w-full lg:max-w-3xl"
        />
      </div>
      
    </section>
    </>
    
  );
};

export default HeroSection;
