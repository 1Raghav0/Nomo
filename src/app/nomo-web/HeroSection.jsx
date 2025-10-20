import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className="bg-blue-100 flex mt-30 flex-col lg:flex-row items-center ml-10 mr-10 justify-between rounded-lg px-6 lg:px-24 py-16 lg:pt-14 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="lg:w-2/3 w-full space-y-6">
        

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Welcome to,{" "}
          <span className="text-blue-500">nomo - </span>
          your simplified 
          <br></br>
          trading experience
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          Access powerful trading tools with a simple, intuitive interface.
          <br></br>
          Start your trading journey today, no experience needed.
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
    src="/heroPoster.avif"
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
