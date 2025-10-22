// "use client";
// import React, { useState, useMemo } from "react";

// const categories = [
//   "Digital currencies",
//   "Energy",
//   "Currencies",
//   "Index",
//   "Metals",
//   "US Shares derivatives",
// ];

// const digitalCurrenciesData = [
//   {
//     asset: "Cardano vs US Dollar (ADAUSD)",
//     contractSize: 100,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 192,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Avalanche vs US Dollar (AVAXUSD)",
//     contractSize: 100,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Binance Coin vs US Dollar (BNBUSD)",
//     contractSize: 10,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 209,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Bitcoin (BTCUSD)",
//     contractSize: 1,
//     leverage: 50,
//     swap: "-29%/-29%",
//     spread: 1600,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Dogecoin vs US Dollar (DOGEUSD)",
//     contractSize: 10000,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Polkadot vs US Dollar (DOTUSD)",
//     contractSize: 100,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Ethereum (ETHUSD)",
//     contractSize: 1,
//     leverage: 50,
//     swap: "-29%/-29%",
//     spread: 211,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Chainlink vs US Dollar (LINKUSD)",
//     contractSize: 100,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Litecoin (LTCUSD)",
//     contractSize: 10,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 409,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Pepe vs US Dollar (PEPEUSD)",
//     contractSize: 10000000,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Polygon vs US Dollar (POLUSD)",
//     contractSize: 1000,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Shiba Inu vs US Dollar (SHIBUSD)",
//     contractSize: 1000000,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Solana vs US Dollar (SOLUSD)",
//     contractSize: 10,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 89,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "SUI vs US Dollar (SUIUSD)",
//     contractSize: 100,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Toncoin vs US Dollar (TONUSD)",
//     contractSize: 100,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 167,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "TRON vs US Dollar (TRXUSD)",
//     contractSize: 100,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 182,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
//   {
//     asset: "Ripple (XRPUSD)",
//     contractSize: 1000,
//     leverage: 25,
//     swap: "-29%/-29%",
//     spread: 71,
//     hours: "Sun /Fri",
//     tradingTime: "00:00-21:55, 22:05-24:00",
//   },
// ];

// const energyData = [
//   {
//     asset: "Oil - US Crude",
//     symbol: "WTIUSD",
//     contractSize: "1000",
//     leverage: "20",
//     swap: "0.5018/-1.98",
//     spread: "0.019",
//     openClose: "Sun 22:05 /Fri 20:55",
//     tradingTime: "00:00-20:55, 22:05-24:00",
//   },
//   {
//     asset: "Oil - Brent Crude",
//     symbol: "BRNUSD",
//     contractSize: "1000",
//     leverage: "20",
//     swap: "12.96/-31.7988",
//     spread: "0.024",
//     openClose: "Sun 22:05 /Fri 20:55",
//     tradingTime: "00:05-20:55",
//   },
//   {
//     asset: "Natural Gas",
//     symbol: "NGCUSD",
//     contractSize: "10000",
//     leverage: "20",
//     swap: "-20.4638/6.6809",
//     spread: "0.018",
//     openClose: "Sun 22:05 /Fri 20:40",
//     tradingTime: "00:00-20:55, 22:05-24:00",
//   },
// ];


// const MarketTable = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Digital currencies");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 7;

//   // Select category data (for now only digitalCurrenciesData)
//   const data = useMemo(() => {
//     switch (selectedCategory) {
//       case "Digital currencies":
//         return digitalCurrenciesData;
//       default:
//         return [];
//     }
//   }, [selectedCategory]);

//   // Search filter
//   const filteredData = data.filter((item) =>
//     item.asset.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const paginatedData = filteredData.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setPage(1);
//     setSearchTerm("");
//   };

//   return (
//     <div className="p-4 md:p-8 max-w-7xl mx-auto">
//       {/* Filter + Search */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
//         <select
//           className="border px-3 py-2 rounded-lg bg-white text-gray-800 shadow-sm"
//           value={selectedCategory}
//           onChange={(e) => handleCategoryChange(e.target.value)}
//         >
//           {categories.map((cat) => (
//             <option key={cat}>{cat}</option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Search by asset name or ticker..."
//           className="w-full md:w-1/2 border px-4 py-2 rounded-lg shadow-sm"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto shadow rounded-2xl border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-4 py-3 text-left font-semibold">Asset</th>
//               <th className="px-4 py-3 text-left font-semibold">Contract Size</th>
//               <th className="px-4 py-3 text-left font-semibold">Leverage Max</th>
//               <th className="px-4 py-3 text-left font-semibold">Swap (long/short)</th>
//               <th className="px-4 py-3 text-left font-semibold">Spread</th>
//               <th className="px-4 py-3 text-left font-semibold">Open/Close Hours</th>
//               <th className="px-4 py-3 text-left font-semibold">Trading Time</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {paginatedData.length ? (
//               paginatedData.map((item, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-4 py-3">{item.asset}</td>
//                   <td className="px-4 py-3">{item.contractSize}</td>
//                   <td className="px-4 py-3">{item.leverage}</td>
//                   <td className="px-4 py-3">{item.swap}</td>
//                   <td className="px-4 py-3">{item.spread}</td>
//                   <td className="px-4 py-3">{item.hours}</td>
//                   <td className="px-4 py-3">{item.tradingTime}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td className="px-4 py-4 text-center text-gray-500" colSpan={7}>
//                   No data found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-3 mt-6">
//           <button
//             onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//             disabled={page === 1}
//             className="px-3 py-1 border rounded-lg disabled:opacity-50"
//           >
//             ‹
//           </button>
//           <span className="text-gray-700">
//             Page {page} of {totalPages}
//           </span>
//           <button
//             onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={page === totalPages}
//             className="px-3 py-1 border rounded-lg disabled:opacity-50"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MarketTable;



// "use client";
// import React, { useState } from "react";

// const TableWithFilters = () => {
//   // ---- Data ----
//   const digitalCurrencies = [
//     { asset: "Cardano vs US Dollar", ticker: "ADAUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 192, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Avalanche vs US Dollar", ticker: "AVAXUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Binance Coin vs US Dollar", ticker: "BNBUSD", contractSize: 10, leverageMax: 25, swap: "-29%/-29%", spread: 209, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Bitcoin", ticker: "BTCUSD", contractSize: 1, leverageMax: 50, swap: "-29%/-29%", spread: 1600, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Dogecoin vs US Dollar", ticker: "DOGEUSD", contractSize: 10000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Polkadot vs US Dollar", ticker: "DOTUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Ethereum", ticker: "ETHUSD", contractSize: 1, leverageMax: 50, swap: "-29%/-29%", spread: 211, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Chainlink vs US Dollar", ticker: "LINKUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Litecoin", ticker: "LTCUSD", contractSize: 10, leverageMax: 25, swap: "-29%/-29%", spread: 409, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Pepe vs US Dollar", ticker: "PEPEUSD", contractSize: 10000000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Polygon vs US Dollar", ticker: "POLUSD", contractSize: 1000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Shiba Inu vs US Dollar", ticker: "SHIBUSD", contractSize: 1000000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Solana vs US Dollar", ticker: "SOLUSD", contractSize: 10, leverageMax: 25, swap: "-29%/-29%", spread: 89, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "SUI vs US Dollar", ticker: "SUIUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Toncoin vs US Dollar", ticker: "TONUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "TRON vs US Dollar", ticker: "TRXUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 182, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//     { asset: "Ripple", ticker: "XRPUSD", contractSize: 1000, leverageMax: 25, swap: "-29%/-29%", spread: 71, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
//   ];

//   const energy = [
//     { asset: "Oil - US Crude", ticker: "WTIUSD", contractSize: 1000, leverageMax: 20, swap: "0.5018/-1.98", spread: 0.019, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:00-20:55, 22:05-24:00" },
//     { asset: "Oil - Brent Crude", ticker: "BRNUSD", contractSize: 1000, leverageMax: 20, swap: "12.96/-31.7988", spread: 0.024, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:05-20:55" },
//     { asset: "Natural Gas", ticker: "NGCUSD", contractSize: 10000, leverageMax: 20, swap: "-20.4638/6.6809", spread: 0.018, hours: "Sun 22:05 /Fri 20:40", tradingTime: "00:00-20:55, 22:05-24:00" },
//   ];

//   // ---- States ----
//   const [selectedCategory, setSelectedCategory] = useState("Digital currencies");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 7;

//   const categories = [
//     "Digital currencies",
//     "Energy",
//     "Currencies",
//     "Index",
//     "Metals",
//     "US Shares derivatives",
//   ];

//   // ---- Get data based on category ----
//   const data =
//     selectedCategory === "Energy"
//       ? energy
//       : selectedCategory === "Digital currencies"
//       ? digitalCurrencies
//       : [];

//   // ---- Filter + Pagination ----
//   const filteredData = data.filter((item) =>
//     item.asset.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const currentData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // ---- Render ----
//   return (
//     <div className="p-4 md:p-8">
//       {/* Filter & Search */}
//       <div className="flex flex-col md:flex-row gap-3 mb-6 items-center">
//         <select
//           value={selectedCategory}
//           onChange={(e) => {
//             setSelectedCategory(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="border rounded-md px-4 py-2 w-full md:w-auto"
//         >
//           {categories.map((cat) => (
//             <option key={cat}>{cat}</option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder='Search by asset name or ticker, e.g. "Bitcoin" or "EUR/USD"'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border rounded-md px-4 py-2 w-full"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto border rounded-lg">
//         <table className="min-w-full border-collapse text-sm md:text-base">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               {[
//                 "Asset",
//                 "Contract size",
//                 "Leverage max",
//                 "Swap (long/short)",
//                 "Spread",
//                 "Open/close hours (GMT+0)",
//                 "Trading time (GMT+0)",
//               ].map((heading) => (
//                 <th key={heading} className="text-left px-4 py-3 border-b">
//                   {heading}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((item, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-4 py-3 border-b font-medium">
//                   {item.asset}
//                   <div className="text-gray-500 text-sm">{item.ticker}</div>
//                 </td>
//                 <td className="px-4 py-3 border-b">{item.contractSize}</td>
//                 <td className="px-4 py-3 border-b">{item.leverageMax}</td>
//                 <td className="px-4 py-3 border-b">{item.swap}</td>
//                 <td className="px-4 py-3 border-b">{item.spread}</td>
//                 <td className="px-4 py-3 border-b">{item.hours}</td>
//                 <td className="px-4 py-3 border-b">{item.tradingTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center mt-6 gap-2">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((p) => p - 1)}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           ‹
//         </button>
//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-3 py-1 border rounded ${
//               currentPage === i + 1 ? "bg-blue-600 text-white" : ""
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((p) => p + 1)}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           ›
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TableWithFilters;

"use client";
import React, { useState } from "react";

const TableWithFilters = () => {
  // ---- Data ----
const digitalCurrencies = [
    { asset: "Cardano vs US Dollar", ticker: "ADAUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 192, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Avalanche vs US Dollar", ticker: "AVAXUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Binance Coin vs US Dollar", ticker: "BNBUSD", contractSize: 10, leverageMax: 25, swap: "-29%/-29%", spread: 209, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Bitcoin", ticker: "BTCUSD", contractSize: 1, leverageMax: 50, swap: "-29%/-29%", spread: 1600, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Dogecoin vs US Dollar", ticker: "DOGEUSD", contractSize: 10000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Polkadot vs US Dollar", ticker: "DOTUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Ethereum", ticker: "ETHUSD", contractSize: 1, leverageMax: 50, swap: "-29%/-29%", spread: 211, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Chainlink vs US Dollar", ticker: "LINKUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Litecoin", ticker: "LTCUSD", contractSize: 10, leverageMax: 25, swap: "-29%/-29%", spread: 409, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Pepe vs US Dollar", ticker: "PEPEUSD", contractSize: 10000000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Polygon vs US Dollar", ticker: "POLUSD", contractSize: 1000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Shiba Inu vs US Dollar", ticker: "SHIBUSD", contractSize: 1000000, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Solana vs US Dollar", ticker: "SOLUSD", contractSize: 10, leverageMax: 25, swap: "-29%/-29%", spread: 89, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "SUI vs US Dollar", ticker: "SUIUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Toncoin vs US Dollar", ticker: "TONUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 167, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "TRON vs US Dollar", ticker: "TRXUSD", contractSize: 100, leverageMax: 25, swap: "-29%/-29%", spread: 182, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
    { asset: "Ripple", ticker: "XRPUSD", contractSize: 1000, leverageMax: 25, swap: "-29%/-29%", spread: 71, hours: "Sun /Fri", tradingTime: "00:00-21:55, 22:05-24:00" },
  ];

  const energy = [
    { asset: "Oil - US Crude", ticker: "WTIUSD", contractSize: 1000, leverageMax: 20, swap: "0.5018/-1.98", spread: 0.019, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:00-20:55, 22:05-24:00" },
    { asset: "Oil - Brent Crude", ticker: "BRNUSD", contractSize: 1000, leverageMax: 20, swap: "12.96/-31.7988", spread: 0.024, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:05-20:55" },
    { asset: "Natural Gas", ticker: "NGCUSD", contractSize: 10000, leverageMax: 20, swap: "-20.4638/6.6809", spread: 0.018, hours: "Sun 22:05 /Fri 20:40", tradingTime: "00:00-20:55, 22:05-24:00" },
  ];

  const currencies = [
    { asset: "Australian Dollar vs Canadian Dollar", ticker: "AUDCAD", contractSize: 100000, leverageMax: 500, swap: "1.1949/-6.6279", spread: 0.00019, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "Australian Dollar vs Swiss Franc", ticker: "AUDCHF", contractSize: 100000, leverageMax: 500, swap: "3.4422/-8.3802", spread: 0.00017, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "Australian Dollar vs Japanese Yen", ticker: "AUDJPY", contractSize: 100000, leverageMax: 200, swap: "5.4959/-13.6463", spread: 0.024, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "Australian Dollar vs New Zealand Dollar", ticker: "AUDNZD", contractSize: 100000, leverageMax: 500, swap: "0.1358/-5.2844", spread: 0.00019, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "Australian Dollar vs US Dollar", ticker: "AUDUSD", contractSize: 100000, leverageMax: 500, swap: "-2.2227/0.0214", spread: 0.00009, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "Canadian Dollar vs Japanese Yen", ticker: "CADJPY", contractSize: 100000, leverageMax: 500, swap: "3.2995/-10.0846", spread: 0.021, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "Euro vs US Dollar", ticker: "EURUSD", contractSize: 100000, leverageMax: 500, swap: "-11.2487/4.2076", spread: 0.00008, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "Great Britain Pound vs Japanese Yen", ticker: "GBPJPY", contractSize: 100000, leverageMax: 500, swap: "12.3417/-29.72", spread: 0.024, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "US Dollar vs Swiss Franc", ticker: "USDCHF", contractSize: 100000, leverageMax: 500, swap: "3.3836/-7.4156", spread: 0.0001, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
    { asset: "US Dollar vs Canadian Dollar", ticker: "USDCAD", contractSize: 100000, leverageMax: 500, swap: "2.1973/-5.5608", spread: 0.00012, hours: "Sun 21:05 /Fri 20:55", tradingTime: "00:00-20:55, 21:05-24:00" },
  ];

  const index = [
    { asset: "US 500 Index", ticker: "SPXUSD", contractSize: 1, leverageMax: 50, swap: "-169.765/26.7479", spread: 0.5, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:00-20:55, 22:05-24:00" },
    { asset: "EURO 50 Index", ticker: "SX5EEUR", contractSize: 1, leverageMax: 50, swap: "-94.491/-11.1776", spread: 0.64, hours: "Sun Mon 06:05 /Fri Fri 19:55", tradingTime: "07:05-20:55" },
    { asset: "US 100 Index", ticker: "NDXUSD", contractSize: 1, leverageMax: 50, swap: "-666.8343/127.0591", spread: 18, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:00-20:55, 22:05-24:00" },
    { asset: "US 30 Index", ticker: "DJIUSD", contractSize: 1, leverageMax: 50, swap: "-1257.3274/239.5722", spread: 2.14, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:00-20:55, 22:05-24:00" },
    { asset: "Germany 40 Index", ticker: "DAXEUR", contractSize: 1, leverageMax: 50, swap: "-280.539/23.2596", spread: 2.28, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:00-20:55, 22:05-24:00" },
    { asset: "UK 100 Index", ticker: "FTSEGBP", contractSize: 1, leverageMax: 50, swap: "-115.015/4.2244", spread: 1.35, hours: "Sun 22:05 /Fri 20:55", tradingTime: "00:00-20:55, 22:05-24:00" },
  ];

  const us = [
  {
    "asset": "Apple Inc",
    "ticker": "AAPL",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-7.264/1.3841",
    "spread": 0.19,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Accenture",
    "ticker": "ACN",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-7.3907/1.4082",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Adobe",
    "ticker": "ADBE",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-5.4783/1.0438",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Advanced Microdevices",
    "ticker": "AMD",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-15.7958/3.0097",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Amazon.Com Inc",
    "ticker": "AMZN",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-10.5419/2.0087",
    "spread": 0.16,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "American Express",
    "ticker": "AXP",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-13.0812/2.4925",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Boeing Company",
    "ticker": "BA",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-6.6712/1.2711",
    "spread": 0.21,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Bank of America Corporation",
    "ticker": "BAC",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-1.5728/0.2997",
    "spread": 0.08,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "BlackRock",
    "ticker": "BLK",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-2.0772/0.3958",
    "spread": 1.2,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Comcast",
    "ticker": "CMCSA",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-4.951/0.9434",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Costco",
    "ticker": "COST",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-3.5768/0.6815",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Salesforce",
    "ticker": "CRM",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-24.1753/4.6064",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Cisco Systems",
    "ticker": "CSCO",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-13.0867/2.4935",
    "spread": 0.08,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Chevron Corporation",
    "ticker": "CVX",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-7.9939/1.5232",
    "spread": 0.23,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Walt Disney Company",
    "ticker": "DIS",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-9.5918/1.8276",
    "spread": 0.07,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Alphabet Inc",
    "ticker": "GOOG",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-2.0567/0.3919",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Home Depot",
    "ticker": "HD",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-18.2297/3.4735",
    "spread": 0.37,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "International Business Machines",
    "ticker": "IBM",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-9.414/1.7938",
    "spread": 0.22,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Johnson & Johnson",
    "ticker": "JNJ",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-37.2612/7.0998",
    "spread": 0.16,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "JPMorgan Chase & Co",
    "ticker": "JPM",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-2.2575/0.4301",
    "spread": 0.24,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Coca-Cola Company",
    "ticker": "KO",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-9.5169/1.8134",
    "spread": 0.09,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Mastercard",
    "ticker": "MA",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-4.3456/0.828",
    "spread": 0.32,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "McDonald`s",
    "ticker": "MCD",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-4.9061/0.9348",
    "spread": 0.28,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Meta Platforms",
    "ticker": "META",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-0.9105/0.1735",
    "spread": 0.59,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Morgan Stanley",
    "ticker": "MS",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-1.3574/0.2586",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Microsoft",
    "ticker": "MSFT",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-3.2088/0.6114",
    "spread": 0.39,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Netflix",
    "ticker": "NFLX",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-3.5594/0.6782",
    "spread": 1.21,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Nike",
    "ticker": "NKE",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-5.4258/1.0338",
    "spread": 0.11,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Nvidia",
    "ticker": "NVDA",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-7.8022/1.4866",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Oracle Corporation",
    "ticker": "ORCL",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-29.5487/5.6302",
    "spread": 0.16,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Pepsico",
    "ticker": "PEP",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-7.427/1.4151",
    "spread": 0.21,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Pfizer",
    "ticker": "PFE",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-7.3737/1.405",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Procter & Gamble Company",
    "ticker": "PG",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-7.345/1.3995",
    "spread": 0.09,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Palantir Technologies",
    "ticker": "PLTR",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-10.1519/1.9344",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  },
  {
    "asset": "Philip Morris",
    "ticker": "PM",
    "contractSize": 100,
    "leverageMax": 50,
    "swap": "-4.9806/0.949",
    "spread": 0.25,
    "hours": "Sun Mon 13:35 /Fri Fri 19:56",
    "tradingTime": "13:35-19:56"
  }
];


  // ---- States ----
  const [selectedCategory, setSelectedCategory] = useState("Digital currencies");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const categories = [
    "Digital currencies",
    "Energy",
    "Currencies",
    "Index",
    "Metals",
    "US Shares derivatives",
  ];

  // ---- Get data based on category ----
  const data =
    selectedCategory === "Energy"
      ? energy
      :selectedCategory === "Index"
      ? index
      :selectedCategory === "US Shares derivatives"
      ? us
      : selectedCategory === "Currencies"
      ? currencies
      : selectedCategory === "Digital currencies"
      ? digitalCurrencies
      : [];

  // ---- Filter + Pagination ----
  const filteredData = data.filter((item) =>
    item.asset.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ---- Render ----
  return (
    <div className="p-4 md:p-8">
      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 items-center">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-200 rounded-md px-4 py-2 w-full md:w-auto"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder='Search by asset name or ticker, e.g. "Bitcoin" or "EUR/USD"'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-200 rounded-md px-4 py-2 w-full"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full border-collapse  text-sm md:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {[
                "Asset",
                "Contract size",
                "Leverage max",
                "Swap (long/short)",
                "Spread",
                "Open/close hours (GMT+0)",
                "Trading time (GMT+0)",
              ].map((heading) => (
                <th key={heading} className="text-left px-4 py-3 border-b border-gray-100">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b font-medium">
                  {item.asset}
                  <div className="text-gray-500 text-sm">{item.ticker}</div>
                </td>
                <td className="px-4 py-3 border-b">{item.contractSize}</td>
                <td className="px-4 py-3 border-b">{item.leverageMax}</td>
                <td className="px-4 py-3 border-b">{item.swap}</td>
                <td className="px-4 py-3 border-b">{item.spread}</td>
                <td className="px-4 py-3 border-b">{item.hours}</td>
                <td className="px-4 py-3 border-b">{item.tradingTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ‹
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TableWithFilters;
