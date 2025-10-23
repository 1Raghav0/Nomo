import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

export default function MissionSection() {
  return (
    <section className="bg-[#f5f9ff] py-16 px-6 md:px-16 ">
      <div className="max-w-7xl mx-20">
        {/* Mission Header */}
        <p className="text-blue-600 font-medium mb-2">Mission</p>
        <div className="flex justify-between max-w-[1100px] ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-snug">
          Connect lead traders <br/> and investors on{" "}
          <span className="text-blue-600">nomo</span>
        </h2>
            <img
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2Fmission%2Flogo.avif&w=640&q=75"
              alt="nomo logo"
              className="h-32 mb-6"
            />

        </div>

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2Fmission%2Fimg-1.avif&w=640&q=75"
              alt="Traders working"
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              About us
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team’s expertise across European, Arabic, and Australian
              markets has helped us build a platform that makes trading
              accessible to everyone — no matter your experience level.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In <strong>2024</strong>, we soft-launched in{" "}
              <strong>Latin America</strong>, offering exclusive access to a
              select group of traders and receiving remarkable feedback. In{" "}
              <strong>2025</strong>, we took it further with our official launch
              across the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At <span className="text-blue-600 font-medium">nomo</span>, we’re
              not just a trading platform — we’re a movement! We empower
              individuals to achieve their financial goals, unlock their
              potential, and take control of their financial future.
            </p>

            {/* Vision box */}
            <div className="bg-white shadow-sm rounded-xl py-3 px-5 flex items-center gap-3 border border-gray-100">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
                Vision
              </span>
              <p className="text-gray-700 text-sm">
                Make trading accessible, simple, and rewarding for all.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
       {/* Bottom Stats Strip */}
        <div className="flex flex-wrap justify-between items-center mt-14 gap-6">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-2xl">
              <FaUserFriends className="text-blue-600 text-2xl" />
            </div>
            <p className="text-gray-700 text-base">
              <span className="font-semibold text-gray-900">50+</span> team
              members
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-2xl">
              <IoEarth className="text-blue-600 text-2xl" />
            </div>
            <p className="text-gray-700 text-base">
              Team across{" "}
              <span className="font-semibold text-gray-900">7 countries</span>
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-2xl">
              <MdLocationCity className="text-blue-600 text-2xl" />
            </div>
            <p className="text-gray-700 text-base">
              Presence in{" "}
              <span className="font-semibold text-gray-900">33 cities</span>
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-2xl">
              <AiFillStar className="text-yellow-500 text-2xl" />
            </div>
            <p className="text-gray-700 text-base">
              Trusted by{" "}
              <span className="font-semibold text-gray-900">thousands</span> of
              traders worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
