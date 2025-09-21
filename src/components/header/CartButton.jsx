import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export default function CartButton({ cartItems }) {
  return (
    <Link to="/cart" className="relative">
      <button className="p-2 rounded-full cursor-pointer bg-white/50 text-gray-700 hover:bg-white/80 transition-all duration-200">
        <ShoppingCart className="w-5 h-5" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-600 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>
    </Link>
  );
}
