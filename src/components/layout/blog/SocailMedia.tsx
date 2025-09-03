import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <div className="w-[636px] py-10 flex items-center gap-4">
        <span className="font-normal text-[16px] text-[#a2a2a2]">Share</span>
        <ul className="flex items-center justify-center gap-4">
          <li className="w-9 h-9 bg-gray-300 cursor-pointer  flex items-center justify-center hover:bg-gray-300 transition">
            <FaFacebookF className="w-5 h-5 text-[#1877F2]" />
          </li>
          <li className="w-9 h-9 bg-gray-300 cursor-pointer  flex items-center justify-center hover:bg-gray-300 transition">
            <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />
          </li>
          <li className="w-9 h-9 bg-gray-300 cursor-pointer  flex items-center justify-center hover:bg-gray-300 transition">
            <FaYoutube className="w-5 h-5 text-[#FF0000]" />
          </li>
          <li className="w-9 h-9 bg-gray-300 cursor-pointer  flex items-center justify-center hover:bg-gray-300 transition">
            <FaInstagram className="w-5 h-5 text-[#E4405F]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
