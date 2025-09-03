"use client";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon, MinusSignIcon } from "@hugeicons/core-free-icons";

interface FAQItemProps {
  title: string;
  children: React.ReactNode;
}

const FAQItem = ({ title, children }: FAQItemProps) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-[1320px] border-b border-t border-gray-200 py-4 font-[poppins]">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center text-left gap-2 cursor-pointer"
      >
        <HugeiconsIcon
          icon={open ? MinusSignIcon : PlusSignIcon}
          size={20}
          color="#212121"
        />
        <span className="font-semibold text-[18px] text-[#212121]">
          {title}
        </span>
      </button>

      {/* Detail (toggle) */}
      {open && (
        <div className="mt-3 text-gray-600 text-[15px] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
