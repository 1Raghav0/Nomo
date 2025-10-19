import React from "react";

const InvestmentSteps = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      {/* Header Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Small steps. Steady growth. Big future. 🔥
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Instead of copying one person, you copy the collective intelligence of hundreds of elite traders, selected and balanced by AI.
      </p>

      {/* Steps Container */}
      <div className="bg-white border border-blue-200 rounded-xl p-6 md:p-10 shadow-md">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Step 1 */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-500 font-semibold border border-blue-200 rounded-full px-3 py-0.5 text-xs">
                Step 1
              </span>
            </div>
            <h3 className="text-md font-semibold mb-1">💰 Invest</h3>
            <p className="text-sm text-gray-500 mb-4">Choose your investment amount.</p>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-1 inline-block">
              <button className="bg-white rounded-lg px-5 py-3 flex items-center gap-4 w-full">
                <div className="text-blue-600 font-semibold">↗ Invest</div>
                <div className="ml-auto text-sm font-bold bg-blue-100 px-3 py-1 rounded-full text-blue-600">
                  $50.00
                </div>
              </button>
              <div className="text-xs mt-2 text-white text-center font-medium">Best for new users</div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-500 font-semibold border border-blue-200 rounded-full px-3 py-0.5 text-xs">
                Step 2
              </span>
            </div>
            <h3 className="text-md font-semibold mb-1">✨ AI does the work</h3>
            <p className="text-sm text-gray-500 mb-4">
              nomo AI automatically opens trades based on its data
            </p>
            {/* Green card mockup */}
            <div className="bg-green-100 text-green-700 rounded-xl px-4 py-3 text-sm font-medium h-26">
              🎉 Congratulations<br />
              <span className="text-green-800 font-semibold">
                Your profit this month: +$14.65 USD
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-500 font-semibold border border-blue-200 rounded-full px-3 py-0.5 text-xs">
                Step 3
              </span>
            </div>
            <h3 className="text-md font-semibold mb-1">📈 Track & collect</h3>
            <p className="text-sm text-gray-500 mb-4">
              Watch your investment grow and withdraw profits anytime
            </p>
            {/* Withdrawal card mockup */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-left shadow-sm text-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-blue-600 font-medium">nomo</span>
                <span className="text-xs text-gray-400">now</span>
              </div>
              <div className="font-semibold text-gray-700">✅ Withdrawal successful</div>
              <p className="text-gray-500 text-xs">
                You've successfully withdrawn $1,500.00 USD from your account.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
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

export default InvestmentSteps;
