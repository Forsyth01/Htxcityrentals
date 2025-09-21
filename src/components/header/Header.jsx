import React, { useState } from "react";
import { useLocation } from "react-router";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import MobileSidebar from "./MobileSidebar";
import PhoneNumberHeader from "../PhoneNumberHeader";
import Cart from "../Cart";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  // parent container animation
  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // child items
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white backdrop-blur-md border-b border-gray-200/50 shadow-sm font-sans tracking-tighter">
      {<PhoneNumberHeader />}

      <motion.div
        className="mx-auto lg:max-w-[90%] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Logo location={location} />
        </motion.div>

        <motion.div variants={item}>
          <DesktopNav location={location} />
        </motion.div>

        <motion.div variants={item}>
          <HeaderActions
            location={location}
            cartItems={cartItems}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            setIsCartOpen={setIsCartOpen}
          />
        </motion.div>
      </motion.div>

      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        location={location}
      />

      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
    </header>
  );
}
