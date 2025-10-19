import React from 'react';

const ProcessFlow = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-200 to-blue-300 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Process Flow
      </h2>

      <div className="flex items-center justify-between space-x-8">
        {/* Step 1: 7D Target */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Octicons-target.svg" alt="7D Target" className="w-8 h-8" />
          </div>
          <p className="text-lg font-semibold">7D Target</p>
        </div>

        {/* Arrow between steps */}
        <div className="flex items-center">
          <svg className="w-12 h-12 text-blue-500 rotate-270" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 10.293a1 1 0 011.414 0L10 13.586V4a1 1 0 112 0v9.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>

        </div>

        {/* Step 2: AI Optimization */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Octicons-settings.svg" alt="AI Optimization" className="w-8 h-8" />
          </div>
          <p className="text-lg font-semibold">AI Optimization</p>
        </div>

        {/* Arrow between steps */}
        <div className="flex items-center">
          <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 10.293a1 1 0 011.414 0L10 13.586V4a1 1 0 112 0v9.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Step 3: Portfolio Adjustment */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Octicons-briefcase.svg" alt="Portfolio Adjustment" className="w-8 h-8" />
          </div>
          <p className="text-lg font-semibold">Portfolio Adjustment</p>
        </div>

        {/* Arrow between steps */}
        <div className="flex items-center">
          <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 10.293a1 1 0 011.414 0L10 13.586V4a1 1 0 112 0v9.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Step 4: Growth */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Octicons-check.svg" alt="Growth" className="w-8 h-8" />
          </div>
          <p className="text-lg font-semibold">Growth</p>
        </div>
      </div>

      {/* "See how it works" Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          See how it works
        </button>
      </div>
    </div>
  );
};

export default ProcessFlow;
