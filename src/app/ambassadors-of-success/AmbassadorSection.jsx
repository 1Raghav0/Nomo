import React from "react";
import { FiExternalLink } from "react-icons/fi";

const AmbassadorsSection = () => {
  return (
    <section className="bg-[#F8FBFF] py-16 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#0066FF]">nomo</span> Ambassadors
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Our Ambassadors of Success share their journeys, strategies, and tips
        </p>
      </div>

      {/* Ambassadors Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-[#EAF3FF] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900">Juan Cruz</h3>
          <p className="text-[#0066FF] font-medium">Top Trader at nomo</p>

          <p className="text-gray-600 mt-4">
            Watch the full interview where our ambassador shares a disciplined
            approach to trading, how continuous education, and emotional
            management have been key to their success.
          </p>

          <a
            href="#"
            className="text-[#0066FF] font-semibold inline-flex items-center gap-2 mt-4"
          >
            🧠 Watch the full interview
            <FiExternalLink />
          </a>

          <div className="mt-6">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/wfXCC5JQh8E"
              title="Juan Cruz Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#EAF3FF] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900">Juan Cruz</h3>
          <p className="text-[#0066FF] font-medium">Top Trader at nomo</p>

          <p className="text-gray-600 mt-4">
            Watch the full interview where our ambassador shares a disciplined
            approach to trading, how continuous education, and emotional
            management have been key to their success.
          </p>

          <a
            href="#"
            className="text-[#0066FF] font-semibold inline-flex items-center gap-2 mt-4"
          >
            🧠 Watch the full interview
            <FiExternalLink />
          </a>

          <div className="mt-6">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/wfXCC5JQh8E"
              title="Juan Cruz Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#EAF3FF] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900">Juan Cruz</h3>
          <p className="text-[#0066FF] font-medium">Top Trader at nomo</p>

          <p className="text-gray-600 mt-4">
            Watch the full interview where our ambassador shares a disciplined
            approach to trading, how continuous education, and emotional
            management have been key to their success.
          </p>

          <a
            href="#"
            className="text-[#0066FF] font-semibold inline-flex items-center gap-2 mt-4"
          >
            🧠 Watch the full interview
            <FiExternalLink />
          </a>

          <div className="mt-6">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/watch?v=FjK_nFqV0Lk&t=3s"
              title="Juan Cruz Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#EAF3FF] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900">Estéfano</h3>
          <p className="text-[#0066FF] font-medium">
            Forex Specialist and Mentor
          </p>

          <p className="text-gray-600 mt-4">
            Get insights into the Forex market and how our ambassador identifies
            opportunities and manages risks effectively.
          </p>

          <a
            href="#"
            className="text-[#0066FF] font-semibold inline-flex items-center gap-2 mt-4"
          >
            🧠 Watch the full interview
            <FiExternalLink />
          </a>

          <div className="mt-6">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/xlHshbFCHcY"
              title="Estéfano Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorsSection;
