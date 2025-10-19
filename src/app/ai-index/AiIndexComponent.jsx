import React from 'react';

const AiIndexComponent = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-400 p-8 rounded-lg shadow-xl">
      <h1 className="text-3xl font-semibold text-center mb-8">Inside the mind of <span className="text-purple-600">nomo AI Index ⚡</span></h1>
      <p className="text-center text-lg mb-12">
        This isn’t just AI. It’s a trader that learns, adapts, and improves — every single day. Here’s how we make it happen:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Data Collection Section */}
        <div className="p-10 bg-white rounded-3xl shadow-md min-h-[400px] flex flex-col gap-y-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">1. Data collection <span role="img" aria-label="data-collection">📊</span></h2>
          <div className="flex items-center space-x-4 mb-6">
            <img src="./image-1.avif" alt="MetaTrader5" className="h-18" />
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Trading data from selected leaders: positions, size, duration, leverage, stop-loss, take-profit, risk metrics</li>
            <li>Real-time market data: RSI, MACD, price, volume, volatility, indicators</li>
            <li>Data quality checks: duplicates, errors, accuracy validation</li>
          </ul>
        </div>

        {/* Model Training Section */}
        <div className="p-6 bg-white rounded-3xl shadow-md min-h-[400px] flex flex-col gap-y-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">2. Model training <span role="img" aria-label="model-training">🧠</span></h2>
          <div className="flex items-center space-x-4 mb-6">
            <img src="image-2.avif" alt="PyTorch" className="h-18" />
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Transformer-based learning using PyTorch</li>
            <li>80% of data for training / 20% for testing</li>
            <li>Integrated reward system: +1 for profitable trades, -1 for losses, -2 for drawdowns</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-cyan-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-white"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="none" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="12"
              fill="white"
              fontWeight="bold"
              fontFamily="Arial"
            >
              nm
            </text>
          </svg>
          See how it works
        </button>
      </div>
    </div>
  );
};

export default AiIndexComponent;
