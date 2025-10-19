import React from "react";
import { Play, Calendar, Clock } from "lucide-react";

const DashboardSection = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center pb-12 px-4">
      {/* Tutorials Section */}
      <div className="w-full max-w-6xl bg-gray-50 rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Left Content */}
          <div className="flex-1">
            <img src="./img-2.avif" alt="" className="h-48 p-4" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Platform tutorials
            </h2>
            <p className="text-gray-500 mt-2">
              Explore nomo platform with our detailed video guides
            </p>
          </div>

          {/* Right Content - Tutorials List */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Tutorial 1 */}
            <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
              <div>
                <p className="text-gray-700 font-medium">
                  1. The importance of interest rates
                </p>
                <p className="text-gray-400 text-sm">30:35</p>
              </div>
              <span className="text-gray-600 font-semibold">4.8</span>
            </div>

            {/* Tutorial 2 (Active) */}
            <div className="flex justify-between items-center bg-blue-600 rounded-xl p-3 text-white shadow-md">
              <div>
                <p className="font-medium">
                  2. Trading Markets and The Economy
                </p>
                <p className="text-blue-100 text-sm">32:34</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-1 rounded-lg flex items-center gap-1">
                <Play size={16} /> Play
              </button>
            </div>

            {/* Tutorial 3 */}
            <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
              <div>
                <p className="text-gray-700 font-medium">
                  3. Understanding Safe Haven Assets
                </p>
                <p className="text-gray-400 text-sm">32:12</p>
              </div>
              <span className="text-gray-600 font-semibold">4.6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 mt-4">
        {/* Webinars and Workshops */}
        <div className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Webinars and workshops
            </h2>
            <p className="text-blue-100 mb-4">
              Online sessions — available right after registration
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Webinar 1 */}
            <div className="bg-white text-gray-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">
                  Exclusive VIP Webinar – Dow Jones
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={14} /> Today, 15:30 – 16:00
                </p>
              </div>
              <div className="bg-green-500 p-2 rounded-full">
                <Calendar size={16} className="text-white" />
              </div>
            </div>

            {/* Webinar 2 */}
            <div className="bg-white text-gray-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">Candlesticks Meet Averages</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={14} /> Tomorrow, 16:30 – 17:30
                </p>
              </div>
              <div className="bg-blue-500 p-2 rounded-full">
                <Calendar size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Market analysis
            </h2>
            <p className="text-gray-500 mt-2">
              Timely trading prompts for the most popular instruments
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <img
              src="market.avif"
              alt="Market analysis"
              className="w-3/4 max-w-sm object-contain"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-14 py-3 rounded-lg font-medium transition">
        Take a start here
      </button>
    </div>
  );
};

export default DashboardSection;
