import React from "react";

const LeadTraderCompensation = () => {
  return (
    <section className="bg-[#0066FF] text-white rounded-3xl my-10 mx-4 md:mx-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Lead Trader Compensation 💵
        </h2>
        <p className="text-lg leading-relaxed text-white/90">
          At nomo, our <span className="font-semibold">compensation model</span> is based on
          profit-sharing, with you, the lead trader, deciding the{" "}
          <span className="font-semibold">percentage</span> of profit that copiers share from
          their gains. You earn when your copiers earn, making it a{" "}
          <span className="font-semibold">
            mutually beneficial partnership.
          </span>
        </p>

        <div className="space-y-4">
          <p className="text-lg font-medium">
            👉 Don’t wait — become a lead trader today!
          </p>
          <button className="flex items-center gap-2 bg-[#32C95C] hover:bg-[#2bb14f] transition-all text-white font-semibold px-5 py-3 rounded-xl shadow-md">
            <span className="bg-white text-[#32C95C] font-bold px-2 py-1 rounded-full">
              M
            </span>
            Become a lead trader
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl w-full max-w-[500px] shadow-lg"
          >
            <source
              src="https://nomotrade.com/images/become-a-lead-trader/compensation/video.mp4"
              type="video/mp4"
            />
        </video>
      </div>
    </section>
  );
};

export default LeadTraderCompensation;
