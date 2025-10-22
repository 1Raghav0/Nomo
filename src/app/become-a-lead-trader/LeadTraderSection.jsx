import React from "react";

export default function LeadTraderSection() {
  return (
    
    <>
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          How to Become a Lead Trader at{" "}
          <span className="text-blue-600 font-semibold">nomo</span>
          <br />
          in 3 Simple Steps
        </h2>
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">
              Step 1. <span className="text-black">Join nomo as a trader</span>
            </h3>
            <p className="text-sm md:text-base">
              Create your account and start trading your strategy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-600">
              Step 2. <span className="text-black">Meet the Requirements</span>
            </h3>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1">
              <li>
                <span className="font-semibold text-gray-900">Bronze+</span>{" "}
                level
              </li>
              <li>
                <span className="font-semibold text-gray-900">Level 1+</span>{" "}
                verification
              </li>
              <li>20+ trades</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-600">
              Step 3. <span className="text-black">Become a lead trader</span>
            </h3>
            <p className="text-sm md:text-base">
              Follow the easy onboarding process and click the{" "}
              <span className="font-semibold text-gray-900">
                "Become a lead trader"
              </span>{" "}
              button on your copier dashboard to start sharing your strategy.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/img-1.avif"
          alt="Lead Trader Illustration"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>

    <div className="pt-6 text-center mb-10">
          <p className="text-lg md:text-base mb-10">🔥 Start now and grow your earnings!</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
            Sign up at nomo
          </button>
        </div>
    </>
    
  );
}
