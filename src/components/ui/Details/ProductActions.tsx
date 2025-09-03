import { HugeiconsIcon } from "@hugeicons/react";
import {
  MinusSignIcon,
  PlusSignIcon,
  FavouriteIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { useCart } from "../../../context/CartContext";

export default function ProductActions({
  product,
  selectedVariant,
  quantity,
  setQuantity,
}: {
  product: any;
  selectedVariant: any;
  quantity: number;
  setQuantity: (qty: number) => void;
}) {
  const { addToCart } = useCart(); // <-- get addToCart from context

  const increment = () => {
    if (!selectedVariant) return;
    if (quantity < selectedVariant.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    if (quantity > selectedVariant.stock) {
      alert(`Only ${selectedVariant.stock} items in stock`);
      return;
    }

    addToCart({
      id: product.id + selectedVariant.size,
      name: product.title + ` (${selectedVariant.size})`,
      price: selectedVariant.price,
      quantity,
      image: selectedVariant.image || product.images[0],
    });
  };

  return (
    <>
      <div className="w-full h-px bg-gray-300 rounded-full"></div>
      <div className="flex items-center gap-5">
        <span className="font-normal text-sm text-[#212121]">Quantity</span>
        <form className="flex justify-between items-center ring-1 ring-inset ring-gray-300 py-2">
          <button
            type="button"
            onClick={decrement}
            className="px-2 py-1 cursor-pointer"
          >
            <HugeiconsIcon icon={MinusSignIcon} size={18} />
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => {
              let qty = parseInt(e.target.value, 10);
              if (isNaN(qty) || qty < 1) qty = 1;
              if (selectedVariant && qty > selectedVariant.stock)
                qty = selectedVariant.stock;
              setQuantity(qty);
            }}
            className="w-12 text-center outline-none focus:outline-none
            [&::-webkit-inner-spin-button]:appearance-none 
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-moz-appearance]:textfield"
            style={{ fontFamily: "var(--font-poppins)" }}
          />

          <button
            type="button"
            onClick={increment}
            className="px-2 py-1 cursor-pointer"
          >
            <HugeiconsIcon icon={PlusSignIcon} size={18} />
          </button>
        </form>
      </div>
      <button
        onClick={handleAddToCart} // <-- add to cart handler
        className="px-10 py-3 bg-[#7db800] flex items-center justify-center cursor-pointer shadow-md hover:bg-[#6aa100] transition mt-4"
      >
        <span className="font-bold text-[16px] text-white">Add to Cart</span>
      </button>
      <div className="flex justify-center items-start gap-8 mt-4">
        <button className="flex gap-2 items-center cursor-pointer">
          <HugeiconsIcon
            icon={FavouriteIcon}
            size={22}
            color="#828282"
            strokeWidth={1.5}
          />
          <span className="font-medium text-md text-[#828282] pb-0.5">
            ADD TO WISH LIST
          </span>
        </button>
        <button className="flex gap-2 items-center cursor-pointer">
          <HugeiconsIcon
            icon={Mail01Icon}
            size={22}
            color="#828282"
            strokeWidth={1.5}
          />
          <span className="font-medium text-md text-[#828282] pb-0.5">
            EMAIL
          </span>
        </button>
      </div>
    </>
  );
}
