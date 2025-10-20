import React from 'react';

const PowerfulTools = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-8">
        <span className='text-blue-600'>Powerful tools </span>to help you grow
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2  gap-8">
        {/* CopyTrading Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold ">Copytrading</h3>
          <p className="mt-4 text-gray-700 text-base">
            Want to learn from the pros? With copytrading, you can follow and automatically copy the strategies of successful traders. It’s a smart way to grow your portfolio while gaining valuable experience.
          </p>
          <img src="./copy-trading.jpg" alt="Copytrading" className="mt-10 w-full rounded-lg h-[400px]" />
        </div>

        {/* Demo Account Card */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold ">Demo account with $10,000 test funds</h3>
          <p className="mt-4 text-gray-700 text-base">
            Start trading risk-free! Open a demo account with $10,000 in test funds and practice your strategies without the pressure of real money. Feel confident before you dive into live trading.
          </p>
          <img src="./poster.webp" alt="Demo Account" className="mt-6 w-full rounded-lg shadow-md" />
        </div>

        
      </div>

      {/* TradingView Pro Charts Card */}
        <div className="bg-green-50 mt-8 p-6 rounded-lg shadow-lg flex items-center gap-10 ">
            <div>
                <h3 className="text-2xl font-semibold text-blue-600">TradingView Pro charts</h3>
          <p className="mt-4 text-gray-700 text-base">
            Gain a competitive edge with advanced trading tools. TradingView pro charts give you access to real-time data and powerful charting features to make better, more informed decisions.
          </p>
            </div>
          
          <img src="./chart.avif" alt="TradingView Pro" className="mt-6 w-1/2" />
        </div>

      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Start now
        </button>
      </div>
    </div>
  );
};

export default PowerfulTools;
