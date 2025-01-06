// src/components/product/ProductCard.tsx
"use client"; // If using Next.js App Router and client-side interactivity

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ProductCardProps {
  slug: string; // or id
  title: string;
  price: number;
  imageUrl: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  slug,
  title,
  price,
  imageUrl,
  onAddToCart,
}: ProductCardProps) {
  const handleClick = () => {
    // This will throw a runtime error in the browser console
    // and can be caught by React’s error boundary if you have one set up.
    throw new Error("User-triggered error for testing!");
  };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="border p-4 rounded hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link href={`/product/${slug}`}>
        {/* Image for the product thumbnail */}
        <div className="w-full h-40 relative mb-2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded"
            // "fill" + position ensures the image scales with the container
            // or you could use width/height for a simpler approach
          />
        </div>

        <h3 className="font-semibold text-md">{title}</h3>
      </Link>

      <p className="text-gray-500 mb-2">${price.toFixed(2)}</p>

      <div className="flex justify-between items-center">
        <Button
          onClick={handleClick}
          label={"Add to cart"}
          className={
            "text-sm bg-white text-black p-2 hover:bg-black hover:text-white border-2 border-black hover:border-white"
          }
        />
        <button
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <FontAwesomeIcon icon={faHeartSolid} className="w-5 h-5" />
          ) : (
            <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
