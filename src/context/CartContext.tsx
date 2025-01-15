"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalQuantity: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          setCartItems(JSON.parse(storedCart));
        }
        catch (error) {
          console.error("Failed to parse cart from Local Storage:", error);
          localStorage.removeItem("cart");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function addItem(newItem: CartItem) {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.productId === newItem.productId);
      if (existingItem) {
        return prev.map((i) =>
          i.productId === newItem.productId
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        );
      }
      return [...prev, newItem];
    });
  }

  function removeItem(productId: number) {
    setCartItems((prev) => prev.filter((i) => i.productId !== productId));
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setCartItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  function getTotalQuantity() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  const value: CartContextType = {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalQuantity
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
