// src/components/layout/shop/ShopContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  Product,
  products as allProducts,
} from "../../../../utils/product/products";

interface ShopContextType {
  selectedFilters: Record<string, string>;
  setSelectedFilters: (filters: Record<string, string>) => void;
  filteredProducts: Product[];
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
};

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({
    Style: "All",
    Category: "All",
    Size: "All",
    Price: "All",
    Color: "All",
  });

  // Filtering logic
  const filteredProducts = allProducts.filter((product) => {
    // Style
    if (
      selectedFilters.Style !== "All" &&
      product.style !== selectedFilters.Style
    ) {
      return false;
    }

    // Category
    if (
      selectedFilters.Category !== "All" &&
      product.category !== selectedFilters.Category
    ) {
      return false;
    }

    // Size
    if (
      selectedFilters.Size !== "All" &&
      product.size !== selectedFilters.Size
    ) {
      return false;
    }

    // Color
    if (
      selectedFilters.Color !== "All" &&
      product.color !== selectedFilters.Color
    ) {
      return false;
    }

    // Price
    if (selectedFilters.Price !== "All") {
      const priceRange = selectedFilters.Price;
      const productPrice = product.price;

      switch (priceRange) {
        case "$0 - $50":
          if (productPrice < 0 || productPrice > 50) return false;
          break;
        case "$50 - $100":
          if (productPrice < 50 || productPrice > 100) return false;
          break;
        case "$100 - $200":
          if (productPrice < 100 || productPrice > 200) return false;
          break;
        case "$200+":
          if (productPrice < 200) return false;
          break;
        default:
          break;
      }
    }

    return true;
  });

  return (
    <ShopContext.Provider
      value={{
        selectedFilters,
        setSelectedFilters,
        filteredProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
