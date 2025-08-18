"use client"; // Make sure this is a client component

import { useState } from "react";

export default function Home() {
  const images = [
    "/angkorwat_hero.png",
    "https://i.pinimg.com/1200x/aa/73/a1/aa73a1ba5adbf1419191d29f338ed8fb.jpg",
    "https://i.pinimg.com/1200x/33/a0/4c/33a04cb12840b5f609c2be4ee3f01278.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="absolute w-[100vw] h-[100vh] top-0 left-0 -z-1 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-16 left-1/4 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#7db800]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
