"use client";
import Link from "next/link";
import { useState } from "react";
import { LiaCookieSolid } from "react-icons/lia";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed xl:w-[45%] w-[95%] md:w-[70%] lg:w-[85%] mx-auto   bottom-4 z-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-100 shadow-xs  px-3 py-2 lg:px-2  lg:py-2 rounded-lg flex lg:justify-center lg:flex-row flex-col items-start lg:items-center lg:gap-4 gap-3 text-sm text-gray-600">
      <span className="lg:flex  items-center gap-1">
        <LiaCookieSolid className="hidden lg:block" />
        This website{" "}
        <Link
          href="https://etherscan.io/terms#cookiestatement"
          className="text-[#0784C3] font-medium"
        >
          uses cookies to improve your experience
        </Link>
        . By continuing, you agree to our{" "}
        <Link
          href="https://etherscan.io/terms"
          className="text-[#0784C3] font-medium "
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="https://etherscan.io/privacyPolicy"
          className="text-[#0784C3] font-medium "
        >
          Privacy Policy
        </Link>
        .
      </span>
      <button
        onClick={() => setIsVisible(false)}
        className="bg-[#0784C3] duration-300 ease-in-out  text-white px-4 py-2 rounded-md hover:bg-[#0670a6] cursor-pointer"
      >
        Got it!
      </button>
    </div>
  );
};

export default CookieConsent;
