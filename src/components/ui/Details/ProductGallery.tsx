import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { useCallback } from "react";

interface ProductGalleryProps {
  product: {
    images: string[];
    title: string;
  };
  activeImage: number;
  setActiveImage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductGallery({
  product,
  activeImage,
  setActiveImage,
}: ProductGalleryProps) {
  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  }, [product.images.length, setActiveImage]);

  const prevImage = useCallback(() => {
    setActiveImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  }, [product.images.length, setActiveImage]);

  return (
    <div className="w-[712px] flex flex-col items-center">
      <div className="relative w-[712px] h-[500px] overflow-hidden mb-4">
        <img
          src={product.images[activeImage]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full shadow"
        >
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size={24}
            color="#828282"
            strokeWidth={1.5}
          />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full shadow"
        >
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={24}
            color="#828282"
            strokeWidth={1.5}
          />
        </button>
      </div>
      <div className="flex w-full gap-4">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-24 h-24 overflow-hidden border-3 ${
              activeImage === index ? "border-[#7DB800]" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`${product.title} ${index}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
