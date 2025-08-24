"use client";

import { useState } from "react";
import ProductCard1 from "../../ui/ProductCard1";
import Static1 from "../../ui/Static1";
import Highlight1 from "../../ui/Highlight1";
import { products, Product } from "../../../../utils/product/products";

const ProductList: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const categories = Array.from(new Set(products.map((p) => p.category)));
  categories.unshift("All");

  const filteredProducts = products
    .filter((p) => categoryFilter === "All" || p.category === categoryFilter)
    .slice(0, 8);

  const gridMinHeight = "924px";

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <Static1 />
      <Highlight1 />

      <span className="text-sm sm:text-base md:text-lg text-gray-400 mt-4">
        Our Products
      </span>
      <span className="text-[#7db800] text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center">
        Our Product Collections
      </span>

      {/* Category Filter */}
      <div className="w-full flex justify-center items-center flex-col gap-4 mb-8">
        <span className="font-semibold text-gray-700 text-sm sm:text-base md:text-lg">
          Category
        </span>
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
          <ProductCard1 key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
