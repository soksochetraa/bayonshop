export default function ProductInfo({
  product,
  selectedVariant,
  setSelectedVariant,
  setQuantity,
}: {
  product: any;
  selectedVariant: any;
  setSelectedVariant: (variant: any) => void;
  setQuantity: (qty: number) => void;
}) {
  return (
    <>
      <div>
        <span className="w-full font-light text-[40px] text-[#212121]">
          {product.title}
        </span>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => {
            if (i + 1 <= Math.floor(product.rating)) {
              return (
                <span key={i} className="text-[#F90] text-lg">
                  &#9733;
                </span>
              );
            } else if (i < product.rating) {
              return (
                <span key={i} className="text-[#F90] text-lg relative">
                  <span className="absolute overflow-hidden w-1/2">
                    &#9733;
                  </span>
                  <span className="text-[#D3D3D3]">&#9733;</span>
                </span>
              );
            } else {
              return (
                <span key={i} className="text-[#D3D3D3] text-lg">
                  &#9733;
                </span>
              );
            }
          })}
          <a
            href="#"
            className="ml-2 text-sm text-gray-400 underline hover:text-gray-600"
          >
            {product.reviews.length} reviews
          </a>
          <a
            href="#"
            className="ml-2 text-sm text-gray-400 underline hover:text-gray-600"
          >
            Add your review
          </a>
        </div>
      </div>
      {product.variants && product.variants.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-gray-600">Size</span>
          <div className="flex gap-3">
            {product.variants.map((variant: any, i: number) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedVariant(variant);
                  setQuantity(1);
                }}
                className={`px-4 py-2 border ${
                  selectedVariant?.size === variant.size
                    ? "border-[#7DB800] text-[#7DB800]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {variant.size}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col items-start">
          <span className="font-normal text-[16px] text-gray-400">
            As low as
          </span>
          <div className="flex gap-2 items-end">
            <span className="font-medium text-[36px] text-[#212121]">
              ${selectedVariant ? selectedVariant.price : product.price}
            </span>
            <span className="font-medium text-xl text-gray-400 line-through pb-2">
              ${selectedVariant ? selectedVariant.oldPrice : product.oldPrice}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 pb-2">
          <span className="w-2 h-2 rounded-full bg-[#7DB800]"></span>
          <span className="font-bold text-[14px] text-[#212121] uppercase">
            {product.status}
          </span>
        </div>
      </div>
    </>
  );
}
