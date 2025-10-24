import React from "react";

const AmbassadorsOfSuccess = () => {
  return (
    <section className="bg-gradient-to-r mt-30 from-[#E8F0FF] to-[#F8FAFF] rounded-3xl py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-3xl">🌟</span>
            <h3 className="text-5xl font-bold text-[#0066FF]">nomo</h3>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ambassadors <br /> of Success
          </h2>

          <p className="text-gray-700 font-semibold">
            Get inspired by the stories of traders who have turned their passion into success.
          </p>

          <p className="text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-800">Our Ambassadors</span> of Success share their journeys,
            strategies, and tips to help you reach your financial goals. Watch exclusive interviews
            that will motivate you to take the next step on your path to financial freedom.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://nomotrade.com/_next/image?url=%2Fimages%2Fambassadors-of-success%2Fhero.avif&w=1200&q=75"
            alt="Ambassadors of Success"
            className="rounded-3xl w-full max-w-[600px] shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AmbassadorsOfSuccess;
