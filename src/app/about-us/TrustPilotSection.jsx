"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TrustpilotSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -250 : 250;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const reviews = [
    {
      title: "QUE LE SUBAN EL SUELDO A RAUL EXCELENTE SERVICIO",
      text: "QUE LE SUBAN EL SUELDO A RAUL EXCELENTE SERVICIO",
      name: "Leyre Depablo",
      date: "October 4",
    },
    {
      title: "Estoy muy feliz",
      text: "Estoy muy feliz, tuve muchas experiencias malas en otros lugares y aquí es muy diferente.",
      name: "Mariana Ortiz",
      date: "September 3",
    },
    {
      title: "Sin comisiones para acciones grandes",
      text: "Me sorprendió enterarme de esto también, pero Nomo no cobra ninguna tarifa por acciones grandes.",
      name: "Naldo Alvillar",
      date: "August 30",
    },
    {
      title: "Excelente app",
      text: "Fácil de usar, muy intuitiva y confiable.",
      name: "Andrea Pérez",
      date: "July 12",
    },
    {
      title: "Muy buena experiencia",
      text: "El servicio al cliente fue excelente y la plataforma muy sencilla de utilizar.",
      name: "Carlos Ramírez",
      date: "June 19",
    },
    {
      title: "Simple y eficiente",
      text: "Me encanta lo fácil que es operar aquí. Todo está bien explicado y sin tarifas ocultas.",
      name: "Laura González",
      date: "May 25",
    },
    {
      title: "Buen soporte técnico",
      text: "Resolvieron mi problema en menos de una hora. Gran equipo!",
      name: "Sergio López",
      date: "April 8",
    },
    {
      title: "Excelente atención",
      text: "El soporte es rápido, claro y muy amable. Totalmente recomendado.",
      name: "Lucía Méndez",
      date: "March 30",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT PANEL */}
        <div className="md:w-1/4 flex flex-col items-start">
          <h2 className="text-2xl font-extrabold text-[#0b132a] mb-2">Great</h2>

          {/* 4 green + 1 gray star */}
          <div className="flex mb-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#00B67A] w-6 h-6 mr-[2px] flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              </div>
            ))}
            <div className="bg-[#D8D8D8] w-6 h-6 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          <p className="text-gray-700 text-sm mb-3">
            Based on{" "}
            <span className="font-semibold underline cursor-pointer">
              311 reviews
            </span>
          </p>

          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Trustpilot_star_logo.png"
              alt="Trustpilot logo"
              className="w-4 h-4"
            />
            <span className="text-[#00B67A] font-semibold text-base">
              Trustpilot
            </span>
          </div>
        </div>

        {/* RIGHT REVIEWS */}
        <div className="md:w-3/4 relative">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-[220px] max-w-[220px] border border-gray-200 rounded-xl p-3 bg-white flex-shrink-0 hover:shadow-md transition-all"
              >
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#00B67A] w-5 h-5 mr-[2px] flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <h3 className="font-bold text-[#0b132a] text-xs mb-1 leading-snug uppercase">
                  {review.title}
                </h3>
                <p className="text-[#0b132a] text-[11px] mb-2">
                  {review.text}
                </p>
                <p className="text-gray-500 text-[11px]">
                  <span className="font-semibold text-gray-800">
                    {review.name}
                  </span>
                  , {review.date}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-100"
          >
            <FiChevronLeft className="text-gray-600" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-100"
          >
            <FiChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
