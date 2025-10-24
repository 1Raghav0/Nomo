import React from "react";
import { FaCheck } from "react-icons/fa";

const InterviewSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://nomotrade.com/_next/image?url=%2Fimages%2Fambassadors-of-success%2Fmarcos.avif&w=1080&q=75"
            alt="Nahuel Marcos"
            className="rounded-3xl w-full max-w-[420px] object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="mr-2">🎙️</span>
            Exclusive Interviews with{" "}
            <span className="text-[#0066FF]">Nahuel Marcos</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Expert in trading and investments with over 10 years of experience.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              📌 Main Achievements:
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#0066FF] mt-1" />
                Over 10 years in the financial and trading industry.
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#0066FF] mt-1" />
                Successful trader and manager, with strategies copied by more
                than 5,000 investors.
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#0066FF] mt-1" />
                Specialist in copy trading and automated investment strategies.
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#0066FF] mt-1" />
                Has worked with major brokers and platforms across Latin America
                and Europe.
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#0066FF] mt-1" />
                Speaker at international financial conferences and online
                summits.
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#0066FF] mt-1" />
                Host of{" "}
                <span className="text-[#0066FF] font-medium ml-1">nomo</span>{" "}
                masterclasses, where he shares valuable trading strategies with
                the community.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewSection;
