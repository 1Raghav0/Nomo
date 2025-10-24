export default function ContactUsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 mt-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#0a1633]">Contact Us</h2>
        <p className="text-gray-500 mt-3 text-lg">
          Have a question or need assistance? Reach out to us through the following channels:
        </p>
      </div>

      {/* Top Row — Live Chat & Email */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        {/* Live Chat */}
        <div className="bg-[#f7f9fc] rounded-3xl p-10 flex flex-col justify-between hover:shadow-md transition-all duration-300">
          <img
            src="/images/headset.png"
            alt="Live Chat"
            className="w-36 mb-6"
          />
          <h3 className="text-3xl font-bold text-[#0a1633] mb-2">Live Chat</h3>
          <p className="text-gray-500 mb-6">
            Connect with us instantly via live chat.
          </p>
          <button className="bg-[#0057ff] text-white font-semibold rounded-full px-6 py-2 w-fit hover:bg-[#0046cc] transition">
            Start chatting
          </button>
        </div>

        {/* Email */}
        <div className="bg-[#f7f9fc] rounded-3xl p-10 flex flex-col justify-between hover:shadow-md transition-all duration-300">
          <img
            src="/images/mail.png"
            alt="Email"
            className="w-36 mb-6"
          />
          <h3 className="text-3xl font-bold text-[#0a1633] mb-2">Email</h3>
          <p className="text-gray-500">
            Send your queries to our dedicated support team at{" "}
            <a
              href="mailto:support@nomotrade.com"
              className="text-[#0057ff] hover:underline"
            >
              support@nomotrade.com
            </a>
            . Expect a response within 24 working hours.
          </p>
        </div>
      </div>

      {/* Bottom Row — FAQs / Phone Lines / Address */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* FAQs */}
        <div className="bg-[#e7f5ff] rounded-3xl p-10 flex items-start space-x-6 hover:shadow-md transition-all duration-300">
          <img
            src="/images/faq.png"
            alt="FAQs"
            className="w-28 flex-shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#0a1633] mb-2">FAQs</h3>
            <p className="text-gray-600">
              Explore our{" "}
              <a
                href="#"
                className="text-[#0057ff] hover:underline"
              >
                Help Center
              </a>{" "}
              for comprehensive answers to frequently asked questions, guiding you through various aspects of the platform.
            </p>
          </div>
        </div>

        {/* Phone Lines */}
        <div className="bg-[#e8f0ff] rounded-3xl p-10 flex items-start space-x-6 hover:shadow-md transition-all duration-300">
          <img
            src="/images/phone.png"
            alt="Phone Lines"
            className="w-28 flex-shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#0a1633] mb-2">Phone Lines</h3>
            <p className="text-gray-600">
              Our call center is available Monday to Friday, 9:00–18:00 GMT+2:
            </p>
            <p className="text-[#0a1633] font-semibold mt-2">+371 254 93 909</p>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-[#eef9e7] rounded-3xl p-10 flex items-start space-x-6 hover:shadow-md transition-all duration-300">
          <img
            src="/images/location.png"
            alt="Address"
            className="w-28 flex-shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#0a1633] mb-2">Address</h3>
            <p className="text-[#0a1633] font-semibold">Nomo Trade Limited</p>
            <p className="text-gray-600">
              Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay,
              Gros-Islet, LC01 401, Saint Lucia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
