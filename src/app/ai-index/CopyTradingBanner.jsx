import React from 'react';

const CopyTradingBanner = () => {
  return (
    <>
    <div className="bg-gradient-to-r m-6 from-purple-500 to-cyan-400 rounded-xl p-6 sm:p-10 md:p-16 text-white relative overflow-hidden">
      <div className="max-w-3xl z-10 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Ready to invest smarter?
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Join the future of copytrading today!
        </h3>
        <p className="text-sm sm:text-base mb-6">
          One click. One share. Infinite potential. <br />
          Let the best strategies work for you — powered by nomo AI.
        </p>
        <button className="bg-white text-black font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition">
          🚀 Start now with nomo AI Index
        </button>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcons />
      </div>
    </div>
    </>
    
  );
};

const FloatingIcons = () => {
  const icons = Array.from({ length: 20 });

  return (
    <div className="w-full h-full relative">
      {icons.map((_, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/30 backdrop-blur-md rounded shadow-lg"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default CopyTradingBanner;
