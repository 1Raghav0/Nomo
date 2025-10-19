"use client";

import React, { useRef } from 'react';

const Roadmap = () => {
  const scrollRef = useRef(null);

  const scrollTimeline = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-200 to-blue-300 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-8">
        <span className="text-purple-600">nomo AI Index</span> Roadmap <span role="img" aria-label="roadmap">🗺️</span>
      </h2>
      <p className="text-center text-lg mb-12">
        See how we started, and what’s coming next — stay tuned for exciting updates!
      </p>

      {/* Scrollable Timeline Section */}
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            onClick={() => scrollTimeline('left')}
          >
            ◀️
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            onClick={() => scrollTimeline('right')}
          >
            ▶️
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-8 p-4 scroll-smooth scrollbar-hide"
        >
          {/* Roadmap Stages */}
          <div className="flex-shrink-0 text-center w-56 bg-white rounded-lg p-6 shadow-lg">
            <div className="bg-purple-100 p-2 rounded-full mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Octicons-database.svg" alt="Data Collection" className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-purple-600">Aug 2024</h3>
            <p className="text-gray-700 mt-2">Data Collection & AI Development</p>
          </div>

          <div className="flex-shrink-0 text-center w-56 bg-white rounded-lg p-6 shadow-lg">
            <div className="bg-purple-100 p-2 rounded-full mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-verified.svg" alt="Model Testing" className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-purple-600">Sept 2024</h3>
            <p className="text-gray-700 mt-2">Model Testing & Validation</p>
          </div>

          <div className="flex-shrink-0 text-center w-56 bg-white rounded-lg p-6 shadow-lg">
            <div className="bg-purple-100 p-2 rounded-full mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Octicons-settings.svg" alt="Market Simulation" className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-purple-600">Mar 2025</h3>
            <p className="text-gray-700 mt-2">Market Simulation & Reward System Integration</p>
          </div>

          <div className="flex-shrink-0 text-center w-56 bg-white rounded-lg p-6 shadow-lg">
            <div className="bg-purple-100 p-2 rounded-full mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Octicons-person-add.svg" alt="Beta Release" className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-purple-600">May 2025</h3>
            <p className="text-gray-700 mt-2">Limited Beta Release</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
