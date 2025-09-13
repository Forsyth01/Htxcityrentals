import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../utils/products';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const PreviewCart = () => {
  // Variants for container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // faster stagger for grid items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div id="packages">
      <div className="bg-gray-100 py-8 sm:py-10 md:py-14 tracking-tighter">
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-tighter font-bold text-center mb-6 sm:mb-8 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} // triggers sooner
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Take A Look At Our Collection Of <br /> 
          <span className="text-orange-600">Luxury Event Rentals</span>
        </motion.h1>

        {/* Grid wrapper */}
        <motion.div
          className="flex w-full xl:w-[80%] mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // triggers sooner
        >
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.slice(0, 6).map((p) => (
              <motion.div key={p.name} variants={itemVariants}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        

        {/* Arrow Down with Link */}
        <motion.div
          className="flex flex-col items-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} // triggers sooner
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link 
            to="/ourproducts" 
            className="flex flex-col items-center text-gray-700 hover:text-orange-600 transition"
          >
            <span className="text-base sm:text-lg md:text-xl font-medium">
              See More
            </span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 mt-1 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PreviewCart;
