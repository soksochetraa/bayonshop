"use client";

import { Poppins } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";

// Load font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const queryInput =
      (event.currentTarget.elements.namedItem("search") as HTMLInputElement) ||
      null;

    if (queryInput) {
      const searchQuery = queryInput.value.trim();
      if (searchQuery) {
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      }
      queryInput.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`w-auto md:w-[358px] h-[44px] bg-white hidden rounded-4xl sm:flex items-center justify-between px-4 text-[14px] ${poppins.variable} font-sans`}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="focus:outline-0 text-gray-500 bg-transparent flex-1"
      />
      <button type="submit">
        <HugeiconsIcon
          icon={Search01Icon}
          className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          size={16}
        />
      </button>
    </form>
  );
};

export default SearchBar;
