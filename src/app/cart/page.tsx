"use client";

import CartItem from "@/components/cart/CartItem";
import CartEmpty from "@/components/cart/CartEmpty";
import { useCart } from "@/context/CartContext";
import Button from "@/components/common/Button";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const taxes = subtotal * 0.17;

  const shipping = parseFloat("50");

  const total = subtotal + taxes + 50.0;

  if (cartItems.length === 0) {
    return <CartEmpty />;
  }

  return (
    <>
      <div className="min-h-screen p-10 font-mono">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <Button
            className="text-xs text-gray-400 hover:text-gray-600 hover:underline"
            onClick={() => clearCart()}
            label="Clear Cart"
          />
        </div>
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.productId}
              className="flex gap-4 items-center border-b py-2"
            >
              <CartItem
                productId={item.productId}
                productName={item.productName}
                quantity={item.quantity}
                price={item.price}
                imageUrl="/images/products/bag.webp"
              />
            </li>
          ))}
        </ul>

        <div className="mt-4 grid grid-row-4 gap-2 place-items-end">
          <div>
            <strong>Subtotal:</strong> {formatCurrency(subtotal)} MXN
          </div>
          <div>
            <strong>Taxes:</strong> {formatCurrency(taxes)} MXN
          </div>
          <div>
            <strong>Shipping:</strong> {formatCurrency(shipping)} MXN
          </div>
          <div>
            <strong className="underline">Total</strong>: {formatCurrency(total)} MXN
          </div>
        </div>
      </div>
    </>
  );
}
