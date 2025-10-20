import React from "react";

const NomoMobile = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
        <div className=" p-8 md:flex md:space-x-8">
          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="w-full h-full p-4">
              <img
                src="experience.avif"
                alt="MT5 Trading"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl md:text-4xl font-medium mt-10">
                    Trade smarter with <span className="text-blue-500">nomo</span>
                  </h2>
                  <p className="mt-6 text-gray-600">
                     nomo offers a sleek, modern, and intuitive platform that makes trading easy and accessible. Whether you're new to the market or an experienced trader, we provide the tools you need to make informed decisions and take control of your financial journey.
                  </p>
                  <button className="bg-blue-500 text-white font-medium rounded-lg px-6 py-2 mt-6">Start now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Why try <span className="text-black">copytrading?</span></h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Box */}
        <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-lg">
          <img src="./whycopy-1.avif" alt="Automatic Replication" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Automatic replication</h3>
          <p className=" text-gray-700">
            When you copy a trader, your investments automatically mirror their trades in real-time, providing you with a hands-free way to benefit from their expertise.
          </p>
        </div>

        {/* Second Box */}
        <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-lg">
          <img src="whycopy-2.avif" alt="Risk Management" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Risk management</h3>
          <p className=" text-gray-700">
            Copytrading allows you to diversify your investments easily, spreading risk across different strategies. With nomo, make the most of copytrading — simplified, automatic, and tailored to your success.
          </p>
        </div>

        {/* Third Box */}
        <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-lg">
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
          Download nomo Android app
        </button>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-between items-center px-10 pt-10 h-[450px] gap-10 overflow-hidden rounded-xl bg-blue-500 mx-10">
        
        {/* Left Section */}
        <div className="flex-  text-center lg:text-left space-y-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Download the app now
          </h2>
          <p className="text-white max-w-md mx-auto lg:mx-0">
            Take full control of your investments with just one app.
            <br />
            Whether you're trading, copying top strategies, or chatting with support — everything is in your pocket.
            <br />
            Track your portfolio, receive real-time alerts, and manage your money on the go — anytime, anywhere.
          </p>
          <button className="mt-4 bg-white hover:bg-[#006dff] px-8 py-3 rounded-lg font-semibold transition">
            Download nomo Android app
          </button>
        </div>

        {/* Right Section (Full Cover Image) */}
        <div className="flex-1 relative h-full w-full">
          <img
            src="./full-control.avif"
            alt="Copy trader preview"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default NomoMobile;
