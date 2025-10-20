import React from 'react';

const NomoWebInfoSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-20 py-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full mb-4">
          nomo Web
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-blue-600">nomo Web</span> – start simple, trade smart
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          If you’re new to trading, you need a platform that’s easy to use and doesn’t overwhelm you. 
          That’s exactly what nomo Web is designed to do. It’s fast, simple, and doesn’t come with 
          confusing jargon or unnecessary complexity.
        </p>
      </div>

      {/* Cards Grid */}
      <div className='flex items-center gap-4'>
        <div className="mt-12 flex flex-col items-cente gap-6">
        {/* Quick Start */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">🥳 Quick start</h3>
          <p className="text-gray-700 text-sm">
            Start trading in minutes. With nomo Web, you’ll find an intuitive interface that’s easy to navigate.
          </p>
        </div>

        {/* Scale Up */}
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-sm flex flex-col justify-between md:col-span-1">
          <div>
            <h3 className="text-lg font-semibold mb-2">🚀 Scale up</h3>
            <p className="text-sm">
              When you're ready to scale up, take advantage of copytrading. 
              Follow experienced traders and copy their strategies automatically. 
              It’s a simple way to learn as you go.
            </p>
          </div>
          <img 
            src="./imag-1.avif" 
            alt="Scale up graphic" 
            className="mt-4 w-full max-h-56 object-contain"
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col items-cente gap-6">
        {/* Real-time Data */}
        <div className="bg-blue-100 p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">📈 Real-time data</h3>
            <p className="text-gray-700 text-sm">
              Access real-time market data to stay up to date with the markets. 
              Use powerful tools like TradingView charts to help you make informed decisions.
            </p>
          </div>
          <img 
            src="imag-1.avif" 
            alt="Trading chart" 
            className="mt-4 w-full max-h-56 object-contain rounded"
          />
        </div>

        {/* Quick Start */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">🥳 Quick start</h3>
          <p className="text-gray-700 text-sm">
            Start trading in minutes. With nomo Web, you’ll find an intuitive interface that’s easy to navigate.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default NomoWebInfoSection;
