"use client";
import { FiBarChart2, FiPieChart, FiTrendingUp } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";

export default function EarningsHighlights() {
  const highlights = [
    {
      icon: <FiBarChart2 className="text-blue-600 w-10 h-10" />,
      title: "Stock price impact",
      text: "Earnings reports can move stock prices significantly. Companies often see their stock prices rise or fall based on whether their results meet, exceed, or fall short of analyst expectations.",
    },
    {
      icon: <FiPieChart className="text-blue-600 w-10 h-10" />,
      title: "Financial insights",
      text: "Reports reveal key metrics like revenue, earnings per share (EPS), and profit margins, offering a snapshot of a company's financial health.",
    },
    {
      icon: <FiTrendingUp className="text-blue-600 w-10 h-10" />,
      title: "Dividends and forecasts",
      text: "Companies may announce dividends and provide future performance guidance, affecting investor decisions and market expectations.",
    },
    {
      icon: <FaChartLine className="text-blue-600 w-10 h-10" />,
      title: "Market volatility",
      text: "Stock prices can fluctuate around earnings announcements as investors react to new information and adjust their strategies.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-[#F7F9FC] p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 bg-blue-50 p-4 rounded-2xl shadow-sm flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0A142F] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
