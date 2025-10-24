import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6 px-6 md:px-36">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-1">
        {/* Trading */}
        <div>
          <h3 className="font-semibold mb-3">Trading</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Investing",
              "Copytrading",
              "Platforms",
              "nomo WEB",
              "nomo Android app",
              "nomo MT5",
              "Deposit methods",
              "Fees and charges",
              "Loyalty program",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-5 mb-3">AI</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                nomo AI Index
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Assistant
              </a>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-semibold mb-3">Education</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Education Hub",
              "Beginner’s corner",
              "Understanding the markets",
              "Trading strategy and analysis",
              "Platform tutorials",
              "Economic Calendar",
              "Earnings reports",
              "eBook",
              "Blog",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About us",
              "Legal info",
              "Contact us",
              "Reviews",
              "Affiliates",
              "Become a lead trader",
              "Ambassadors of success",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="font-semibold mb-3">Help & Support</h3>
          <ul className="space-y-2 text-sm">
            {["Contact Support", "FAQs"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Info */}
        <div>
          <h3 className="font-semibold mb-3">Legal info</h3>
          <ul className="space-y-2 text-sm">
            {[
              "AML policy",
              "Privacy Policy",
              "Complaints Handling Policy",
              "Cookie policy",
              "Risk disclosure",
              "Terms and Conditions",
              "Personal data deletion",
              "Customer complaints",
              "Credit Bonus Terms & Conditions",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Help + App */}
        <div className="flex flex-col items-start space-y-4">
          {/* Help Section */}
          <div className="bg-gray-50 border border-gray-100 px-5 py-4 rounded-xl text-sm text-gray-700 w-full">
            Need Help? Visit our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Help Section
            </a>
          </div>

          {/* Download App */}
          <div className="bg-[#112B64] text-white p-5 rounded-xl w-full">
            <h3 className="font-semibold mb-2 flex items-center gap-1">
              Download the App 📲
            </h3>
            <p className="text-xs text-gray-200 mb-4 leading-snug">
              Don’t miss important notifications and market changes with nomo mobile application.
            </p>
            <div className="flex gap-4 items-center mb-3">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  alt="Android"
                  className="w-8 h-8 mb-1"
                />
                <a href="#" className="text-xs font-medium hover:underline">
                  Google Play
                </a>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  alt="Apple"
                  className="w-8 h-8 mb-1"
                />
                <span className="text-xs text-purple-300">Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-blue-600 font-extrabold text-2xl">m</span>
            <span className="text-gray-900 font-extrabold text-2xl -ml-1">m</span>
          </div>
          <span className="font-semibold text-lg text-gray-900">nomo</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 text-blue-600 text-lg">
          <a href="#" className="hover:text-blue-700">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          
        </div>
      </div>
      {/* Divider */}
      <hr className="my-10 border-gray-200" />
    </footer>
  );
}
