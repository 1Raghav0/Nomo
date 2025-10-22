import React from 'react';
import MT5AccessSection from './MT5AccessSection';

const WhyCopyTrading = () => {
  return (
    <>
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">nomo <span className="text-black">MT5 – trade with advanced tools at your fingertips</span></h1>
        <p className='px-5 lg:px-32'>
           MT5 gives you everything you need to trade with precision and control. Customize your charts, automate your strategies, and make data-driven decisions, all from one powerful platform. Whether you’re a seasoned trader or looking to enhance your skills, MT5 is designed to meet your needs and help you excel.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Box */}
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
          <img src="./whycopy-1.avif" alt="Automatic Replication" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Automatic replication</h3>
          <p className=" text-gray-700">
            When you copy a trader, your investments automatically mirror their trades in real-time, providing you with a hands-free way to benefit from their expertise.
          </p>
        </div>

        {/* Second Box */}
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
          <img src="whycopy-2.avif" alt="Risk Management" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Risk management</h3>
          <p className=" text-gray-700">
            Copytrading allows you to diversify your investments easily, spreading risk across different strategies. With nomo, make the most of copytrading — simplified, automatic, and tailored to your success.
          </p>
        </div>

        {/* Third Box */}
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
          <img src="whycopy-3.avif" alt="Effortless Expertise" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Effortless expertise</h3>
          <p className=" text-gray-700">
            Copy the trades of seasoned investors with a simple click, gaining access to their strategies and market insights effortlessly.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 focus:outline-none">
          Try nomo copytrading
        </button>
      </div>
    </div>

    <MT5AccessSection />


    <div className="bg-white py-12 px-6 md:px-16 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* left Image*/}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Main Image */}
          <img
            src="./perefct.avif"
            alt="People trading together"
            className="rounded-xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>

        {/* right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perfect for advanced traders
          </h2>

          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Step into the simplicity of trading with copytrading – it's as easy
            as 1-2-3! <br />
            Choose expert traders, and like magic, your investments mirror their
            every move automatically!
          </p>

          <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Trade on MT5 with nomo
          </button>
        </div>
      </div> 

       <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center lg:text-left">
      {/* ---- Top Heading ---- */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          How <span className='text-blue-500'>it work?</span>
        </h2>
      </div>

      {/* ---- Middle Content ---- */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full max-w-6xl">
        {/* Left Text Section */}
        <div className="flex flex-col items-start text-left space-y-6 lg:w-1/2">
          {/* Step 1 */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Step 1</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Sign up
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              create your free nomo account and access MT5 instantly
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Step 2</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Set the amount you want to copy
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The multiplier setting allows you to choose the size of the amount
              you want to copy.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Step 3</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Successfully mirror the trades!
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Press "Start copying," and their orders will be replicated
              automatically.
            </p>
          </div>

          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Step 4</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Successfully mirror the trades!
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Press "Start copying," and their orders will be replicated
              automatically.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/works.avif" // Replace with your image path
            alt="Copytrading demo"
            className="w-full max-w-2xl h-[500px]"
          />
        </div>
      </div>

      {/* ---- CTA Button ---- */}
      <div className="mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition">
          <span className="text-white">🔁</span> Try nomo copytrading
        </button>
      </div>
    </section>   
    </>
    
  );
};

export default WhyCopyTrading;
