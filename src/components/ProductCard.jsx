import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState("1");
  const [days, setDays] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity, days);
    setQuantity("1");
    setDays(1);
  };

  return (
    <motion.div
      className="max-w-sm mx-auto w-full h-full"
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

            {/* Price */}
            <p className="text-orange-600 font-bold text-sm sm:text-lg mt-2 tracking-tight">
              ${product.price}/day
            </p>
          </div>

          {/* Quantity + Days */}
          <div className="mt-3 flex gap-4 flex-wrap">
            {/* Quantity */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm font-medium text-gray-700">Qty:</span>
              <div className="ml-2 flex items-stretch bg-gray-100 rounded- overflow-hidden borde border-gray-300">
                <motion.button
                  onClick={() =>
                    setQuantity((q) =>
                      String(Math.max(1, parseInt(q) - 1 || 1))
                    )
                  }
                  className="px-2 sm:px-3 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <Minus size={14} />
                </motion.button>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-14 text-center outline-none text-sm bg-gray-100"
                />

                <motion.button
                  onClick={() =>
                    setQuantity((q) => String((parseInt(q) || 1) + 1))
                  }
                  className="px-2 sm:px-3 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus size={14} />
                </motion.button>
              </div>
            </div>

            {/* Days */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm font-medium text-gray-700">Days:</span>
              <div className="flex items-stretch bg-gray-100 rounded- overflow-hidden  border-gray-300">
                <button
                  onClick={() => setDays((d) => Math.max(1, d - 1))}
                  className="px-2 sm:px-3 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <Minus size={14} />
                </button>

                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(e) =>
                    setDays(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-14 text-center outline-none text-sm bg-gray-100"
                />

                <button
                  onClick={() => setDays((d) => d + 1)}
                  className="px-2 sm:px-3 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors text-xs sm:text-sm font-medium tracking-tight mt-3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={16} /> Add to Quote
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
