
import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-16 lg:pt-24 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="lg:w-[700px] w-full space-y-6">
        {/* Badge */}
        <div className="flex gap-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          New
        </span>
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent px-3 py-1 rounded-full text-md font-semibold">
  Powered by AI
</span>

        </div>
        

        {/* Heading */}
        <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
         Smarter investing starts here: Discover{" "}
          <span className="text-purple-600">nomo AI Index</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-xl">
          A portfolio crafted by AI, powered by the wisdom of top traders
        </p>
        

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-16 rounded-md transition">
            Try nomo AI Index
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Registration takes less than 1 minute
          </p>
        </div>
        {/* <div className="w-full mt-12 lg:mt-16 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-max animate-scroll">
          <div className="bg-blue-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-gray-200 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-green-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-purple-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-orange-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-[350px] w-full h-[450px] mt-12 lg:mt-0 flex justify-center relative">
        <img
          src="/iphone.avif"
          alt="Hero Illustration"
          className="max-w-full lg:max-w-md"
        />
      </div>

      {/* BOTTOM SCROLL SECTION */}
      
    </section>


    </>
    
  );
};

export default HeroSection;
