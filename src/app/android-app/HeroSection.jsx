import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className="flex mt-30 flex-col lg:flex-row items-center ml-10 mr-10 justify-between rounded-lg px-6 lg:px-24 py-16 lg:pt-14 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="lg:w-2/3 w-full space-y-6">
        {/* Badge */}
        <div className="flex gap-4">
            <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
          nomo Android app
        </span>
        <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
          Rated 4.85 on Google Play Market
        </span>

        </div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          <span className="text-blue-500">nomo </span>
          Trading
          <br />
          App for Android
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          ADownload free nomo app on your Android device from Google Play and trade anytime, anywhere — fully automated, hassle-free.
        </p>

        {/* CTA Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
            Try nomo AI Index
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative lg:mt-0">
  <img
    src="/hero-1.avif"
    alt="Hero Illustration"
    className="w-full max-w-md md:max-w-lg lg:max-w-4xl h-auto object-contain"
  />
</div>


      {/* BOTTOM SCROLL SECTION */}
      
    </section>

    </>
    
  );
};

export default HeroSection;
