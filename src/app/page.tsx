"use client";

import { useState } from "react";
import ProductList from "../components/layout/home/ProductList";
import Slider from "../components/layout/home/Slider";
import Static2 from "../components/ui/Static2";
import News1 from "../components/ui/News1";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <Slider />
      <div className="w-full pt-[530px] relative">
        <ProductList />
      </div>
      <Static2 />
      <News1 />
    </div>
  );
}
