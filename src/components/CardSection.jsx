import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function CardSection() {
  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-black lg:py-20 py-10 tracking-tighter">
      <div className="mx-auto max-w-5xl p-4">
        <motion.article
          className="grid overflow-hidden xl:rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-xl md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text side */}
          <motion.div
            className="flex flex-col justify-center gap-5 p-6 sm:p-8 md:p-10"
            variants={itemVariants}
          >
            <motion.span
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-gray-700"
              variants={itemVariants}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Premium Event Rentals
            </motion.span>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
                Effortless Event Rentals
              </h2>
              <p className="mt-1 text-base text-gray-700 sm:text-lg">
                Everything you need, delivered on time
              </p>
            </motion.div>

            <motion.p className="text-gray-600 leading-relaxed" variants={itemVariants}>
              At Htxcityrentals, we specialize in providing premium event
              rentals that bring your celebrations to life. From elegant chairs
              and tables to luxury décor pieces, we help transform weddings,
              birthdays, corporate events, and private parties into
              unforgettable experiences.
            </motion.p>

            <motion.ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2" variants={itemVariants}>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Fast delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Flexible packages
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Transparent pricing
              </li>
            </motion.ul>

            <motion.div className="mt-2 flex flex-wrap items-center gap-3" variants={itemVariants}>
              <Link
                to="/ourproducts"
                className="inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-medium text-white shadow-sm outline-none transition focus-visible:ring-4 focus-visible:ring-orange-500/30 active:scale-[.99] bg-gradient-to-tr from-orange-600 to-orange-500 hover:from-orange-600 hover:to-orange-600"
                whileHover={{ scale: 1.05 }}
              >
                Explore
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="relative min-h-[240px] md:min-h-[360px]"
            variants={itemVariants}
          >
            <img
              src="/images/chairfit.jpg"
              alt="Event setup with tables, chairs and string lights"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/60 to-transparent md:from-white/60" />
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}
