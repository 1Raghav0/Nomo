
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const navItems = [
  { name: "AI", submenu: ["AI Trading", "AI Bots", "Signals", "Automation"] },
  { name: "Trading", submenu: ["Forex", "Crypto", "Commodities", "Indices"] },
  {
    name: "Company",
    submenu: [
      "About us",
      "Legal info",
      "Contact us",
      "Reviews",
      "Affiliates",
      "Become a lead trader",
      "Ambassadors of success",
    ],
  },
  { name: "Earn", submenu: ["Partnerships", "Referral Program", "Affiliate Marketing"] },
  { name: "Education", submenu: ["Courses", "Tutorials", "Webinars", "Community"] },
  { name: "Help & Support", submenu: ["FAQ", "Support Center", "Contact", "Docs"] },
];

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);

  // Scroll shrink behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) setShrink(true);
      else setShrink(false);
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determine navbar height based on dropdown state
  const baseHeight = shrink ? 60 : 68; // default height
  const dropdownHeight =
    activeMenu !== null ? 220 : langOpen ? 120 : 0; // increase height dynamically
  const totalHeight = baseHeight + dropdownHeight;

  return (
    <motion.nav
      animate={{
        width: shrink ? "180px" : "85%",
        borderRadius: shrink ? "999px" : "2rem",
        backgroundColor: "rgba(247,248,252,0.85)",
        height: totalHeight,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex 
                 items-start justify-between border border-gray-200 
                 backdrop-blur-md shadow-md px-6 py-3 overflow-visible"
    >
      {/* Left logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <span className="text-blue-600 font-extrabold text-2xl">m</span>
          <span className="text-gray-900 font-extrabold text-2xl -ml-1">m</span>
        </div>
        <span
          className={`font-semibold text-lg text-gray-900 transition-all ${
            shrink ? "opacity-100" : "opacity-100"
          }`}
        >
          nomo
        </span>
      </div>

      {/* Center nav links */}
      {!shrink && (
        <ul className="flex items-center pt-2 gap-6 text-gray-700 font-medium relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-gray-900 cursor-pointer transition-colors">
                {item.name}
                <motion.span
                  animate={{ rotate: activeMenu === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-gray-500 text-sm mt-[1px]" />
                </motion.span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {activeMenu === index && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-full mt-3 w-48 bg-[#f7f8fc]
                               rounded-xl shadow-lg py-3 text-sm text-gray-700"
                  >
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      )}

      {/* Right section */}
      {!shrink && (
        <div className="flex items-center gap-4 relative">
          {/* Language selector */}
          <div
            className="flex items-center gap-1 cursor-pointer relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="English"
              className="w-5 h-5 rounded-sm"
            />
            <span className="text-gray-600 text-sm font-medium">English</span>
            <FiChevronDown className="text-gray-500 text-xs" />

            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full mt-3 right-0 w-40 bg-[#f7f8fc] 
                             rounded-xl shadow-lg py-3 text-sm text-gray-700"
                >
                  {["English", "Spanish", "German", "French"].map((lang) => (
                    <li key={lang}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        {lang}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Log in */}
          <a
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline cursor-pointer"
          >
            Log in
          </a>

          {/* Register */}
          <a
            href="#"
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition cursor-pointer"
          >
            Register
          </a>
        </div>
      )}
    </motion.nav>
  );
}
