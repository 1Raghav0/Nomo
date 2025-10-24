import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function HighImpactEvents() {
  const events = [
    {
      id: 1,
      image:
        "https://nomotrade.com/_next/image?url=https%3A%2F%2Fapi-blog.nomotrade.com%2Fuploads%2Fus_fed_interest_rate_2d6d2ddaff.jpg&w=750&q=75",
      date: "30.10.25 | 00:30",
      title: "US FED Interest Rate Decisions and Fed Conference",
      description:
        "The Federal Reserve's interest rate decision sets the tone for U.S. monetary policy, influencing economic growth, inflation, and employment, with the Fed Conference providing further insights into the central bank's outlook.",
      assets: "USD, XAU, US Stocks and Indices",
      assetIcon:
        "",
    },
    {
      id: 2,
      image:
        "https://nomotrade.com/_next/image?url=https%3A%2F%2Fapi-blog.nomotrade.com%2Fuploads%2Fjp_boj_monetary_statement_72d3f5f5e8.jpg&w=750&q=75",
      date: "30.10.25 | 09:15",
      title: "JP BOJ Monetary Statement and Press Conference",
      description:
        "The Bank of Japan's monetary statement and press conference outline its monetary policy stance and economic outlook, influencing the yen and broader financial markets.",
      assets: "JPY and NIKKEI225",
      assetIcon:
        "https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Fevents%2Fjpeventicon.avif&w=64&q=75",
    },
    {
      id: 3,
      image:
        "https://nomotrade.com/_next/image?url=https%3A%2F%2Fapi-blog.nomotrade.com%2Fuploads%2Feu_ecb_main_refinancing_78c2e6059b.jpg&w=750&q=75",
      date: "30.10.25 | 18:15",
      title: "EU ECB Main Refinancing Rate Decision",
      description:
        "The European Central Bank's decision on the main refinancing rate directly impacts borrowing costs in the Eurozone, influencing inflation and economic growth.",
      assets: "EUR, DAX, CAC and EU Stocks",
      assetIcon:
        "https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Fevents%2Feueventicon.avif&w=64&q=75",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 lg:px-16 text-center">
      {/* Section Header */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-10">
        <button className="p-3 border rounded-xl hover:bg-gray-100">
          <BsChevronLeft className="text-gray-600 text-lg" />
        </button>

        <div>
          <h2 className="text-3xl font-bold text-[#0a0a23] mb-2">
            Incoming high-impact events
          </h2>
          <p className="text-gray-500 text-sm">
            Don’t miss the most important and impactful events happening in the
            financial markets right now
          </p>
        </div>

        <button className="p-3 border rounded-xl hover:bg-gray-100">
          <BsChevronRight className="text-gray-600 text-lg" />
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="text-left p-6 flex flex-col flex-grow">
              {/* Date + Tag */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-gray-500 text-sm">
                  <FiCalendar className="mr-2" />
                  {event.date}
                </div>
                <span className="text-[13px] font-medium bg-red-100 text-red-600 px-3 py-1 rounded-lg">
                  High impact
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#0a0a23] mb-2 leading-snug text-[1.05rem]">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm flex-grow">
                {event.description}
              </p>

              {/* Assets */}
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-1">
                  Assets potentially to be affected
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={event.assetIcon}
                    alt="Asset Icon"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <p className="text-[#0a0a23] font-medium text-sm">
                    {event.assets}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
