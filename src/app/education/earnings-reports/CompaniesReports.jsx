"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const companiesData = [
  { name: "Apple", ticker: "AAPL", country: "US", date: "30/10/2025", eps: "1.74", logo: "/logos/apple.png" },
  { name: "Nvidia", ticker: "NVDA", country: "US", date: "19/10/2025", eps: "1.23", logo: "/logos/nvidia.png" },
  { name: "Microsoft Corporation", ticker: "MSFT", country: "US", date: "29/10/2025", eps: "3.65", logo: "/logos/microsoft.png" },
  { name: "Amazon", ticker: "AMZN", country: "US", date: "30/10/2025", eps: "1.57", logo: "/logos/amazon.png" },
  { name: "Alphabet Class A", ticker: "GOOG", country: "US", date: "04/11/2025", eps: "2.33", logo: "/logos/google.png" },
  { name: "Meta Platforms", ticker: "META", country: "US", date: "29/10/2025", eps: "6.74", logo: "/logos/meta.png" },
  { name: "Tesla", ticker: "TSLA", country: "US", date: "22/10/2025", eps: "0.48", logo: "/logos/tesla.png" },
  { name: "JPMorgan Chase & Co.", ticker: "JPM", country: "US", date: "14/07/2026", eps: "N/A", logo: "/logos/jpmorgan.png" },
  { name: "Visa", ticker: "V", country: "US", date: "28/10/2026", eps: "N/A", logo: "/logos/visa.png" },
  { name: "Mastercard", ticker: "MA", country: "US", date: "30/10/2025", eps: "4.3", logo: "/logos/mastercard.png" },
];

export default function CompaniesReportingSoon() {
  const [search, setSearch] = useState("");
  const filteredCompanies = companiesData.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full bg-[#f7f9fc] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0A142F]">
          Other companies <span className="text-[#0051FF]">reporting</span> soon
        </h2>

        {/* Search */}
        <div className="relative mt-6 mb-6 max-w-xs mx-auto">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-[#0051FF] outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto border border-gray-200">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Ticker</th>
                <th className="px-6 py-3 font-medium">Country</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">EPS Est.</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((c, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-3 flex items-center gap-2">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={22}
                      height={22}
                      className="rounded-full border border-gray-200"
                    />
                    {c.name}
                  </td>
                  <td className="px-6 py-3 font-medium">{c.ticker}</td>
                  <td className="px-6 py-3">{c.country}</td>
                  <td className="px-6 py-3">{c.date}</td>
                  <td className="px-6 py-3">{c.eps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm">
          <button className="border rounded-md p-1 text-gray-500 hover:text-[#0051FF]">
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`px-2 ${
                num === 1 ? "text-[#0051FF] font-medium" : "text-gray-500"
              }`}
            >
              {num}
            </button>
          ))}

          <button className="border rounded-md p-1 text-gray-500 hover:text-[#0051FF]">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
