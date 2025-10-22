// MT5AccessSection.jsx
import React from 'react';
import { GlobeAltIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const MT5AccessSection = () => {
  return (
    <div className="bg-[#0061FF] text-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Access MT5 through your nomo account
      </h2>
      <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8">
        Trade directly from your browser or download the mobile app. With your nomo account, access both nomo Web and MT5 seamlessly.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Browser Button */}
        <button className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-md hover:bg-gray-100 transition">
          <GlobeAltIcon className="w-5 h-5" />
          Trade on MT5 in your browser
        </button>

        {/* Download App Button */}
        <button className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-md hover:bg-gray-100 transition">
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download the MT5 app
        </button>
      </div>
    </div>
  );
};

export default MT5AccessSection;
