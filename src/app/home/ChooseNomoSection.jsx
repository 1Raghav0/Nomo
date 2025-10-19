// import React, { useEffect, useRef } from "react";

// const ChooseNomoSection = () => {
//   const scrollRef = useRef(null);

//   // Smooth auto-scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;
//     const speed = 1; // scroll speed

//     const scroll = () => {
//       if (scrollContainer) {
//         scrollAmount += speed;
//         if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//           scrollAmount = 0;
//         }
//         scrollContainer.scrollLeft = scrollAmount;
//       }
//       requestAnimationFrame(scroll);
//     };

//     scroll();
//   }, []);

//   const cards = [
//     {
//       title: "Discover the power",
//       subtitle: "of social investing",
//       img: "https://cdn-icons-png.flaticon.com/512/4221/4221419.png",
//       bg: "bg-white",
//     },
//     {
//       title: "Smart investing",
//       subtitle: "into your favourite companies",
//       img: "https://cdn-icons-png.flaticon.com/512/196/196578.png",
//       bg: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
//     },
//     {
//       title: "Fast withdrawals & deposits",
//       subtitle: "instant or up to 3 hours",
//       img: "https://cdn-icons-png.flaticon.com/512/2769/2769261.png",
//       bg: "bg-gray-100",
//     },
//     {
//       title: "Easy to learn",
//       subtitle: "nomo offers you free basic online courses",
//       img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       bg: "bg-[#0A1C3E] text-white",
//     },
//     {
//       title: "Discover the power",
//       subtitle: "of social investing",
//       img: "https://cdn-icons-png.flaticon.com/512/4221/4221419.png",
//       bg: "bg-white",
//     },
//     {
//       title: "Smart investing",
//       subtitle: "into your favourite companies",
//       img: "https://cdn-icons-png.flaticon.com/512/196/196578.png",
//       bg: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
//     },
//     {
//       title: "Fast withdrawals & deposits",
//       subtitle: "instant or up to 3 hours",
//       img: "https://cdn-icons-png.flaticon.com/512/2769/2769261.png",
//       bg: "bg-gray-100",
//     },
//     {
//       title: "Easy to learn",
//       subtitle: "nomo offers you free basic online courses",
//       img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       bg: "bg-[#0A1C3E] text-white",
//     },
//   ];

//   // duplicate list to create infinite loop effect
//   const duplicatedCards = [...cards, ...cards];

//   return (
//     <section className="w-full bg-white py-16 px-4 md:px-10 overflow-hidden">
//       {/* Top Content */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Why others choose <span className="text-blue-600">nomo?</span>
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Trade the most popular world markets. Seamless and with no setbacks
//         </p>
//       </div>

//       {/* Scrollable Cards */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {duplicatedCards.map((card, index) => (
//           <div
//             key={index}
//             className={`min-w-[280px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl shadow-lg flex flex-col justify-between p-6 ${card.bg} transition-transform duration-300 hover:scale-105`}
//           >
//             <div>
//               <h3 className="text-xl font-semibold">{card.title}</h3>
//               <p className="text-sm mt-2 opacity-80">{card.subtitle}</p>
//             </div>
//             <div className="mt-6 flex justify-center">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="w-24 h-24 object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ChooseNomoSection;


import React from "react";

const ChooseNomoSection = () => {
  const cards = [
    {
      title: "Discover the power",
      subtitle: "of social investing",
      img: "img-1.avif",
      bg: "bg-white",
    },
    {
      title: "Smart investing",
      subtitle: "into your favourite companies",
      img: "img-3.avif",
      bg: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
    },
    {
      title: "Fast withdrawals & deposits",
      subtitle: "instant or up to 3 hours",
      img: "img-4.avif",
      bg: "bg-gray-100",
    },
    {
      title: "Easy to learn",
      subtitle: "nomo offers you free basic online courses",
      img: "img-5.avif",
      bg: "bg-gray-100",
    },
    {
      title: "Easy to learn",
      subtitle: "nomo offers you free basic online courses",
      img: "img-6.avif",
      bg: "bg-gray-100",
    },
  ];

  // duplicate for infinite scrolling
  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 overflow-hidden">
      {/* Top Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why others choose <span className="text-blue-600">nomo?</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Trade the most popular world markets. Seamless and with no setbacks
        </p>
      </div>

      {/* Auto-scrolling Cards */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {duplicatedCards.map((card, index) => (
            <div
              key={index}
              className={`min-w-[280px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl shadow-lg pt-4 flex flex-col gap-2 h-96 ${card.bg} transition-transform duration-300 hover:scale-105`}
            >
              <div>
                <h3 className="text-xl font-semibold text-center">{card.title}</h3>
                <p className="text-sm mt-2 opacity-80 text-center">{card.subtitle}</p>
              </div>
              <div className="mt-6 flex justify-center ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-76 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 25s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default ChooseNomoSection;
