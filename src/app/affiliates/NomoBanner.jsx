import React from 'react';

const NomoBanner = () => {
  return (
    <div className="bg-blue-950 rounded-xl px-6 py-10 md:py-0 md:px-12 lg:mx-24 text-white m-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left content */}
        <div className="w-full md:w-[550px] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-8">
            Ready to start trading with 
            <span className='text-blue-500'> nomo?</span>
          </h2>
          <button className="bg-white hover:bg-blue-500 hover:text-white text-blue-500 font-bold px-5 py-3 rounded-md transition">
            Create an account 
          </button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="./heroPoster.avif"
            alt="Trading app preview"
            className="w-full max-w-md md:max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NomoBanner;
