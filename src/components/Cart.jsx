// Cart.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import QuoteForm from "./QuoteForm";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const subtotal = getTotalPrice();

  // Dollar formatting
  const formatCurrency = (amount) => {
    return `$${Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  useEffect(() => {
    if (isQuoteOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isQuoteOpen]);

  return (
    <div
      className="p-4 flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto mt-20 tracking-tighter"
      style={{ minHeight: cartItems.length === 0 ? "60vh" : "auto" }}
    >
      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* Cart Items Section */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tighter">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-white rounded-xl shadow p-3 flex items-center gap-3"
              >
                {/* Image */}
                <img
                  src={item.img || item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />

                {/* Item Info & Controls */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Product Info */}
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-orange-600 font-bold text-sm mt-1">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>

                  {/* Quantity & Remove Controls */}
                  <div className="flex justify-between items-center mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.cartItemId)}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.cartItemId,
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                        className="w-10 text-center border rounded px-1 py-1 text-xs"
                        min="1"
                      />
                      <button
                        onClick={() => increaseQuantity(item.cartItemId)}
                        className="w-7 h-7 flex items-center justify-center bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-red-500 hover:text-red-600 text-xs flex items-center gap-1"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Section */}
      {cartItems.length > 0 && (
        <div className="w-full md:w-1/3 h-fit bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h3 className="text-xl sm:text-2xl font-bold">Summary</h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Subtotal</span>
            <span className="text-xl font-bold text-gray-800">
              {formatCurrency(subtotal)}
            </span>
          </div>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
          >
            Checkout
          </button>

          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear the cart?")) {
                clearCart();
              }
            }}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
