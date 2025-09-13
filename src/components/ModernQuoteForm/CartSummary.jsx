// CartSummary.jsx
import React from "react";
import { ShoppingCart } from "lucide-react";

export default function CartSummary({ cartItems = [], formatCurrency, showPreview }) {
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      (Number(item.price) || 0) *
        (Number(item.quantity) || 0) *
        (Number(item.days) || 1),
    0
  );

  return (
    <div className={`rounded-2xl border border-gray-200 p-5 mt-6 sm:mt-0 flex flex-col bg-white shadow-md h-fit w-full sm:w-[100%] ${!showPreview ? "col-span-2" : "col-span-0"}`}>
      {/* Header */}
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
        <ShoppingCart className="w-5 h-5 text-orange-600" /> Cart Summary
      </h3>

      {cartItems?.length > 0 ? (
        <>
          <div className="space-y-3 flex-1 text-sm max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className="grid grid-cols-2 items-center border-b border-gray-100 pb-2"
              >
                {/* Item details */}
                <div className="text-gray-700">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.quantity} × {item.days || 1} day(s)
                  </p>
                </div>

                {/* Item total */}
                <div className="text-right font-semibold text-gray-800">
                  {formatCurrency(
                    (Number(item.price) || 0) *
                      (Number(item.quantity) || 0) *
                      (Number(item.days) || 1)
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="font-bold text-right mt-4 pt-3 border-t border-gray-200 text-gray-900 text-lg">
            Total:{" "}
            <span className="text-orange-600">{formatCurrency(subtotal)}</span>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-sm">Your cart is empty.</p>
      )}
    </div>
  );
}
