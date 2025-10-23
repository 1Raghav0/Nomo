import React from "react";

const ReferralSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 bg-white mt-20">
      {/* Left side content */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full mb-4">
          <span className="text-blue-600 font-medium">Beta</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Invite friends, <span className="text-blue-600">earn $50</span> each
        </h1>

        <p className="text-gray-600 mb-6">
          The <span className="text-blue-600 font-medium">nomo</span> beta referral program is live – 
          share your link and start earning together.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
          Join the referral program
        </button>
        <p className="text-xs text-gray-400 mt-2">*Terms and Conditions apply</p>
      </div>

      {/* Right side image */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        <div className="relative">
          {/* Image placeholder */}
          <img
            src="./hero-6.avif"
            alt="People smiling"
            className="rounded-xl object-contain w-full max-w-3xl"
          />

          <div className="absolute bottom-26 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div>
                <p className="font-semibold text-sm text-gray-900">Joomwaker</p>
                <p className="text-xs text-gray-500">Starter</p>
              </div>
              <span className="ml-2 text-green-600 text-xs font-medium">Joined</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-6 bg-white px-4 py-3 rounded-xl shadow-md">
            <p className="text-gray-900 font-semibold text-sm">You got $50! 🎉</p>
            <p className="text-gray-600 text-xs">
              You’ve received a $50 bonus for referring a new user!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
