// src/components/layout/shop/ProductShop.tsx
"use client";

import React, { useState, useMemo } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import { useShop } from "./ShopContext";
import ProductCard1 from "../../ui/ProductCard1";

const ProductShop = () => {
  const { filteredProducts } = useShop();
  const [gridView, setGridView] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Position");

  // Sorting logic
  const sortedProducts = useMemo(() => {
    let products = [...filteredProducts];
    switch (sortBy) {
      case "PriceLowHigh":
        products.sort((a, b) => a.price - b.price);
        break;
      case "PriceHighLow":
        products.sort((a, b) => b.price - a.price);
        break;
      case "Rating":
        products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break; // "Position" keeps original order
    }
    return products;
  }, [filteredProducts, sortBy]);

  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full flex flex-col mt-13.5">
      {/* Top Bar */}
      <div className="flex md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-start sm:items-center justify-center gap-2 sm:gap-[17px]">
          <div className="flex gap-2 text-gray-600">
            <div
              className={`bg-[#DEDEDE]  justify-center items-center p-2 rounded hidden md:block ${
                gridView ? "bg-[#7DB800]" : "bg-[#DEDEDE]"
              }`}
              onClick={() => setGridView(true)}
            >
              <FaThLarge className="cursor-pointer" />
            </div>
            <div
              className={`bg-[#DEDEDE]  justify-center items-center p-2 rounded hidden md:block ${
                !gridView ? "bg-[#7DB800]" : "bg-[#DEDEDE]"
              }`}
              onClick={() => setGridView(false)}
            >
              <FaList className="cursor-pointer" />
            </div>
          </div>
          <p className="text-sm text-gray-600 font-[poppins]">
            Items {startIndex + 1}–
            {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-[poppins]">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1); // reset page on sort change
            }}
            className="bg-[#F0F0F0] px-2 py-1 text-sm font-[poppins] rounded w-[86px] lg:w-[130px]"
          >
            <option value="Position">Position</option>
            <option value="PriceLowHigh">Price: Low to High</option>
            <option value="PriceHighLow">Price: High to Low</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div
        className={`grid gap-6 ${
          gridView
            ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {visibleProducts.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center mt-10">
            No products match your filters.
          </p>
        ) : (
          visibleProducts.map((p) => (
            <ProductCard1
              key={p.id}
              id={p.id}
              title={p.title}
              category={p.category}
              price={p.price}
              oldPrice={p.oldPrice}
              discountPercent={p.discountPercent}
              rating={p.rating}
              image={p.images[0]}
              images={p.images}
              countdownEnd={p.countdownEnd}
              isListView={!gridView}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className=" hidden md:flex flex-col sm:flex-row justify-end items-center mt-6 gap-2">
        <span className="text-sm text-gray-600 font-[poppins]">Show</span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1); // reset page
          }}
          className="bg-[#F0F0F0] px-2 py-1 text-sm font-[poppins] rounded"
        >
          <option value={9}>9</option>
          <option value={18}>18</option>
          <option value={32}>32</option>
        </select>
        <span className="text-sm text-gray-600 font-[poppins]">per page</span>
      </div>
      <div className="md:hidden flex items-center justify-center gap-2 sm:mt-0 mt-6">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 border rounded disabled:opacity-50 mr-7"
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`p-2  ${
              currentPage === num ? "bg-[#E5E5E5] font-bold" : ""
            }`}
          >
            {num}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="p-2 border rounded disabled:opacity-50 ml-7"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductShop;
