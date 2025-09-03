import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import {
  UserCircle02Icon,
  FavouriteIcon,
  ShoppingBasket02Icon,
} from "@hugeicons/core-free-icons";
import { useCart } from "../../../context/CartContext";
import { useFavorites } from "../../../context/FavoritesContext";

const IconGroup = () => {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalFavorites = favorites.length;

  return (
    <div className="flex gap-5 relative">
      <Link href="/user">
        <HugeiconsIcon
          icon={UserCircle02Icon}
          className="text-white hover:text-gray-700 transition-colors cursor-pointer"
          size={24}
        />
      </Link>

      <div className="relative inline-block cursor-pointer">
        <Link href="/favorites">
          <HugeiconsIcon
            icon={FavouriteIcon}
            className="text-white hover:text-gray-700 transition-colors cursor-pointer"
            size={24}
          />
        </Link>
        {totalFavorites > 0 && (
          <span className="absolute top-0 -right-0 -translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center">
            {totalFavorites}
          </span>
        )}
      </div>

      <div className="relative inline-block cursor-pointer">
        <Link href="/cart">
          <HugeiconsIcon
            icon={ShoppingBasket02Icon}
            className="text-white hover:text-gray-700 transition-colors cursor-pointer"
            size={24}
          />
        </Link>
        {totalItems > 0 && (
          <span className="absolute top-0 -right-0 -translate-x-1/4 -translate-y-1/4 bg-[#7DB800] text-white text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </div>
  );
};

export default IconGroup;
