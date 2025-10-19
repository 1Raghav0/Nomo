import React from 'react';

const ThreeStepsAI = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-12">
      <div className="mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          3 simple steps to start with <span className="text-purple-600">AI copytrading</span> <span className="text-orange-500">🔥</span>
        </h2>

        {/* Grid layout for text and video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Steps */}
          <div className="space-y-8">
            <div>
              <h3 className="text-blue-600 font-semibold text-xl mb-4">Step 1: Sign Up & Fund Your Account</h3>
              <p className="text-gray-600 text-lg">Choose your deposit method – start from $300.</p>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold text-xl mb-4">Step 2: Activate AI Matching</h3>
              <p className="text-gray-600 text-lg">Our algorithm selects the ideal traders based on your goals.</p>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold text-xl mb-4">Step 3: Start Earning Automatically</h3>
              <p className="text-gray-600 text-lg">Your trades sync in real time. Monitor your gains in the dashboard.</p>
            </div>
          </div>

          {/* Right Side: Video or Image */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <video
                controls
                className="w-full h-auto rounded-xl"
                poster="https://dummyimage.com/600x400/000/fff.png&text=Video+Placeholder"
              >
                <source src="your-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
            <span className="inline-flex items-center gap-2">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/artificial-intelligence.png" alt="AI Icon" className="w-4 h-4" />
              Try AI matching now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepsAI;
