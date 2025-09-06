// CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item, quantity = 1) => {
    if (quantity <= 0) return;

    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);

      if (existingItem) {
        toast.success(`${item.name} quantity increased by ${quantity}!`, {
          id: `cart-${item.id}`,
        });
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        const newItem = { ...item, cartItemId: crypto.randomUUID(), quantity };
        toast.success(`${item.name} (x${quantity}) added to cart!`, {
          id: `cart-${newItem.cartItemId}`,
        });
        return [...prev, newItem];
      }
    });
  };

  const removeFromCart = (cartItemId) => {
    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    setCartItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
    toast(`${item.name} removed from cart`, { id: `cart-${cartItemId}` });
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, quantity } : i
      )
    );
    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (item) {
      toast.success(`${item.name} quantity updated to ${quantity}`, {
        id: `cart-${cartItemId}`,
      });
    }
  };

  const increaseQuantity = (cartItemId) => {
    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
    toast.success(`${item.name} quantity increased!`, { id: `cart-${cartItemId}` });
  };

  const decreaseQuantity = (cartItemId) => {
    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    if (item.quantity <= 1) {
      removeFromCart(cartItemId);
      return;
    }

    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, quantity: i.quantity - 1 } : i
      )
    );
    toast(`${item.name} quantity decreased`, { id: `cart-${cartItemId}` });
  };

  const clearCart = () => {
    setCartItems([]);
    toast("Cart cleared!", { id: "cart-clear" });
  };

  const getTotalItems = () => cartItems.length;
  const getTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const getItemTotal = (item) => item.price * item.quantity;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getTotalItems,
        getTotalQuantity,
        getTotalPrice,
        getItemTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
