"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  rating: number;
  image: string;
  slug: string;
}

interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToFavorites = (product: Product) => {
    setFavorites((prev) =>
      prev.some((item) => item.slug === product.slug)
        ? prev
        : [...prev, product]
    );
  };

  const removeFromFavorites = (slug: string) => {
    setFavorites((prev) => prev.filter((item) => item.slug !== slug));
  };

  const isFavorite = (slug: string) => {
    return favorites.some((item) => item.slug === slug);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
