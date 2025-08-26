import React, { useState } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import products from "../../data/products.js";

const ProductCard = ({ product }: { product: any }) => (
  <div className="flex flex-col items-center w-full ">
    <div className="p-6 sm:p-8 md:p-10 bg-[#F0F0F0] w-full flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-contain mb-4"
      />
    </div>

    <div className="w-full px-2 pb-4">
      <p className="mt-2 text-base sm:text-lg font-semibold text-[#212121] font-[poppins] ">
        {product.name}
      </p>

      <div className="flex items-center gap-2 mt-2 ">
        <span className="text-gray-400 line-through text-base font-[poppins]">
          {product.oldPrice}
        </span>
        <span className="text-[#7DB800] font-semibold text-base font-[poppins]">
          {product.price}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center  mt-2 ">
        {Array.from({ length: 5 }).map((_, i) =>
          i < product.rating ? (
            <span key={i} className="text-[#F90] text-lg">
              &#9733;
            </span>
          ) : (
            <span key={i} className="text-[#D3D3D3] text-lg">
              &#9733;
            </span>
          )
        )}
        <a
          href="#"
          className="ml-2 text-sm text-gray-400 underline font-[poppins] hover:text-gray-600"
        >
          {product.reviews} reviews
        </a>
      </div>
    </div>
  </div>
);

const ProductShop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // only show limited products
  const visibleProducts = products.slice(0, itemsPerPage);

  return (
    <div className="w-full flex flex-col mt-8 sm:mt-10 md:mt-[59px] px-2 sm:px-4 md:px-0">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-start sm:items-center justify-center gap-2 sm:gap-[17px]">
          <div className="flex gap-2 text-gray-600">
            <div className="bg-[#DEDEDE] flex justify-center items-center p-2 rounded">
              <FaThLarge className="cursor-pointer" />
            </div>
            <div className="bg-[#DEDEDE] flex justify-center items-center p-2 rounded">
              <FaList className="cursor-pointer" />
            </div>
          </div>
          <p className="text-sm text-gray-600 font-[poppins]">
            Items 1–{visibleProducts.length} of {products.length}
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Sort By */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-[poppins]">
              Sort By
            </span>
            <select className="text-gray-600 bg-[#F0F0F0] px-2 py-1 text-sm font-[poppins] rounded">
              <option>Position</option>
              <option>Name</option>
              <option>Price</option>
            </select>
            <img
              src="/images/Frame5.svg"
              alt="Frame5"
              className="hidden sm:block"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-end items-center mt-6 gap-2">
        <span className="text-sm text-gray-600 font-[poppins]">Show</span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="bg-[#F0F0F0] px-2 py-1 text-sm font-[poppins] rounded"
        >
          <option value={9}>9</option>
          <option value={18}>18</option>
          <option value={32}>32</option>
        </select>
        <span className="text-sm text-gray-600 font-[poppins]">per page</span>
      </div>
    </div>
  );
};

export default ProductShop;
