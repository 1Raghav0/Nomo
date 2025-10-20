import React from "react";

const MT5Card = () => {
  return (
    <>
      <div className="flex flex-col items-center px-10 lg:px-48">
        <h2 className="text-3xl font-semibold text-blue-600 text-center ">
          MT5 – Take control of your trading
        </h2>
        <p className="mt-4 text-gray-700 text-lg text-center">
          You’ve mastered the basics. Now you want more. MT5 on nomo is for
          traders who need flexibility and power. Packed with advanced tools,
          MT5 gives you the control to create strategies, automate trades, and
          fully manage your trading experience.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex md:space-x-8">
          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="w-full h-full bg-gray-100 rounded-lg p-4">
              <img
                src="mt5-img.avif"
                alt="MT5 Trading"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3H3v18h18V10h-8z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-600">
                    Dive deeper
                  </h3>
                  <p className="mt-2 text-gray-600">
                    With MT5, you can dive deeper into the market with
                    customizable charts, multiple indicators, and real-time
                    data.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8h18M3 16h18"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-600">
                    Automate strategies
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Plus, expert advisors can automate your strategies — so you
                    never miss a trade. It’s the perfect way to take your
                    trading to the next level while staying within the nomo
                    ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-600">
                    For advanced traders
                  </h3>
                  <p className="mt-2 text-gray-600">
                    If you’re ready to explore more advanced strategies and
                    automate your trades, MT5 is the platform for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MT5Card;
