"use client";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your form submission logic here (API call etc.)
    setTimeout(() => setIsLoading(false), 2000); // Simulating loading state
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
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
        <p className="text-center text-gray-500 mb-6">or via</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" required />
            <span className="text-sm text-gray-600">
              I confirm that I have read and agree with the{" "}
              <a href="/terms" className="text-blue-500">Terms & Conditions</a> and I am 18+ years old
            </span>
          </div>
          <div className="flex justify-center items-center mb-6">
            {isLoading ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-blue-500 rounded-full"></div>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full"
              >
                Sign Up
              </button>
            )}
          </div>
        </form>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
