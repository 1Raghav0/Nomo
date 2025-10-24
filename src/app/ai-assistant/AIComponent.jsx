import React from 'react';

const AIComponent = () => {
  return (
    <div className="bg-gradient-to-r mt-25 from-blue-100 to-purple-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-30">
        <div className="lg:w-[600px]">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 lg:text-5xl">
            Find your perfect trader instantly with <span className="text-purple-600">nomo AI</span>
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Earn smarter with <span className="font-semibold text-purple-600">nomo AI!</span>
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Boost your earnings by up to 30% with our AI-powered matching assistant</li>
            <li>Let our AI do the heavy lifting—it finds top traders tailored to your goals in seconds</li>
            <li>Trade with confidence knowing our AI adapts to market trends and performance data in real time</li>
          </ul>
          <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-md text-lg hover:bg-purple-700">
            Start copying smarter
          </button>
        </div>
         <div className="relative flex justify-center md:justify-start md:w-1/2">
          {/* Large circles with avatars */}
          <div className="relative w-72 h-72">
            {/* Main big avatar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white shadow-lg overflow-hidden w-28 h-28">
              <img
                src="img-1.avif"
                alt="avatar1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Other smaller avatars */}
            <div className="absolute top-36 left-48 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-2.avif"
                alt="avatar2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1 -right-10 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-3.avif"
                alt="avatar3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-20 left-10 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-4.avif"
                alt="avatar4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-10 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-5.avif"
                alt="avatar5"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Star shaped decoration */}
            <div className="absolute top-1/2 -right-10 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-100 rounded-2xl opacity-70"></div>

            {/* Sparkles */}
            <div className="absolute top-44 left-40 text-yellow-400 text-xl">✨</div>
            <div className="absolute bottom-24 left-0 text-yellow-400 text-xl">💫</div>
            <div className="absolute top-24 right-12 text-yellow-400 text-xl">🌟</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIComponent;
