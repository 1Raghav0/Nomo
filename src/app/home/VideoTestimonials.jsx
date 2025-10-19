"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jose",
    country: "Mexico",
    description: "José invests in Apple and 25+ more",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image:
      "https://randomuser.me/api/portraits/men/31.jpg",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    iconColor: "bg-gray-100",
  },
  {
    id: 2,
    name: "Carolina",
    country: "Colombia",
    description: "Carolina invests in nomo AI Index and 15+ more",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
    iconColor: "bg-blue-600",
  },
  {
    id: 3,
    name: "Giselle",
    country: "Colombia",
    description: "Giselle invests in Tesla and 30+ more",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    iconColor: "bg-red-600",
  },
  {
    id: 4,
    name: "Miguel",
    country: "Venezuela",
    description: "Miguel invests in nomo AI Index and 25+ more",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image:
      "https://randomuser.me/api/portraits/men/46.jpg",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
    iconColor: "bg-blue-600",
  },
];

const VideoTestimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 350;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <div className="flex items-center justify-center mb-8 gap-2">
        <span className="text-2xl md:text-3xl font-semibold">
          🎙️ We are as good as our{" "}
          <span className="text-blue-600">clients say</span>
        </span>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center px-4 md:px-8">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-white border rounded-full shadow hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4 md:px-8"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-[250px] md:min-w-[280px] lg:min-w-[300px] bg-white rounded-2xl shadow-md flex-shrink-0 overflow-hidden"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-60 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/70 rounded-full p-3 hover:scale-105 transition">
                    <Play className="text-blue-600 w-6 h-6" />
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 text-left relative">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={t.icon}
                    alt="icon"
                    className={`w-10 h-10 p-2 rounded-full ${t.iconColor}`}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.country}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{t.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="p-2 bg-white border rounded-full shadow hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default VideoTestimonials;
