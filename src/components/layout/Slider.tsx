"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Slider() {
  const slides = [
    {
      bg: "/images/hero_furniture.png",
      title: "Modern Wood Chair Collection",
      description:
        "Discover hand-crafted chairs designed for comfort and style. Perfect for your workspace.",
      products: [
        "https://i.pinimg.com/736x/d7/41/5a/d7415a8963fc0afe625609f26aa1c75c.jpg",
        "https://i.pinimg.com/736x/49/ba/28/49ba28369467fcd42fc9a82f12863c4c.jpg",
        "https://i.pinimg.com/1200x/86/d2/2b/86d22bd6d3627b503dec62166e4ff540.jpg",
      ],
    },
    {
      bg: "/images/hero_sofa.png",
      title: "Luxury Sofa Sets",
      description:
        "Upgrade your home with our premium sofa collections that blend comfort and elegance.",
      products: [
        "https://i.pinimg.com/1200x/d3/a8/5d/d3a85d97fd8f20ab54c011870254c05c.jpg",
        "https://i.pinimg.com/736x/89/53/12/8953128f733d9959727a574ae9017d57.jpg",
        "https://i.pinimg.com/736x/49/98/3a/49983acea1a5be66e8029735a4e03b15.jpg",
      ],
    },
    {
      bg: "images//hero_decor.png",
      title: "Home Décor Essentials",
      description:
        "Make every corner of your house beautiful with our curated décor collection.",
      products: [
        "https://i.pinimg.com/1200x/c8/75/85/c875857f34f70b65cba022f6a16ddc9e.jpg",
        "https://i.pinimg.com/736x/99/9e/06/999e0651240f386b2c258a5cffe0fa90.jpg",
        "https://i.pinimg.com/1200x/39/7e/c7/397ec706f00267a2c4416540f5b84e36.jpg",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="absolute w-screen h-[500px] md:h-[694px] top-0 left-0 -z-10 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.bg}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay content */}
          <div
            className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20
              px-6 text-white z-20 ${poppins.className}`}
          >
            {/* Text Section */}
            <div className="flex flex-col justify-center items-center md:items-start gap-4 max-w-sm text-center md:text-left">
              <h2 className="font-bold h-[76px] text-2xl md:text-4xl">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base font-light mb-4">
                {slide.description}
              </p>
              <button
                className="w-[120px] md:w-[140px] h-[40px] md:h-[45px] bg-[#7db800] text-white flex items-center justify-center rounded-lg"
                style={{ boxShadow: "0px 3.5px 8.5px 0 rgba(0, 0, 0, 0.14)" }}
              >
                Shop Now
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  className="inline-block ml-2"
                  size={16}
                />
              </button>
            </div>

            {/* Products section */}
            <div className="flex justify-center items-center gap-4 mt-6 md:mt-0">
              <div className="flex flex-col gap-2">
                <img
                  src={slide.products[0]}
                  alt="Product 1"
                  className="w-28 h-40 md:w-[270px] md:h-[200px] object-cover"
                />
                <img
                  src={slide.products[1]}
                  alt="Product 2"
                  className="w-28 h-40 md:w-[270px] md:h-[200px] object-cover"
                />
              </div>
              <div>
                <img
                  src={slide.products[2]}
                  alt="Product 3"
                  className="w-40 h-56 md:w-[300px] md:h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 md:bottom-16 left-1/4 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#7db800]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
