import { HugeiconsIcon } from "@hugeicons/react";
import {
  DeliveryBox02Icon,
  ShoppingBasketSecure02Icon,
  CustomerSupportIcon,
} from "@hugeicons/core-free-icons";

const features = [
  {
    icon: DeliveryBox02Icon,
    title: "Free Shipping",
    desc: "Free shipping for orders above $180",
  },
  {
    icon: ShoppingBasketSecure02Icon,
    title: "Secure Payment",
    desc: "100% secure payment with data protection",
  },
  {
    icon: CustomerSupportIcon,
    title: "24/7 Support",
    desc: "Dedicated support anytime you need help",
  },
];

const Static1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 py-10 ">
      {features.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          {/* Icon */}
          <div className="flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full">
            <HugeiconsIcon
              icon={item.icon}
              size={36}
              className="text-green-600"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-800">
              {item.title}
            </span>
            <span className="text-sm text-gray-500">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Static1;
