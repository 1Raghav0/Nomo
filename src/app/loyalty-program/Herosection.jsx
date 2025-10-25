import React from "react";

const HeroSection = () => {
  return (
    <>
    <div className="container mt-20 px-4 py-10 md:px-18 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left side: Content */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Unlock VIP Benefits with nomo Loyalty Program!{" "}
            <span role="img" aria-label="sunshine">☀️</span>
          </h1>
          <p className="text-lg text-gray-600">
            Join the elite ranks of our most dedicated traders and reap the rewards with the nomo Loyalty Program. Elevate your trading experience with exclusive VIP perks tailored just for you.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Create an account
          </button>
        </div>

        {/* Right side: Image */}
        <div className="flex justify-center items-center">
          <img 
            src="imag-4.avif" 
            alt="Loyalty Program" 
            className="w-full max-w- rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>

    <div className="px-4 py-10 md:px-18 lg:px-24 flex flex-col items-center">
              <div className="mt-12 text-center max-w-5xl">
            <h2 className="text-2xl font-semibold text-gray-800">How it works</h2>
            <p className="text-lg text-gray-600 mt-4">
              We have built a loyalty program to reward our most active customers and let them enjoy multiple VIP benefits.
              Your level depends on the amount of net deposits that you made to your account (all deposits minus all withdrawals).
              When you reach a certain level, you also get an insurance buffer that lets you keep the current level even if your net deposit temporarily drops a little under the minimum threshold.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 mt-8 rounded-lg w-full text-center">
            <p className="text-lg text-gray-800 font-semibold">
              Net deposit = total deposits - total withdrawals
            </p>
            <p className="text-sm text-gray-500 mt-2">Your level</p>
          </div>

      {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Your Benefits</h3>
          <p className="text-gray-600 mt-4">
            Get access to exclusive VIP perks tailored to your trading activity.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Your Level</h3>
          <p className="text-gray-600 mt-4">
            Keep track of your current VIP level and ensure you are maximizing your benefits.
          </p>
        </div>
      </div> */}
    </div>
    </>
    
  );
};

export default HeroSection;
