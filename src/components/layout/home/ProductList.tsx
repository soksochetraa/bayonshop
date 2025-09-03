// ProductList.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard1 from "../../ui/ProductCard1";
import Static1 from "../../ui/Static1";
import Highlight1 from "../../ui/Highlight1";
import {
  products,
  Product,
  generateSlug,
} from "../../../../utils/product/products";

const ProductList: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const router = useRouter();

  // Only discounted products
  const discountedProducts = products.filter(
    (p) => typeof p.discountPercent === "number" && p.discountPercent > 0
  );

  // Categories only from discounted products
  const categories = [
    "All",
    ...Array.from(new Set(discountedProducts.map((p) => p.category))),
  ];

  // Apply filter
  const filteredProducts = discountedProducts
    .filter((p) => categoryFilter === "All" || p.category === categoryFilter)
    .slice(0, 8);

  const handleProductClick = (product: Product) => {
    const slug = generateSlug(product.title);
    router.push(`/product-detail/${slug}`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <Static1 />
      <Highlight1 />

      <span className="text-sm sm:text-base md:text-lg text-gray-400 mt-4">
        Discounted Products
      </span>
      <span className="text-[#7db800] text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center">
        Special Deals Collection
      </span>

      {/* Category Filter */}
      <div className="w-full flex justify-center items-center flex-col gap-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full cursor-pointer ring-1 ring-gray-200 transition-all duration-200 ${
                categoryFilter === cat
                  ? "bg-[#7db800] text-white"
                  : "bg-transparent text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
        style={{ minHeight: gridMinHeight }}
      >
        {filteredProducts.map((product: Product) => (
          <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <ProductCard1
              image={product.images[0]} // first image
              {...product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
