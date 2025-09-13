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

  const MAX_CART_VALUE = 500_000; // max cart value

  const getTotalPrice = () =>
    cartItems.reduce(
      (total, item) => total + item.price * item.quantity * (item.days || 1),
      0
    );

  const getItemTotal = (item) => item.price * item.quantity * (item.days || 1);

  // Add item to cart
  const addToCart = (item, quantity = 1, days = 1) => {
    if (quantity <= 0 || days <= 0) return;

    const currentTotal = getTotalPrice();
    const itemTotal = item.price * quantity * days;

    if (currentTotal + itemTotal > MAX_CART_VALUE) {
      toast.error(
        `Cannot add this item. Cart total cannot exceed $${MAX_CART_VALUE.toLocaleString()}`,
        { id: "cart-limit" }
      );
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);

      if (existingItem) {
        toast.success(`${item.name} quantity increased by ${quantity}!`, {
          id: `cart-${item.id}`,
        });
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantity, days: i.days || days }
            : i
        );
      } else {
        const newItem = {
          ...item,
          cartItemId: crypto.randomUUID(),
          quantity,
          days,
        };
        toast.success(`${item.name} (x${quantity}) added to cart!`, {
          id: `cart-${newItem.cartItemId}`,
        });
        return [newItem, ...prev];
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

    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    const currentTotalExcludingItem =
      getTotalPrice() - getItemTotal(item);
    const newItemTotal = item.price * quantity * (item.days || 1);

    if (currentTotalExcludingItem + newItemTotal > MAX_CART_VALUE) {
      toast.error(
        `Cannot update quantity. Cart total cannot exceed $${MAX_CART_VALUE.toLocaleString()}`,
        { id: `cart-limit-${cartItemId}` }
      );
      return;
    }

    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, quantity } : i
      )
    );

    toast.success(`${item.name} quantity updated to ${quantity}`, {
      id: `cart-${cartItemId}`,
    });
  };

  const updateDays = (cartItemId, days) => {
    if (days <= 0) days = 1;

    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    const currentTotalExcludingItem =
      getTotalPrice() - getItemTotal(item);
    const newItemTotal = item.price * item.quantity * days;

    if (currentTotalExcludingItem + newItemTotal > MAX_CART_VALUE) {
      toast.error(
        `Cannot update rental days. Cart total cannot exceed $${MAX_CART_VALUE.toLocaleString()}`,
        { id: `cart-limit-${cartItemId}` }
      );
      return;
    }

    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, days } : i
      )
    );

    toast.success(`${item.name} rental days updated to ${days}`, {
      id: `cart-${cartItemId}`,
    });
  };

  const increaseQuantity = (cartItemId) => {
    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    updateQuantity(cartItemId, item.quantity + 1);
  };

  const decreaseQuantity = (cartItemId) => {
    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    if (item.quantity <= 1) {
      removeFromCart(cartItemId);
      return;
    }

    updateQuantity(cartItemId, item.quantity - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    toast("Cart cleared!", { id: "cart-clear" });
  };

  const getTotalItems = () => cartItems.length;
  const getTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateDays,
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
