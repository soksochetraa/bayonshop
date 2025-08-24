import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserCircle02Icon,
  FavouriteIcon,
  ShoppingBasket02Icon,
} from "@hugeicons/core-free-icons";

const IconGroup = () => {
  return (
    <div className="flex space-x-4">
      <HugeiconsIcon
        icon={UserCircle02Icon}
        className="text-white hover:text-gray-700 transition-colors cursor-pointer"
        size={24}
      />
      <HugeiconsIcon
        icon={FavouriteIcon}
        className="text-white hover:text-gray-700 transition-colors cursor-pointer"
        size={24}
      />
      <div className="relative inline-block cursor-pointer group">
        <HugeiconsIcon
          icon={ShoppingBasket02Icon}
          className="text-white group-hover:text-gray-700 transition-colors"
          size={24}
        />
        <span className="absolute top-0 -right-0 -translate-x-1/4 -translate-y-1/4 bg-[#7DB800] text-white text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center">
          0
        </span>
      </div>
    </div>
  );
};

export default IconGroup;
