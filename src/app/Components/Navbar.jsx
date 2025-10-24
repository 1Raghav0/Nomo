"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const navItems = [
  {
    name: "AI",
    submenu: [
      { name: "nomo AI Index", slug: "/ai-index" },
      { name: " AI Assistant", slug: "/ai-assistant" },
    ],
  },
  {
    name: "Trading",
    submenu: [
      { name: "Investing", slug: "/investing" },
      { name: "Copytrading", slug: "/copytrading" },
      { name: "Platforms", slug: "/platforms" },
      { name: "nomo WEB", slug: "/nomo-web" },
      { name: "nomo Android app", slug: "/android-app" },
      { name: "nomo MT5", slug: "/nomo-mt5" },
      { name: "Deposit methods", slug: "/deposits-and-withdrawls" },
      { name: "Fees and charges", slug: "/pricing" },
      { name: "Loyalty program", slug: "/user-levels-explained" },
    ],
  },
  {
    name: "Company",
    submenu: [
      { name: "About us", slug: "/about-us" },
      { name: "Legal info", slug: "/legal-info" },
      { name: "Contact us", slug: "/contact-us" },
      { name: "Reviews", slug: "/reviews" },
      { name: "Affiliates", slug: "/affiliates" },
      { name: "Become a lead trader", slug: "/become-lead-trader" },
      { name: "Ambassadors of success", slug: "/ambassadors" },
    ],
  },
  {
    name: "Earn",
    submenu: [
      { name: "Affiliates", slug: "/affiliates" },
      { name: "Become a lead trader", slug: "/become-a-lead-trader" },
      { name: "Refer a friend", slug: "/refer-a-friend" },
    ],
  },
  {
    name: "Education",
    submenu: [
      { name: "Education Hub", slug: "/education/education-hub" },
      { name: "Beginner’s corner", slug: "/education/beginners-corner" },
      {
        name: "Understanding the markets",
        slug: "/education/understanding-markets",
      },
      {
        name: "Trading strategy and analysis",
        slug: "/education/trading-strategy-analysis",
      },
      { name: "Platform tutorials", slug: "/education/platform-tutorials" },
      { name: "Economic Calendar", slug: "/education/economic-calendar" },
      { name: "Earnings reports", slug: "/education/earnings-reports" },
      { name: "eBook", slug: "/education/ebook" },
      { name: "Blog", slug: "/education/blog" },
    ],
  },
  {
    name: "Help & Support",
    submenu: [
      { name: "Contact Support", slug: "/contact-us" },
      { name: "FAQs", slug: "/faqs" },
    ],
  },
];

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState(null);

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

  const baseHeight = shrink ? 56 : 60;
  const dropdownHeight = activeMenu !== null ? 320 : langOpen ? 140 : 0;
  const totalHeight = baseHeight + dropdownHeight;

  return (
    <>
      {/* ---------- DESKTOP NAVBAR ---------- */}
      <motion.nav
        animate={{
          width: shrink ? "160px" : "75%",
          borderRadius: shrink ? "999px" : "2.2rem",
          backgroundColor: "rgba(250, 251, 254, 0.95)",
          height: totalHeight,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex 
                   items-start justify-between border border-gray-100 
                   backdrop-blur-md shadow-sm px-6 py-2 overflow-visible"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center">
            <span className="text-blue-600 font-extrabold text-2xl">n</span>
            <span className="text-gray-900 font-extrabold text-2xl -ml-1">
              m
            </span>
          </div>
          <span className="font-bold text-2xl text-gray-900 tracking-tight">
            nomo
          </span>
        </Link>

        {/* Nav links */}
        {!shrink && (
          <ul className="flex items-center pt-1 gap-6 text-gray-600 font-medium text-sm relative">
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
                    <FiChevronDown className="text-gray-400 text-xs mt-[1px]" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-full mt-2 w-44 rounded-lg py-2 
                                 text-sm text-gray-700 bg-transparent shadow-none"
                    >
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.slug}
                            className="block px-3 py-1.5 hover:text-blue-600 transition-colors cursor-pointer"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        )}

        {/* Right */}
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
              <FiChevronDown className="text-gray-400 text-xs" />

              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full mt-2 right-0 w-36 rounded-lg py-2 text-sm 
                               text-gray-700 bg-transparent shadow-none"
                  >
                    {["English", "Spanish", "German", "French"].map((lang) => (
                      <li key={lang}>
                        <a
                          href="#"
                          className="block px-3 py-1.5 hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          {lang}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/login"
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition cursor-pointer shadow-sm"
            >
              Register
            </Link>
          </div>
        )}
      </motion.nav>

      {/* ---------- MOBILE NAVBAR ---------- */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <div
          className="flex items-center justify-between w-full px-4 py-3 rounded-2xl
                     backdrop-blur-md bg-white/70 border border-gray-200 shadow-sm"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-extrabold text-2xl">n</span>
            <span className="text-gray-900 font-extrabold text-2xl -ml-1">
              m
            </span>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">
              nomo
            </span>
          </div>

          {/* Dropdown toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 text-xl"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown />
            </motion.span>
          </button>
        </div>

        {/* Expanding dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-3 rounded-2xl bg-white shadow-md p-4 border border-gray-100"
            >
              {navItems.map((item, index) => (
                <div key={index} className="mb-2">
                  <button
                    onClick={() =>
                      setMobileActive(mobileActive === index ? null : index)
                    }
                    className="flex items-center justify-between w-full text-gray-800 font-medium text-base py-2"
                  >
                    {item.name}
                    <motion.span
                      animate={{ rotate: mobileActive === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiChevronDown className="text-gray-500 text-sm" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileActive === index && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 text-gray-600 text-sm overflow-hidden"
                      >
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.slug}
                              className="block py-1.5 hover:text-blue-600 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href="/login"
                  className="w-full text-center bg-[#0b132b] text-white py-2.5 rounded-full font-semibold text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="w-full text-center bg-blue-600 text-white py-2.5 rounded-full font-semibold text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
