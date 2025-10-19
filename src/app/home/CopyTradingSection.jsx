// import React from "react";

// const CopyTradingSection = () => {
//   const traders = [
//     {
//       name: "Josef Rivan",
//       profit: "+11.13%",
//       amount: "$11,320",
//       country: "🇩🇪",
//       copy: true,
//       img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
//     },
//     {
//       name: "Emily Miller",
//       profit: "+14.26%",
//       amount: "$39,502",
//       country: "🇺🇸",
//       copy: true,
//       img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
//     },
//     {
//       name: "Ben Danner",
//       profit: "+12.91%",
//       amount: "$1,202,571",
//       country: "🇬🇧",
//       copy: true,
//       img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
//     },
//     {
//       name: "Olivia Kim",
//       profit: "+15.71%",
//       amount: "$16,715",
//       country: "🇰🇷",
//       copy: true,
//       img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
//     },
//     {
//       name: "Nader Sbona",
//       profit: "+18.11%",
//       amount: "$159,634",
//       country: "🇪🇬",
//       copy: false,
//       img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
//     },
//     {
//       name: "Ben Brokly",
//       profit: "+13.20%",
//       amount: "$29,830",
//       country: "🇨🇦",
//       copy: false,
//       img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
//     },
//   ];

//   return (
//     <section className="w-full bg-gradient-to-r from-[#001C3E] to-[#010F27] text-white py-16 px-4 md:px-10">
//       {/* Main content */}
//       <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl h-[450px] mx-auto gap-10">
//         {/* Left Section */}
//         <div className="flex-1 text-center lg:text-left space-y-4">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             What is <span className="text-[#00a2ff]">nomo</span> copytrading?
//           </h2>
//           <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
//             With <span className="text-[#00a2ff]">nomo</span> copy trading you can automatically copy
//             the moves of top investors who have already mastered their trading strategies.
//           </p>
//           <button className="mt-4 bg-[#005CFF] hover:bg-[#006dff] px-8 py-3 rounded-full font-semibold transition">
//             Join Now
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="flex-1">
//               <img
//                 src="./copytrader-preview.jpg"
//                 alt=""
//                 className="object-cover w-full  sm:h-48 opacity-90 group-hover:opacity-100 transition"
//               />
//               </div>

//             </div>
          

//       {/* Bottom Section */}
//       <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-6xl mx-auto gap-6 bg-blue-500">
//         <div className="text-sm text-gray-300 flex items-center gap-2">
//           💬 Share your support
//         </div>

//         <div className="flex items-center gap-4">
//           <button className="bg-white text-[#001C3E] font-medium px-4 py-2 rounded-md shadow-md hover:opacity-90 transition">
//             Review us on <span className="text-green-500 font-semibold">★ Trustpilot</span>
//           </button>
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-green-400"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CopyTradingSection;





const CopyTradingSection = () => {


  return (
    <>
    <section className="w-full bg-gradient-to-r from-[#001C3E] to-[#010F27] text-white pt-16 px-4 md:px-10">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl h-[450px] mx-auto gap-10 overflow-hidden rounded-xl">
        
        {/* Left Section */}
        <div className="flex-  text-center lg:text-left space-y-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            What is <span className="text-[#00a2ff]">nomo</span> copytrading?
          </h2>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            With <span className="text-[#00a2ff]">nomo</span> copy trading you can automatically copy
            the moves of top investors who have already mastered their trading strategies.
          </p>
          <button className="mt-4 bg-[#005CFF] hover:bg-[#006dff] px-8 py-3 rounded-full font-semibold transition">
            Join Now
          </button>
        </div>

        {/* Right Section (Full Cover Image) */}
        <div className="flex-1 relative h-full w-full">
          <img
            src="./copytrader-preview.jpg"
            alt="Copy trader preview"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
    {/* Bottom Section */}
      <div className="px-16 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full mx-auto gap-6 bg-blue-500">
        <div className="text-xl text-gray-300 flex items-center gap-2">
          💬 Share your support
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white text-[#001C3E] font-medium px-4 py-2 rounded-md shadow-md hover:opacity-90 transition">
            Review us on <span className="text-green-500 font-semibold">★ Trustpilot</span>
          </button>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-green-400"></div>
      </div>
    </>
    
    
  );
};

export default CopyTradingSection;
