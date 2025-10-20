import React from 'react';

const WhyCopyTrading = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Why try <span className="text-black">copytrading?</span></h1>
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
  );
};

export default WhyCopyTrading;
