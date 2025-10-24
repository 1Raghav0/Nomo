import React from "react";

const WhyFollowSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
          <span className="text-2xl">🔑</span>
          <span>
            Why follow our{" "}
            <span className="text-[#0066FF]">Ambassadors of Success?</span>
          </span>
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Our Ambassadors of Success share their journeys, strategies, and tips
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-[#F8FAFD] rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="text-5xl mb-6">📌</div>
          <h3 className="text-xl font-bold text-gray-900">
            Learn from real experts
          </h3>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Traders who have walked the path and now share their knowledge.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F8FAFD] rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="text-5xl mb-6">🎯</div>
          <h3 className="text-xl font-bold text-gray-900">
            Practical strategies
          </h3>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Actionable tips you can implement in your own trading.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F8FAFD] rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="text-5xl mb-6">📈</div>
          <h3 className="text-xl font-bold text-gray-900">
            Constant motivation
          </h3>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Stories that inspire you to keep going, even in challenging times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFollowSection;
