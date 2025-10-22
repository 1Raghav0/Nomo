import React from 'react';

const AffiliateSection = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-10 mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 space-y-10 lg:space-y-0">
        {/* Left Side: Text Content */}
        <div className="space-y-14 w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">
            Partner with a Rapidly Growing Broker
          </h1>
          <p className="text-lg text-gray-600">
            Monetize your audience with nomo. Content creators, influencers, and platforms earn commissions on the community they bring to nomo.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Become an affiliate
          </button>
        </div>

        {/* Right Side: Image and Icons */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <div className="relative">
            <img 
              src="hero-3.avif" 
              alt="Affiliate Image" 
              className="w-[500px] h-[400px] rounded-lg object-cover"
            />
            {/* Icon Container */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-4">
              <div className="flex space-x-3">
                <span className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
                  <i className="fas fa-heart"></i>
                </span>
                <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <i className="fas fa-share-alt"></i>
                </span>
                <span className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full">
                  <i className="fas fa-link"></i>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Trustpilot Section */}
      {/* <div className="mt-12 flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <img src="scta-icon.png" alt="SCTA Rating" className="h-8 w-8" />
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Rating SCTA</p>
            <p className="text-xs text-gray-600">SCTA Score 4.8 | Based on 2024</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="award-icon.png" alt="Best Educational Platform" className="h-8 w-8" />
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Best Educational Platform 2023</p>
            <p className="text-xs text-gray-600">SCTA Awards</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="trustpilot-icon.png" alt="Trustpilot" className="h-8 w-8" />
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Great</p>
            <p className="text-xs text-gray-600">312 reviews on Trustpilot</p>
          </div>
        </div>
      </div> */}
      
    </div>

    <div className="w-full mt-12 lg:mt-16 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-max animate-scroll">
          <div className="bg-blue-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-gray-200 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-green-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-purple-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-orange-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
        </div>
      </div>


    </>
    
  );
};

export default AffiliateSection;
