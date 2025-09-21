import React, { useEffect } from "react";
import { Link } from "react-router";
import { StoreIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

export default function MobileSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  location,
}) {
  const Home = location.pathname === "/";
  const isCartPage = location.pathname === "/cart";
  const isOurProductsPage = location.pathname === "/ourproducts";
  const isGraduationPage = location.pathname === "/graduation-packages";

//   if (isCartPage) return null;

  // ✅ Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isSidebarOpen]);

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const navVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkHover = {
    scale: 1.05,
    color: "#ea580c",
    transition: { duration: 0.2 },
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed top-0 left-0 z-[300] w-full h-screen bg-gray-200 md:hidden"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.4 }}
          >
            <div className="flex flex-col justify-center">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <Link
                  to="/"
                  className="font-bold text-xl tracking-tight"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <img src="/logo2.png" alt="Logo" className="h-16" />
                </Link>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Nav with staggered children */}
              <div className="flex-1 flex flex-col justify-center w-full border-b border-gray-300">
                <motion.nav
                  className="flex flex-col h-[80vh] space-y-4 justify-center items-center w-full px-6"
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {
                    <motion.div
                      className="w-full"
                      variants={linkVariants}
                      whileHover={linkHover}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/"
                        className="block text-2xl uppercase font-medium text-gray-800 transition-colors duration-200"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Home
                      </Link>
                    </motion.div>
                  }
                  {!isGraduationPage ||
                    isOurProductsPage ||
                    (isCartPage && (
                      <motion.div
                        className="w-full border-b border-gray-300"
                        variants={linkVariants}
                        whileHover={linkHover}
                        whileTap={{ scale: 0.95 }}
                      >
                        <NavLink
                          href="#gallery"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Gallery
                        </NavLink>
                      </motion.div>
                    ))}
                  {!isGraduationPage ||
                    isOurProductsPage ||
                    (isCartPage && (
                      <motion.div
                        className="w-full border-b border-gray-300"
                        variants={linkVariants}
                        whileHover={linkHover}
                        whileTap={{ scale: 0.95 }}
                      >
                        <NavLink
                          href="#faq"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          FAQ
                        </NavLink>
                      </motion.div>
                    ))}
                  {!isGraduationPage ||
                    isOurProductsPage ||
                    (isCartPage && (
                      <motion.div
                        className="w-full border-b border-gray-300"
                        variants={linkVariants}
                        whileHover={linkHover}
                        whileTap={{ scale: 0.95 }}
                      >
                        <NavLink
                          href="#contactus"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Contact Us
                        </NavLink>
                      </motion.div>
                    ))}
                  <motion.div
                    className="w-full border-b border-gray-300"
                    variants={linkVariants}
                    whileHover={linkHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/graduation-packages"
                      className="block text-2xl uppercase font-medium text-gray-800 transition-colors duration-200"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Graduation Packages
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full"
                    variants={linkVariants}
                    whileHover={linkHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/ourproducts"
                      className="block text-2xl uppercase font-medium text-gray-800 transition-colors duration-200"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Our Rentals
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full"
                    variants={linkVariants}
                    whileHover={linkHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/cart"
                      className="block text-2xl uppercase font-medium text-gray-800 transition-colors duration-200"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <StoreIcon height={20} width={20} /> Cart
                      </span>
                    </Link>
                  </motion.div>
                </motion.nav>

                {/* Footer */}
                <footer className="w-full border-t border-gray-300 py-4 text-center text-sm text-gray-600">
                  © 2025 <span className="font-semibold">Htxcityrentals</span> —
                  Tables, Chairs & Linen Rentals
                </footer>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
