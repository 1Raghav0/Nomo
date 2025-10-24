import React from "react";

const LeadTraderSteps = () => {
  return (
    <section className="py-16 px-6 mx-20 md:px-12 lg:px-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Heading Above Both Sections */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          How to Become a Lead Trader at{" "}
          <span className="text-[#0066FF]">nomo</span>
          <br /> in 3 Simple Steps
        </h2>

        {/* Middle Section - Steps + Video */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full">
          {/* Left Side Text */}
          <div className="md:w-1/2 space-y-5 text-left">
            <div>
              <p className="font-bold text-[#0066FF]">Step 1.</p>
              <p className="font-semibold inline"> Join nomo as a trader</p>
              <p className="text-gray-500">
                Create your account and start trading your strategy.
              </p>
            </div>

            <div>
              <p className="font-bold text-[#0066FF]">Step 2.</p>
              <p className="font-semibold inline"> Meet the Requirements</p>
              <ul className="text-gray-500 list-disc pl-5 mt-1">
                <li>
                  <span className="font-bold text-gray-800">Bronze+</span> level
                </li>
                <li>
                  <span className="font-bold text-gray-800">Level 1+</span>{" "}
                  verification
                </li>
                <li>
                  <span className="font-bold text-gray-800">20+</span> trades
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-[#0066FF]">Step 3.</p>
              <p className="font-semibold inline"> Become a lead trader</p>
              <p className="text-gray-500">
                Follow the easy onboarding process and click the{" "}
                <span className="font-semibold text-gray-800">
                  "Become a lead trader"
                </span>{" "}
                button on your copier dashboard to start sharing your strategy.
              </p>
            </div>
          </div>

          {/* Right Side Video */}
          <div className="md:w-1/2 flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl w-full max-w-[500px] shadow-lg"
            >
              <source
                src="https://nomotrade.com/images/become-a-lead-trader/simple-steps/video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Bottom Section (Text + Button) */}
        <div className="mt-10">
          <p className="text-lg font-medium">🔥 Start now and grow your earnings!</p>
          <button className="flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] transition-all text-white font-semibold px-6 py-3 mt-3 rounded-xl shadow-md mx-auto">
            <span className="bg-white text-[#0066FF] font-bold px-2 py-1 rounded-full">
              M
            </span>
            Sign up at nomo
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadTraderSteps;
