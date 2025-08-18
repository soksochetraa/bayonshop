import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navigation = () => {
  return (
    <nav>
      {/* TOP */}
      <div className="w-full px-6 py-2 flex items-center justify-between">
        <SearchBar />
        <span className="w-1/3 flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={155}
            height={54}
            className="cursor-pointer"
          />
        </span>
        <NavIcons />
      </div>
      {/* BOTTOM */}
      <div className=""></div>
    </nav>
  );
};
export default Navigation;
