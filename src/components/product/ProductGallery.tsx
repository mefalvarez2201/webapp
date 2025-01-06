// src/components/product/ProductGallery.tsx
"use client"; // If using Next.js App Router and client-side interactivity

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: { url: string; alt: string }[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null; // or a fallback
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full">
      {/* Main image display */}
      <div className="relative w-full h-80 mb-4">
        <Image
          src={images[activeIndex].url}
          alt={images[activeIndex].alt}
          fill
          className="object-cover rounded-md"
        />
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 p-2 bg-white/70 rounded-r-md transform -translate-y-1/2 hover:bg-white"
        >
          ◀
        </button>
        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 p-2 bg-white/70 rounded-l-md transform -translate-y-1/2 hover:bg-white"
        >
          ▶
        </button>
      </div>

      {/* Thumbnails / Dots */}
      <div className="flex gap-2 justify-center">
        {images.map((img, index) => (
          <button
            key={img.url}
            onClick={() => setActiveIndex(index)}
            className={`w-16 h-16 relative border-2 ${
              index === activeIndex
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover rounded-sm"
            />
          </button>
        ))}
      </div>
    </div>
  );
}