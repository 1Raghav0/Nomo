import React from "react";

const WhyCopyTrading = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Why try <span className="text-blue-600">copytrading?</span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col justify-between text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Copy true trading experts
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              When you copy a trader, your investments automatically mirror
              their trades in real-time, providing you with a hands-free way to
              benefit from their expertise.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col justify-between text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Risk management
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Copytrading allows you to diversify your investments easily,
              spreading risk across different strategies. With <b>nomo</b>, make
              the most of copytrading — simplified, automatic, and tailored to
              your success.
            </p>
          </div>
        </div>

        {/* Card 3 (Image Card) */}
        <div className="bg-blue-100 rounded-2xl p-8 flex justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/825/825540.png"
            alt="Trading Illustration"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>

      {/* Button */}
      <div className="text-center mb-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
          Try nomo copytrading
        </button>
      </div>

      {/* Bottom Heading */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Follow the insights from our{" "}
          <span className="text-blue-600">financial experts</span>
        </h3>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          And discover more opportunities
        </p>
      </div>
    </section>
  );
};

export default WhyCopyTrading;
