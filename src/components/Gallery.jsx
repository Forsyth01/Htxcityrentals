import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Section, SectionHeader } from "./common/Layout";

import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  { src: "/images/img1 (2).jpg", alt: "Wooden dining table with a minimalist white background" },
  { src: "/images/img1 (3).jpg", alt: "Modern black chair against a plain white background" },
  { src: "/images/img1 (4).jpg", alt: "Round event table with a simple gray backdrop" },
  { src: "/images/img1 (5).jpg", alt: "Stack of wooden chairs against a plain background" },
  { src: "/images/img1 (6).jpg", alt: "Minimalist table and chair set with a plain wall" },
];

// Motion Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Gallery() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current?.params?.navigation) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <Section id="gallery" className="text-center tracking-tighter">
      <div className="xl:w-[80%] m-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <SectionHeader
            title="Gallery"
            subtitle="A peek at events we've helped bring to life."
          />

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
            className="relative pb-12"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.src}>
                <motion.div
                  variants={itemVariants}
                  className="aspect-[4/3] rounded-2xl ring-1 ring-black/5 overflow-hidden bg-gradient-to-tr from-orange-200 via-orange-100 to-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.div
            className="flex justify-center gap-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button
              ref={prevRef}
              className="bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-700 transition cursor-pointer"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-700 transition cursor-pointer"
            >
              →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
