// ShopPage.tsx
"use client";

import OptionShop from "@/src/components/layout/shop/OptionShop";
import HeaderShop from "../../components/layout/shop/HeaderShop";
import React from "react";
import ProductShop from "@/src/components/layout/shop/ProductShop";

const ShopPage = () => {
  return (
    <section className="flex items-center justify-center flex-col ">
      <HeaderShop />
      <div className="flex flex-col lg:flex-row justify-between gap-7.5 w-full max-w-[1440px] px-2 sm:px-4 scale-90 origin-top">
        <OptionShop />
        <ProductShop />
      </div>
    </section>
  );
};

export default ShopPage;
