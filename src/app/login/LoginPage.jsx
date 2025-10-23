"use client";

import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-gray-50 mt-20">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          {/* Title */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
            Log in with
          </h2>

          {/* Social Login Buttons */}
          <div className="flex gap-3 justify-center mb-4">
            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-md px-4 py-2 w-full hover:bg-gray-50 transition">
              <FaFacebook className="text-blue-600 text-lg" />
              <span className="font-medium text-sm md:text-base">Facebook</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-md px-4 py-2 w-full hover:bg-gray-50 transition">
              <FaGoogle className="text-red-500 text-lg" />
              <span className="font-medium text-sm md:text-base">Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-3 text-gray-400 text-sm">or via</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <a
                href="#"
                className="absolute right-3 top-2 text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Captcha placeholder */}
            <div className="border border-gray-200 rounded-md p-3 text-sm text-gray-700 flex items-center justify-between">
              <span>✅ Success!</span>
              <img
                src="https://developers.cloudflare.com/images/captcha-logo.svg"
                alt="Cloudflare"
                className="h-6"
              />
            </div>

            {/* Log in Button */}
            <button
              type="button"
              disabled
              className="w-full bg-gray-100 text-gray-400 font-semibold py-2 rounded-md cursor-not-allowed"
            >
              Log in
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-center text-sm mt-6 text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
        {/* <footer className="border-t border-gray-100 py-8 px-4 md:px-16 bg-white lg:px-[500px]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold mb-2 text-gray-900">Resources</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About nomo</a></li>
              <li><a href="#" className="hover:underline">Education hub</a></li>
              <li><a href="#" className="hover:underline">nomo Academy</a></li>
              <li><a href="#" className="hover:underline">How to copy-trade?</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-900">Legal info</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Risk disclosure</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Fees</a></li>
              <li><a href="#" className="hover:underline">Market hours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-900">Help & support</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex gap-3 text-xl text-gray-600 mt-2">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
          © 2025 nomotrade.com Incorporated, registered address: Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, LC01 401, Saint Lucia. Business reg. no. 2023-00509
          <br />
          <a href="mailto:support@nomotrade.com" className="text-blue-600 hover:underline">
            support@nomotrade.com
          </a>
        </div>
      </footer> */}
      </div>
      
    </div>
  );
};

export default LoginPage;
