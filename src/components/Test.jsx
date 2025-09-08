import React, { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/images/hero/img2.jpg",
  "/images/hero/img3.jpg",
  "/images/hero/img4.jpg",
  "/images/hero/img5.jpg", 
  "/images/hero/img6.jpg",
];

export default function Hero2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen md:h-[100vh] lg:h-[100vh] xl:h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Images with fade transition */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Animated Hero Content */}
      <motion.div
        className="flex flex-col justify-end md:h-[80vh] lg:h-[70vh] 2xl:h-[50vh] h-[50vh] relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Tagline */}
          <motion.span
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-700 ring-1 ring-orange-200"
            variants={itemVariants}
          >
            <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5" /> Your trusted event rental partner
          </motion.span>

          {/* Hero Heading */}
          <motion.h1
            className="mt-4 text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-white tracking-tighter"
            variants={itemVariants}
          >
            Transform Your Event with <br />
            <span className="text-orange-400">Htxcityrentals</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-4 text-gray-200 text-sm sm:text-base md:text-base xl:text-lg leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Premium tables, chairs, and linens for weddings, parties, and corporate events.
            Reliable delivery, spotless quality, and friendly service.
          </motion.p>

          {/* CTA */}
          <motion.a href="#packages" variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <button className="mt-6 cursor-pointer bg-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-orange-700 transition text-sm sm:text-base">
              Explore our items
            </button>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
