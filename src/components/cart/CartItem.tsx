import Image from "next/image";
import Button from "../common/Button";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

export default function CartItem({
  productId,
  productName,
  quantity,
  price,
  imageUrl,
}: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <>
      <div className="grid grid-cols-12 items-center py-4 w-full">
        <div className="col-span-2">
          <Image
            src={imageUrl}
            alt={productName}
            width={140}
            height={140}
            className="object-cover rounded"
          />
        </div>
        <div className="col-span-4">
          <h3 className="font-semibold">{productName}</h3>
          <p>${price.toFixed(2)}</p>
        </div>

        <div className="col-span-4 flex items-center space-x-4">
          <Button
            label="-"
            className="px-2 py-1 border"
            onClick={() => updateQuantity(productId, quantity - 1)}
          />
          <span>{quantity}</span>
          <Button
            label="+"
            className="px-2 py-1 border"
            onClick={() => updateQuantity(productId, quantity + 1)}
          />
        </div>

        <div className="col-span-2">
          <Button
            onClick={() => removeItem(productId)}
            className="text-red-500 hover:underline"
            label="Remove"
          />
        </div>
      </div>
    </>
  );
}
