import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

export default function EarningsReports() {
  const reports = [
    {
      id: 1,
      name: "PayPal",
      symbol: "PYPL",
      quarter: "Q3 2025",
      date: "Monday, October 27, 2025",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      bg: "bg-[#EAF2FF]",
      innerBg: "bg-gradient-to-b from-[#0070E0] to-[#005BBB]",
    },
    {
      id: 2,
      name: "Microsoft",
      symbol: "MSFT",
      quarter: "Q1 2026",
      date: "Tuesday, October 28, 2025",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      bg: "bg-[#E2F3FF]",
      innerBg: "bg-white",
    },
    {
      id: 3,
      name: "Alphabet",
      symbol: "GOOGL",
      quarter: "Q3 2025",
      date: "Tuesday, October 28, 2025",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      bg: "bg-[#DDEBFF]",
      innerBg: "bg-white",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 lg:px-16">
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-12">
        {/* Left Arrow */}
        <button className="p-3 border rounded-2xl hover:bg-gray-100">
          <BsChevronLeft className="text-gray-600 text-lg" />
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a23] text-center">
          The upcoming earnings reports of the largest companies
        </h2>

        {/* Right Arrow */}
        <button className="p-3 border rounded-2xl hover:bg-gray-100">
          <BsChevronRight className="text-gray-600 text-lg" />
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {reports.map((report) => (
          <div
            key={report.id}
            className={`w-full md:w-1/3 ${report.bg} rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm transition-transform duration-300 hover:scale-[1.02]`}
          >
            {/* Left Section - Logo */}
            <div
              className={`rounded-full ${report.innerBg} p-3 w-24 h-24 flex items-center justify-center shadow-inner`}
            >
              <Image
                src={report.logo}
                alt={report.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Right Section - Info */}
            <div className="flex-1 text-left mt-4 md:mt-0 md:ml-6">
              <h3 className="text-lg font-semibold text-[#0a0a23]">
                {report.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{report.symbol}</p>

              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-lg">
                Stocks
              </span>

              <div className="mt-4 bg-white/80 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3">
                <FiCalendar className="text-gray-500" />
                <div>
                  <p className="text-sm font-semibold text-[#0a0a23]">
                    {report.quarter}
                  </p>
                  <p className="text-gray-500 text-xs">{report.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
