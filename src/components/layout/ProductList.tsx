import { useState } from "react";
import ProductCard1 from "../ui/ProductCard1";

const ProductList = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard1 />
      </div>
    </div>
  );
};
export default ProductList;
