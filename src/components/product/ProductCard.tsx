"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useModal } from "@/context/ModalContext";

interface ProductCardProps {
  productId: number;
  slug: string;
  title: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  productId,
  slug,
  title,
  price,
  imageUrl,
}: ProductCardProps) {
  const { addItem } = useCart();
  const { openModal, closeModal } = useModal();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId,
      productName: title,
      quantity: 1,
      price,
      imageUrl,
    });

    openModal(
      <>
        <p className="mb-4">"{title}" has been added to your cart.</p>
        <div className="flex justify-end space-x-2">
          <Link href="/cart">
            <Button
              label="View cart"
              className={
                "text-sm bg-black text-white p-2 hover:text-gray-300 border-2 border-white hover:border-gray-300"
              }
              onClick={closeModal}
            />
          </Link>
          <Button
            label="Continue Shopping"
            className={
              "text-sm bg-white text-black p-2 hover:bg-gray-300 border-2 border-black"
            }
            onClick={closeModal}
          />
        </div>
      </>,
      true,
      2000,
      "You have good taste!"
    );
  };

  return (
    <div className="border p-4 rounded hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link href={`/product/${slug}`}>
        <div className="w-full aspect-square relative mb-2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded"
          />
        </div>

        <h3 className="font-semibold text-md">{title}</h3>
      </Link>

      <p className="text-gray-500 mb-2">${price.toFixed(2)}</p>

      <div className="flex justify-between items-center">
        <Button
          onClick={handleAddToCart}
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
          <FontAwesomeIcon
            icon={isHovered ? faHeartSolid : faHeart}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
}
