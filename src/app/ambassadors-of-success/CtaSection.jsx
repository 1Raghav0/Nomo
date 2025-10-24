import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="bg-[#0057FF] rounded-3xl text-white py-16 px-4 text-center relative overflow-hidden">
      {/* Background decorative streaks (optional gradient lines) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          🚀 Ready to transform your trading?
        </h2>

        {/* Telegram Join Button */}
        <div className="bg-[#E8F1FF] text-black rounded-full flex items-center gap-4 px-6 py-4 shadow-lg hover:scale-105 transition-transform cursor-pointer">
          <span className="text-lg font-semibold">
            Join our community on{" "}
            <span className="text-[#0057FF]">Telegram:</span>
          </span>
          <div className="bg-[#0057FF] rounded-full p-3">
            <FaTelegramPlane size={28} className="text-white" />
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <p className="text-lg font-semibold mb-4">Follow us on social media:</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="bg-white text-[#0057FF] rounded-full p-3 text-xl hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-[#0057FF] rounded-full p-3 text-xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-[#0057FF] rounded-full p-3 text-xl hover:scale-110 transition-transform"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
