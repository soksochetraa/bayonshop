"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  FavouriteIcon,
  ArrowExpandIcon,
  ShoppingBasket02Icon,
} from "@hugeicons/core-free-icons";
import TimerCounter from "./TimerCounter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  image: string;
  countdownEnd: Date;
}

const ProductCard1: React.FC<ProductCardProps> = ({
  title,
  category,
  price,
  oldPrice,
  discount,
  rating,
  image,
  countdownEnd,
}) => {
  return (
    <div
      className={`${poppins.variable} font-sans w-full max-w-[300px] flex flex-col`}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[9/10] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {discount && (
          <span className="absolute top-2 left-2 px-3 py-1 bg-[#7DB800] rounded-full text-white text-xs font-medium shadow">
            {discount} Off
          </span>
        )}
        <div className="flex flex-col gap-2 absolute top-2 right-2">
          {[FavouriteIcon, ArrowExpandIcon, ShoppingBasket02Icon].map(
            (icon, i) => (
              <div
                key={i}
                className="bg-white rounded-md w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition"
              >
                <HugeiconsIcon
                  icon={icon}
                  className="text-gray-500"
                  size={18}
                />
              </div>
            )
          )}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full px-2">
          <TimerCounter targetTime={countdownEnd} />
        </div>
      </div>

      {/* Text Container */}
      <div className="w-full mt-4 flex flex-col px-1">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-xs sm:text-sm truncate">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <HugeiconsIcon
              icon={StarIcon}
              className="text-yellow-500"
              size={16}
            />
            <span className="text-xs sm:text-sm font-medium">{rating}</span>
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-1 truncate">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm sm:text-md font-semibold text-green-600">
            ${price}
          </span>
          {oldPrice && (
            <span className="text-xs sm:text-sm line-through text-gray-400">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
