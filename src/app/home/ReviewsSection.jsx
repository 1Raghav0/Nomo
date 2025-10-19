"use client";
import React, { useRef } from "react";

const ReviewsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full flex flex-col lg:flex-row bg-white py-10 px-5 lg:px-16">
      {/* Left Section */}
      <div className="lg:w-[15%] w-full flex flex-col justify-center items-center mb-8 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-3">Excellent</h2>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-5 h-5 bg-green-500 rounded-sm"></div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-2">Based on 308 reviews</p>
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Trustpilot_logo_2022.svg"
            alt="Trustpilot"
            className="h-6"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative lg:w-[75%] w-full lg:ml-10">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hidden lg:block"
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 "
        >
          {[
            {
              title: "QUE LE SUBAN EL SUELDO A RAUL EXCELENTE SERVICIO",
              text: "Excelente servicio y atención personalizada. Muy recomendado.",
              author: "Leyra Dapabille, October 6",
            },
            {
              title: "Estoy muy feliz",
              text: "Tuve muchas experiencias malas en otros lugares y aquí es muy diferente.",
              author: "Mariana Ortiz, September 5",
            },
            {
              title: "Sin comisiones para acciones grandes",
              text: "Me sorprendió enterarme de esto también. No cobran ningún tarifa para grandes montos.",
              author: "Nadia Avilair, August 30",
            },
            {
              title: "QUE LE SUBAN EL SUELDO A RAUL EXCELENTE SERVICIO",
              text: "Excelente servicio y atención personalizada. Muy recomendado.",
              author: "Leyra Dapabille, October 6",
            },
            {
              title: "Estoy muy feliz",
              text: "Tuve muchas experiencias malas en otros lugares y aquí es muy diferente.",
              author: "Mariana Ortiz, September 5",
            },
            {
              title: "Sin comisiones para acciones grandes",
              text: "Me sorprendió enterarme de esto también. No cobran ningún tarifa para grandes montos.",
              author: "Nadia Avilair, August 30",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="min-w-[250px] w-[320px] bg-gray-50 p-5 rounded-lg border border-gray-200 flex-shrink-0"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-green-500 rounded-sm"></div>
                ))}
              </div>
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{review.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{review.text}</p>
              <p className="text-xs text-gray-500">{review.author}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hidden lg:block"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
