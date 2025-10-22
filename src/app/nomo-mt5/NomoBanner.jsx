import React from 'react';

const NomoBanner = () => {
  return (
    <div className="bg-blue-700 rounded-xl px-6 py-10 md:py-16 md:px-12 text-white m-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Get started with nomo today!
          </h2>
          <p className="text-base md:text-lg mb-6 text-white/90">
            Sign up now to start trading on MT5. Whether you’re new to trading or an experienced pro, nomo helps you take control.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-md transition">
            Start trading on MT5 now
          </button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./get-started.avif"
            alt="Trading app preview"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default NomoBanner;
