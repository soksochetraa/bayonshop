"use client";

import { useState } from "react";
import ProductList from "../components/layout/home/ProductList";
import Slider from "../components/layout/home/Slider";
import Static2 from "../components/ui/Static2";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Slider />
      <div className="w-full pt-[530px] relative">
        <ProductList />
      </div>
      <Static2 />
    </div>
  );
}
