import React from "react";

const traders = [
  {
    id: 1,
    name: "IotalInvest",
    followers: 1450,
    change: "+1.8%",
    profit: "87,521.12 USD",
    roi: "86%",
    label: "High-frequency",
    profitColor: "text-green-500",
  },
  {
    id: 2,
    name: "ZetaZenith",
    followers: 720,
    change: "-1.2%",
    profit: "43,679.5 USD",
    roi: "78%",
    label: "Profit-generator",
    profitColor: "text-red-500",
  },
  {
    id: 3,
    name: "GammaGains",
    followers: 980,
    change: "+0.9%",
    profit: "123,767.43 USD",
    roi: "82%",
    label: "Best ROI",
    profitColor: "text-green-500",
  },
];

export default function LeaderProfitCopiers() {
  return (
    <div className="flex flex-col items-center py-10 px-4 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
        Leaders with Highest Profit for Copiers
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Strategies that have the highest number of total investors’ funds invested:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {traders.map((trader) => (
          <div
            key={trader.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-lg">{trader.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {trader.followers} Followers
                  </p>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl">
                Copy
              </button>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div>
                <p className={`font-bold text-xl ${trader.profitColor}`}>
                  {trader.profit}
                </p>
                <p className="text-gray-500 text-sm">Profit for copiers</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-xl">{trader.roi}</p>
                <p className="text-gray-500 text-sm">ROI</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span
                className={`text-sm px-3 py-1 bg-green-50 text-green-700 rounded-full`}
              >
                {trader.label}
              </span>
              <p className="text-gray-400 text-sm">132/150</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl">
        Become a lead trader
      </button>
    </div>
  );
}
