import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="rounded-xl px-6 lg:mx-20 py-10 md:py-16 md:px-12 m-8 bg-cover bg-center"
    >
      <div className="rounded-xl p-6 md:p-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Left content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Our Pricing and Market Hours
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-500">
            You can trade over 500 instruments on 
            <br />
            <br />
              Here you’ll find trading hours, margin requirements, spreads and fees for different assets tradable on as well as fees for autocopy feature, deposit and withdrawals.
            </p>
          </div>

          {/* Right image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./imag-3.avif"
              alt="Trading app preview"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
