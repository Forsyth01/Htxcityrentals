import React from "react";
import { ArrowRight, Menu, X, Store } from "lucide-react";
import { Link } from "react-router";
import CartButton from "./CartButton";

export default function HeaderActions({
  location,
  cartItems,
  isSidebarOpen,
  setIsSidebarOpen,
  setIsCartOpen,
}) {
  const isCartPage = location.pathname === "/cart";
  const isOurProductsPage = location.pathname === "/ourproducts";
  const isMyProductPage = location.pathname === "/my-product";
  const isGraduationPage = location.pathname === "/graduation-packages";

  return (
    <div className="flex items-center gap-4 relative">
      <CartButton cartItems={cartItems} />

      {/* {isCartPage && (
        <Link to="/ourproducts">
          <button className="p-2 cursor-pointer rounded-full bg-white/50 text-gray-700 hover:bg-white/80 transition-all duration-200">
            <Store className="w-5 h-5" />
          </button>
        </Link>
      )} */}

      {!isCartPage &&
        !isOurProductsPage &&
        !isMyProductPage &&
        !isGraduationPage && (
          <Link
            to="/ourproducts"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-all duration-200 shadow-md"
          >
            Our Rentals
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}

      {
        !isMyProductPage &&
        (
          <button
            className="md:hidden p-2 rounded-full bg-white/50 text-gray-700 hover:bg-white/80 transition-all duration-200"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
    </div>
  );
}
