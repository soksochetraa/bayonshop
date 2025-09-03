import { useCart } from "../../context/CartContext";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete02Icon,
  MinusSignIcon,
  PlusSignIcon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

export default function Cart({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, removeFromCart, clearCart, getTotal, addToCart } = useCart();

  const handleQuantityChange = (id: string, qty: number) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    if (qty < 1) return;
    addToCart({ ...item, quantity: qty - item.quantity });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-300">
        <h2
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Shopping Cart
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={20} />
        </button>
      </div>

      {cart.length === 0 ? (
        <p
          className="text-gray-500 text-center py-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Your cart is empty
        </p>
      ) : (
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b border-gray-200 pb-2 last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 flex flex-col">
                <span
                  className="font-medium text-gray-900"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.name}
                </span>
                <span
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  ${item.price.toFixed(2)} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 cursor-pointer"
              >
                <HugeiconsIcon icon={Delete02Icon} size={18} />
              </button>
            </div>
          ))}

          <div
            className="flex justify-between font-semibold text-gray-900 pt-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span>Total:</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>

          <button
            onClick={clearCart}
            className="mt-2 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition cursor-pointer"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Clear Cart
          </button>

          <button
            className="mt-2 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition cursor-pointer"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
