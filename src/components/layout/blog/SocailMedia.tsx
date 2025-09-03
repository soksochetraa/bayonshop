import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <div className="w-[636px] py-10 flex items-center gap-4">
        <span className="font-normal text-[16px] text-[#a2a2a2]">Share</span>
        <ul className="flex items-center justify-center gap-4">
          <li className="w-9 h-9 bg-[#F0F0F0] cursor-pointer  flex items-center justify-center hover:bg-[#F0F0F0] transition">
            <FaFacebookF className="w-5 h-5 text-[#bbb]" />
          </li>
          <li className="w-9 h-9 bg-[#F0F0F0] cursor-pointer  flex items-center justify-center hover:bg-[#F0F0F0] transition">
            <FaTwitter className="w-5 h-5 text-[#bbb]" />
          </li>
          <li className="w-9 h-9 bg-[#F0F0F0] cursor-pointer  flex items-center justify-center hover:bg-[#F0F0F0] transition">
            <FaYoutube className="w-5 h-5 text-[#bbb]" />
          </li>
          <li className="w-9 h-9 bg-[#F0F0F0] cursor-pointer  flex items-center justify-center hover:bg-[#F0F0F0] transition">
            <FaInstagram className="w-5 h-5 text-[#bbb]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
