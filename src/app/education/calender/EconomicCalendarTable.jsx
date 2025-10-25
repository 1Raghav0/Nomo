"use client";
import Image from "next/image";

const calendarData = [
  { time: "All day", flag: "/flags/sgd.png", currency: "SGD", event: "Deepavali" },
  { time: "All day", flag: "/flags/inr.png", currency: "INR", event: "Diwali" },
  {
    time: "3:15",
    flag: "/flags/nzd.png",
    currency: "NZD",
    event: "CPI q/q",
    actual: "1.0%",
    forecast: "0.8%",
    previous: "0.5%",
    color: "text-green-600",
  },
  {
    time: "3:15",
    flag: "/flags/nzd.png",
    currency: "NZD",
    event: "CPI y/y",
    actual: "3.0%",
    forecast: "2.9%",
    previous: "2.7%",
    color: "text-green-600",
  },
  {
    time: "7:30",
    flag: "/flags/cny.png",
    currency: "CNY",
    event: "Retail Sales y/y",
    actual: "3.0%",
    forecast: "3.8%",
    previous: "3.4%",
    color: "text-red-600",
  },
  {
    time: "7:30",
    flag: "/flags/cny.png",
    currency: "CNY",
    event: "Industrial Production y/y",
    actual: "6.5%",
    forecast: "4.4%",
    previous: "5.2%",
    color: "text-green-600",
  },
  {
    time: "7:30",
    flag: "/flags/cny.png",
    currency: "CNY",
    event: "Fixed Asset Investment y/y",
    actual: "-0.5%",
    forecast: "0.4%",
    previous: "0.5%",
    color: "text-red-600",
  },
  {
    time: "7:30",
    flag: "/flags/cny.png",
    currency: "CNY",
    event: "Industrial Production YTD y/y",
    actual: "6.2%",
    forecast: "6.2%",
    previous: "-",
  },
  {
    time: "7:30",
    flag: "/flags/cny.png",
    currency: "CNY",
    event: "Retail Sales YTD y/y",
    actual: "4.5%",
    forecast: "4.6%",
    previous: "-",
  },
];

export default function EconomicCalendarTable() {
  return (
    <section className="w-full bg-white py-6 px-3 md:px-8">
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-md shadow-sm overflow-hidden text-sm">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-50 px-3 py-2 border-b text-gray-700 text-xs">
          <span className="font-medium">20 - 26 Oct, 2025</span>
          <span>Current time: 18:30 (GMT +5:30)</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-gray-700 text-xs">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Time</th>
                <th className="px-3 py-2 text-left font-medium">Currency</th>
                <th className="px-3 py-2 text-left font-medium">Event</th>
                <th className="px-3 py-2 text-left font-medium">Actual</th>
                <th className="px-3 py-2 text-left font-medium">Forecast</th>
                <th className="px-3 py-2 text-left font-medium">Previous</th>
              </tr>
            </thead>
            <tbody>
              {calendarData.map((row, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition">
                  <td className="px-3 py-2">{row.time}</td>
                  <td className="px-3 py-2 flex items-center gap-1">
                    {row.flag && (
                      <Image
                        src={row.flag}
                        alt={row.currency}
                        width={16}
                        height={12}
                        className="rounded-sm"
                      />
                    )}
                    {row.currency}
                  </td>
                  <td className="px-3 py-2">{row.event}</td>
                  <td className={`px-3 py-2 font-medium ${row.color || ""}`}>
                    {row.actual || "-"}
                  </td>
                  <td className="px-3 py-2">{row.forecast || "-"}</td>
                  <td className="px-3 py-2">{row.previous || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-3 py-2 border-t text-blue-600 text-xs cursor-pointer hover:underline">
          Economic Calendar
        </div>
      </div>
    </section>
  );
}
