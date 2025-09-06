import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState("1");

  const handleAddToCart = () => {
    const qty = Math.max(1, parseInt(quantity) || 1);
    addToCart(product, qty);
    setQuantity("1");
  };

  return (
    <motion.div
      className="max-w-sm mx-auto w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card Wrapper */}
      <motion.div
        className="group rounded-2xl shadow-md p-3 sm:p-4 flex flex-row sm:flex-col gap-3 sm:gap-0 bg-white h-full"
        whileHover={{
          y: -4,
          scale: 1.02,
          boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Product Image */}
        <motion.div className="flex-1 overflow-hidden rounded-xl sm:aspect-[4/3] w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full sm:h-full object-contain"
          />
        </motion.div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800 tracking-tight">
              {product.name}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 tracking-tight line-clamp-2 sm:line-clamp-none">
              {product.description}
            </p>
            <p className="text-orange-600 font-bold text-sm sm:text-lg mt-2 tracking-tight">
              ${product.price}/day
            </p>
          </div>

          {/* Quantity + Cart */}
          <div className="mt-2 sm:mt-3 flex flex-col items-center w-full gap-2">
            <div className="flex justify-between w-full gap-4 items-center">
              <h1 className="text-xs sm:text-sm font-medium text-gray-700 tracking-tight">
                Qty
              </h1>
              <div className="flex items-center justify-between w-24 sm:w-full bg-gray-200 text-center rounded-lg shadow-sm overflow-hidden">
                <motion.button
                  onClick={() =>
                    setQuantity((q) => String(Math.max(1, parseInt(q) - 1 || 1)))
                  }
                  className="px-2 py-2 sm:px-4 sm:py-2 bg-gray-100 hover:bg-white transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <Minus size={14} />
                </motion.button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full max-w-[40px] sm:max-w-[50px] text-center outline-none text-xs sm:text-sm"
                />
                <motion.button
                  onClick={() =>
                    setQuantity((q) => String((parseInt(q) || 1) + 1))
                  }
                  className="px-2 py-2 sm:px-4 sm:py-2 bg-gray-100 hover:bg-white transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus size={14} />
                </motion.button>
              </div>
            </div>

            <motion.button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors text-xs sm:text-sm font-medium tracking-tight"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={16} /> Add to Quote
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
