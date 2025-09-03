"use client";

import { useCart } from "@/src/context/CartContext";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete02Icon,
  MinusSignIcon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart, getTotal } = useCart();

  const handleQuantityChange = (id: string, change: number) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    if (item.quantity + change <= 0) {
      removeFromCart(id);
    } else {
      addToCart({ ...item, quantity: change });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
        <p className="text-gray-500 mt-2">Your shopping cart is empty.</p>
        <Link
          href="/shop"
          className="mt-4 inline-block px-6 py-2 bg-[#7DB800] text-white rounded-lg hover:bg-[#6aa200] transition"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Cart</h2>
      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-sm p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
                <p className="font-medium text-green-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="p-2 bg-gray-100 rounded hover:bg-gray-200"
              >
                <HugeiconsIcon icon={MinusSignIcon} size={18} />
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="p-2 bg-gray-100 rounded hover:bg-gray-200"
              >
                <HugeiconsIcon icon={PlusSignIcon} size={18} />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 bg-red-100 text-red-500 rounded hover:bg-red-200"
              >
                <HugeiconsIcon icon={Delete02Icon} size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          Total: ${getTotal().toFixed(2)}
        </h3>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
          <button className="px-6 py-2 bg-[#7DB800] text-white rounded-lg hover:bg-[#6aa200] transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
