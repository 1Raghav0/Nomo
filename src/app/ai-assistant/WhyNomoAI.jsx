import React from 'react';

const WhyNomoAI = () => {
  return (
    <div className="py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why <span className="text-purple-600">nomo AI</span> makes you earn more <span className="text-yellow-500">💰</span>
        </h2>

        {/* Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md px-6 py-5 flex items-center gap-4 text-left">
            <div className="min-w-[50px]">
              <img src="ai-img-1.avif" alt="Cap" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">
                Matches you with top-performing traders based on real data
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md px-6 py-5 flex items-center gap-4 text-left">
            <div className="min-w-[50px]">
              <img src="ai-img-2.avif" alt="Research" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">
                Saves you hours of research
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md px-6 py-5 flex items-center gap-4 text-left">
            <div className="min-w-[50px]">
              <img src="ai-img-3.avif" alt="Learning" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">
                Adapts as markets shift – AI keeps learning
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md px-6 py-5 flex items-center gap-4 text-left">
            <div className="min-w-[50px]">
              <img src="ai-img-4.avif" alt="Arrow Up" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">
                Proven to outperform manual selection by up to 30%
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg text-sm hover:opacity-90 transition">
            <span className="inline-flex items-center gap-2">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/artificial-intelligence.png" alt="AI Icon" className="w-4 h-4" />
              Read more
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyNomoAI;
