"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  FavouriteIcon,
  ArrowExpandIcon,
  ShoppingBasket02Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import TimerCounter from "./TimerCounter";
import Link from "next/link";
import { generateSlug } from "../../../utils/product/products";
import { useFavorites } from "@/src/context/FavoritesContext";
import { useCart } from "@/src/context/CartContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

interface ProductCardProps {
  id: number | string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  rating: number;
  image: string;
  images?: string[];
  countdownEnd?: Date | null;
  slug?: string;
  isListView?: boolean;
}

const ProductCard1: React.FC<ProductCardProps> = (props) => {
  const {
    id,
    title,
    category,
    price,
    oldPrice,
    discountPercent = 0,
    rating,
    image,
    images = [image],
    countdownEnd,
    slug,
  } = props;

  const finalSlug = slug || generateSlug(title);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const favorite = isFavorite(finalSlug);
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const router = useRouter();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(finalSlug);
      toast("Removed from Favorites ❌", { icon: "💔" });
    } else {
      addToFavorites({ ...props, slug: finalSlug });
      toast.success("Added to Favorites ❤️");
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: String(id),
      name: title,
      price,
      quantity: 1,
      image,
    });
    toast.success(`${title} added to your cart 🛒`);
  };

  return (
    <>
      <div
        className={`${poppins.variable} font-sans w-full max-w-[300px] flex flex-col cursor-pointer`}
      >
        <div className="relative w-full aspect-[9/10] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => router.push(`/product-detail/${finalSlug}`)}
          />

          {discountPercent > 0 && (
            <span className="absolute top-2 left-2 px-3 py-1 bg-[#7DB800] rounded-full text-white text-xs font-medium shadow">
              {discountPercent}% Off
            </span>
          )}

          <div className="flex flex-col gap-2 absolute top-2 right-2">
            <div
              className={`rounded-md w-8 h-8 flex justify-center items-center cursor-pointer transition ${
                favorite ? "bg-red-500" : "bg-white hover:bg-gray-100"
              }`}
              onClick={toggleFavorite}
            >
              <HugeiconsIcon
                icon={FavouriteIcon}
                className={favorite ? "text-white" : "text-gray-500"}
                size={18}
              />
            </div>

            <div
              className="bg-white rounded-md w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={(e) => {
                e.preventDefault();
                setQuickViewOpen(true);
              }}
            >
              <HugeiconsIcon
                icon={ArrowExpandIcon}
                className="text-gray-500"
                size={18}
              />
            </div>

            <div
              className="bg-white rounded-md w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={handleAddToCart}
            >
              <HugeiconsIcon
                icon={ShoppingBasket02Icon}
                className="text-gray-500"
                size={18}
              />
            </div>
          </div>

          {countdownEnd && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full px-2">
              <TimerCounter targetTime={countdownEnd} />
            </div>
          )}
        </div>
        <Link href={`/product-detail/${finalSlug}`} className="block">
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
              <span
                className={`text-sm sm:text-md font-semibold ${
                  oldPrice ? "text-green-600" : "text-gray-800"
                }`}
              >
                ${price.toFixed(2)}
              </span>
              {oldPrice && (
                <span className="text-xs sm:text-sm line-through text-gray-400">
                  ${oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </div>

      {isQuickViewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setQuickViewOpen(false)}
            >
              <HugeiconsIcon icon={Cancel01Icon} size={22} />
            </button>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-500 text-sm mb-4">{category}</p>

              <div className="grid grid-cols-2 gap-3">
                {images.map((img, i) => (
                  <Link
                    key={i}
                    href={`/product-detail/${finalSlug}`}
                    className="block"
                    onClick={() => setQuickViewOpen(false)}
                  >
                    <img
                      src={img}
                      alt={`${title}-${i}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-green-600">
                  ${price.toFixed(2)}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="px-5 py-2 bg-[#7DB800] text-white rounded-lg hover:bg-[#6aa200] transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard1;
