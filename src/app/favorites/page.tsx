"use client";

import { useFavorites } from "@/src/context/FavoritesContext";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon } from "@hugeicons/core-free-icons";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Your Favorites</h2>
        <p className="text-gray-500 mt-2">No items saved yet.</p>
        <Link
          href="/shop"
          className="mt-4 inline-block px-6 py-2 bg-[#7DB800] text-white rounded-lg hover:bg-[#6aa200] transition"
        >
          Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <div
            key={item.slug}
            className="border rounded-lg shadow-sm p-4 flex flex-col"
          >
            <Link href={`/product-detail/${item.slug}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-3 font-semibold text-gray-800 truncate">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="mt-1 font-semibold text-green-600">
                ${item.price.toFixed(2)}
              </p>
            </Link>
            <button
              onClick={() => removeFromFavorites(item.slug)}
              className="mt-3 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              <HugeiconsIcon icon={Delete02Icon} size={18} />
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
