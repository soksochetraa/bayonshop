import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-[#212121]">
      <div className="w-full max-w-[1440px] flex flex-col items-center py-[40px] px-4 font-[poppins] text-white">
        {/* Top Section: Links, Logo, Social Icons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-[1100px] pb-8 gap-8 md:gap-0">
          {/* Policy Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 mb-4 md:mb-0 text-[16px] items-center">
            <a href="#" className="hover:text-gray-400 mb-2 sm:mb-0">
              Policy
            </a>
            <a href="#" className="hover:text-gray-400 mb-2 sm:mb-0">
              Term & Conditions
            </a>
            <a href="#" className="hover:text-gray-400">
              Help
            </a>
          </div>

          {/* Logo */}
          <div className="mb-4 md:mb-0 flex justify-center">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={155}
              height={54}
              className="cursor-pointer"
              priority
            />
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-[16px]">Follow Us on Social</span>
            <div className="flex space-x-2 text-[#BBB]">
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Google Plus"
              >
                <FaGooglePlusG size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-10 text-center text-[#A2A2A2] text-[13px] px-2">
          <p>© 2025 Bayonshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
