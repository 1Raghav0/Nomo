"use client";
import Image from "next/image";

export default function EarningsSeason() {
  const months = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December",
  ];

  const quarters = [
    {
      name: "Quarter 4",
      color: "bg-[#0051FF]",
      top: "-top-10",
      month: "January",
    },
    {
      name: "Quarter 1",
      color: "bg-[#0A142F]",
      top: "top-8",
      month: "April",
    },
    {
      name: "Quarter 2",
      color: "bg-[#7A2FF7]",
      top: "top-20",
      month: "July",
    },
    {
      name: "Quarter 3",
      color: "bg-[#0094A6]",
      top: "top-12",
      month: "October",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0A142F] mb-4">
          What is <span className="text-[#0051FF]">Earnings season?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-16">
          Earnings season occurs quarterly when companies release their financial results for the past three months.
          This period is crucial for investors as it provides a clear picture of a company’s performance and financial health.
        </p>

        {/* Timeline Container */}
        <div className="relative overflow-x-auto md:overflow-visible">
          <div className="flex md:justify-between md:flex-nowrap flex-wrap md:space-x-0 space-y-8 md:space-y-0 w-full min-w-[800px] md:min-w-0">
            {months.map((month, index) => {
              const quarter = quarters.find((q) => q.month === month);
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center flex-1 text-center"
                >
                  {/* Month Label */}
                  <span className="text-gray-400 text-sm md:text-base font-medium mb-2 whitespace-nowrap">
                    {month}
                  </span>

                  {/* Dotted Vertical Line */}
                  <div className="relative w-px h-56 border-r border-dotted border-gray-300">
                    {quarter && (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 ${quarter.top}`}
                      >
                        <div
                          className={`flex items-center gap-3 px-5 py-3 rounded-2xl shadow-lg text-white ${quarter.color}`}
                        >
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <span className="text-[#0A142F] font-bold text-base">
                              m
                            </span>
                          </div>
                          <span className="font-medium text-sm md:text-base">
                            {quarter.name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
