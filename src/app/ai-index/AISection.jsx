"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import ProcessFlow from "./ProcessFlow";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const AISection = () => {
  const data = {
    labels: ["1D", "1W", "1M", "1Y", "Max"],
    datasets: [
      {
        data: [320, 325, 340, 353, 353.36],
        borderColor: "#00c853",
        borderWidth: 2,
        pointBackgroundColor: "#00c853",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  };

  return (
    <>
    <section className="w-full bg-gradient-to-b from-white to-[#f3f6ff] py-16 px-4 md:px-10 flex flex-col items-center text-center">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-center space-x-2 text-sm mb-2">
          {/* <div className="flex gap-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              New
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent px-3 py-1 rounded-full text-md font-semibold">
              Powered by AI
            </span>
          </div> */}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Focused targets. <span className="text-blue-600">AI</span> Smarte returns
        </h2>
        <p className="text-gray-600 max-w-2xl mt-3">
          nomo AI  sets a dynamic 7-Day Price Target — adapting strategies every week to optimize your growth.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 w-full max-w-6xl">

        {/* Left: Chart Card  */}
        <div className="grid gap-6 w-full lg:w-1/2">
          <div className="border rounded-2xl p-5 bg-white hover:shadow-lg transition h-[100px]">
            <div className="flex items-center gap-4 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Trader"
                className="w-14 h-14"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">
                  Thinks like a trader
                </h4>
                <p className="text-gray-600 text-sm">
                  Trained on real strategies, not random signals.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-5 bg-white hover:shadow-lg transition h-[100px]">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712139.png"
                alt="Learns"
                className="w-14 h-14"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">
                  Learns and adapts
                </h4>
                <p className="text-gray-600 text-sm">
                  AI updates based on market conditions, constantly improving.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-5 bg-white hover:shadow-lg transition h-[100px]">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712144.png"
                alt="Manages"
                className="w-14 h-14"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Manages it all</h4>
                <p className="text-gray-600 text-sm">
                  From strategy to execution, without emotion or delay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Features*/}
        <div className="bg-white rounded-2xl shadow-md p-6 w-full lg:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712105.png"
                  alt="AI"
                  className="w-8 h-8"
                />
                <h3 className="font-semibold text-gray-900">
                  nomo AI index (NMAI)
                </h3>
              </div>
              <p className="text-lg font-bold mt-1">$353.36</p>
              <p className="text-green-600 text-sm font-medium">
                +1.15% (+$4.03)
              </p>
            </div>

            <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-md">
              🎯 Target price, 7 days <br />
              <span className="font-semibold">$353.44 (+0.02%)</span>
            </div>
          </div>

          <div className="h-48">
            <Line data={data} options={options} />
          </div>

          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>Simple</span>
            <span>Pro</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:opacity-90 transition">
        Join nomo
      </button>
    </section>
    <ProcessFlow />
    </>
    
  );
};

export default AISection;
