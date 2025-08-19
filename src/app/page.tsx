"use client"; // Make sure this is a client component

import { useState } from "react";
import ProductList from "../components/layout/ProductList";
import Slider from "../components/layout/Slider";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Slider />
      <div className="w-full h-[500px] mt-[560px] relative">
        <ProductList />
      </div>
    </div>
  );
}
