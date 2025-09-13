import React from "react";
import QuoteForm from "./components/QuoteForm";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import OurProducts from "./pages/OurProducts";
import Header from "./components/Header";
import MyCart from "./pages/MyCart";
import GraduationPackages from "./pages/GraduationPackages";
import Footer from "./components/Footer";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 50, scale: 0.98 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -50, scale: 0.98 },
};

// Transition settings
const pageTransition = { type: "tween", ease: "easeInOut", duration: 0.5 };

const App = () => {
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);
  const location = useLocation();

  return (
    <CartProvider>
      <Toaster position="bottom-right" toastOptions={{ autoClose: 1000 }} />
      <Header />

      {/* AnimatePresence uses browser scrollbar only */}
      <AnimatePresence mode="wait" initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {[
            { path: "/ourproducts", Component: OurProducts },
            { path: "/cart", Component: MyCart },
            { path: "/graduation-packages", Component: GraduationPackages },
          ].map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="w-full"
                >
                  <Component />
                </motion.div>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>

      {/* <QuoteForm
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      /> */}
    </CartProvider>
  );
};

export default App;
