import React, { useState } from "react";
import { ArrowRight, Menu, X, ShoppingCart, Store } from "lucide-react";
import { Link, useLocation } from "react-router";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200"
  >
    {children}
  </a>
);

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const isOurProductsPage = location.pathname === "/ourproducts";
  const isCartPage = location.pathname === "/cart";
  const isMyProductPage = location.pathname === "/my-product";
  const isGraduationPage = location.pathname === "/graduation-packages";

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm font-sans tracking-tighter">
      <div className="mx-auto lg:max-w-[90%] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl tracking-tight">
          <span className="text-orange-600 italic">Htx</span>cityrentals
        </Link>

        {/* Desktop Nav */}
        {!isCartPage && !isOurProductsPage && !isMyProductPage && (
          <nav className="hidden md:flex items-center gap-8">
            {/* {!isGraduationPage && <NavLink href="#packages">Packages</NavLink>} */}
            {!isGraduationPage && <NavLink href="#gallery">Gallery</NavLink>}
            {!isGraduationPage && <NavLink href="#faq">FAQ</NavLink>}
            {!isGraduationPage && (
              <NavLink href="#contactus">Contact us</NavLink>
            )}
            <Link
              to="/graduation-packages"
              className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200"
            >
              Graduation Packages
            </Link>
          </nav>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-4 relative">
          {/* Cart Button */}
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

          {/* Cart page: link back to store on mobile */}
          {isCartPage && (
            <Link to="/ourproducts" className="">
              <button className="p-2 cursor-pointer rounded-full bg-white/50 text-gray-700 hover:bg-white/80 transition-all duration-200">
                <Store className="w-5 h-5" />
              </button>
            </Link>
          )}

          {/* Our Rentals button */}
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

          {/* Mobile menu button */}
          {!isCartPage &&
            !isOurProductsPage &&
            !isMyProductPage &&
            !isGraduationPage && (
              <button
                className="md:hidden p-2 rounded-full bg-white/50 text-gray-700 hover:bg-white/80 transition-all duration-200"
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                {isSidebarOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {!isCartPage && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      {!isCartPage && (
        <div
          className={`fixed top-0 left-0 z-50 w-full h-full bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link
                to="/"
                className="font-bold text-xl tracking-tight"
                onClick={toggleSidebar}
              >
                <span className="text-orange-600">Htx</span> cityrentals
              </Link>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 flex flex-col gap-6 p-6 bg-white">
              {/* {!isGraduationPage && <NavLink href="#packages" onClick={toggleSidebar}>Packages</NavLink>} */}
              {!isGraduationPage && (
                <NavLink href="#gallery" onClick={toggleSidebar}>
                  Gallery
                </NavLink>
              )}
              {!isGraduationPage && (
                <NavLink href="#faq" onClick={toggleSidebar}>
                  FAQ
                </NavLink>
              )}
              {!isGraduationPage && (
                <NavLink href="#contactus" onClick={toggleSidebar}>
                  Contact Us
                </NavLink>
              )}
              <Link
                to="/graduation-packages"
                className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200"
                onClick={toggleSidebar}
              >
                Graduation Packages
              </Link>
              <Link
                to="/ourproducts"
                className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 shadow-md transition-all duration-200"
                onClick={toggleSidebar}
              >
                Our Rentals <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
    </header>
  );
}
