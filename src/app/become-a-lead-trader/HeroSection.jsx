import React from 'react'

const HeroSection = () => {
  return (

    <>
    <section className="w-full bg-white mt-10">
      {/* Top Content */}
      <div className="text-center px-4 md:px-10 pt-12 md:pt-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Become a Lead Trader
          <br></br>
          at
          <span className="text-blue-600"> nomo</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-4xl mx-auto text-base md:text-lg">
            nomo is a cutting-edge social trading platform designed to support traders and copiers in achieving their financial goals. Our lead trader program  is open to individuals with diverse trading strategies across forex, commodities, stocks, cryptocurrencies, and indices.
             By sharing your strategies, you can attract copiers to follow your trades and earn additional income.
        </p>
        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-16 rounded-md transition">
            Become a lead trader now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-10 md:mt-16 px-4">
        <img 
          src="/hero-4.avif" 
          alt="nomo platform" 
          className="w-full max-w-4xl h-auto"
        />
      </div>

    </section>

    <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 lg:pt-24 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 w-full space-y-6">

        {/* Heading */}
        <h1 className="text-4xl lg:text-4xl font-bold leading-tight">
          Who is a 
          <span className="text-blue-500"> nomo </span>
          Lead Trader?
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-md text-lg">
          A lead trader is a trader on nomo who shares their trading strategy, allowing others to copy their trades. Each trade action performed by the lead trader is automatically to the accounts of the copiers who follow them, enabling copiers to benefit from the lead trader's decisions.
        </p>

        {/* CTA Button */}
        <div>
          <p className="text-lg font-bold black mb-4">
            Ready to get started
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
            Try nomo AI Index
          </button>
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
    </>
    
  );
};

export default HeroSection
