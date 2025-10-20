import React from "react";

const MT5Card = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex md:space-x-8">
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

          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="w-full h-full bg-gray-100 rounded-lg p-4">
              <img
                src="mt5-img.avif"
                alt="MT5 Trading"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MT5Card;
