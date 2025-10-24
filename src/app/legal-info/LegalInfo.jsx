export default function LegalInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#0A0F2C] mb-12">
          Legal info
        </h2>

        {/* Card Container */}
        <div className="bg-[#E9F8FF] rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Email */}
            <div className="flex items-start gap-6">
              <img
                src="/images/email-icon.png"
                alt="Email Icon"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0A0F2C]">
                  Email
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Send your queries to our dedicated support team at{" "}
                  <a
                    href="mailto:support@nomotrade.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@nomotrade.com
                  </a>
                  . Expect a response within 48h.
                </p>
              </div>
            </div>

            {/* Phone lines */}
            <div className="flex items-start gap-6">
              <img
                src="/images/phone-icon.png"
                alt="Phone Icon"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0A0F2C]">
                  Phone lines
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our call center is available Monday to Friday, 9:00–18:00 GMT+2:
                </p>
                <p className="font-semibold text-[#0A0F2C] mt-1">
                  +371 254 93 909
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Live Chat */}
            <div className="flex items-start gap-6">
              <img
                src="/images/chat-icon.png"
                alt="Chat Icon"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0A0F2C]">
                  Live Chat
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Connect with us instantly via live chat.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Start chatting
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-6">
              <img
                src="/images/location-icon.png"
                alt="Location Icon"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0A0F2C]">
                  Address
                </h3>
                <p className="font-semibold text-[#0A0F2C]">
                  Nomo Trade Limited
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay,
                  Gros-Islet, LC01 401, Saint Lucia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
