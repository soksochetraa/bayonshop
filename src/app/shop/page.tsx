// ShopPage.tsx
"use client";

import OptionShop from "@/src/components/layout/shop/OptionShop";
import HeaderShop from "../../components/layout/shop/HeaderShop";
import React from "react";
import ProductShop from "@/src/components/layout/shop/ProductShop";
import { ShopProvider } from "../../components/layout/shop/ShopContext";

const ShopPage = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <HeaderShop />
      <ShopProvider>
        <div className="flex flex-col lg:flex-row justify-between gap-10 w-full max-w-[1440px] px-2 sm:px-4 scale-90 origin-top">
          {/* Hide on small screens */}
          <div className="hidden lg:block">
            <OptionShop />
          </div>
          <ProductShop />
        </div>
      </ShopProvider>
    </section>
  );
};

export default ShopPage;
