"use client";

import { useState, FormEvent } from "react";
import { Poppins } from "next/font/google";

// Import Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const News1 = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    // TODO: Replace with API call
    console.log("Subscribed with email:", email);

    setMessage("✅ Thanks for subscribing! Check your inbox for details.");
    setEmail("");
  };

  return (
    <div
      className={`${poppins.className} max-w-[1320px] w-full bg-[#ebefe5] p-8 md:p-16 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mx-auto`}
    >
      {/* Left side: text */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <span className="font-semibold text-[21px] text-[#212121]">
          Join our newsletter for £10 off
        </span>
        <p className="font-normal text-[16px] leading-relaxed text-[#828282]">
          We'll email you a voucher worth £10 off your first order over £50. By
          subscribing you agree to our Terms & Conditions and Privacy & Cookies
          Policy.
        </p>
      </div>

      {/* Right side: form */}
      <form
        onSubmit={handleSubscribe}
        className="w-full md:w-1/2 flex flex-col gap-3"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            {message && (
              <p className="text-sm mt-2 text-[#212121]">{message}</p>
            )}
          </div>
          <button
            type="submit"
            className="cursor-pointer h-12 px-6 rounded-xl bg-green-700 text-white font-medium hover:bg-green-800 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default News1;
