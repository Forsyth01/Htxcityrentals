import React, { useMemo } from "react";
import { Anchor } from "../utils/navigation";
import { Link, Link as RouterLink } from "react-router";
import { motion } from "framer-motion";

// Motion-enabled Link
const MotionLink = motion(RouterLink);

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <motion.footer
      className="mt-2 border-t border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <motion.p
          className="text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          © {year} Htxcityrentals — Tables, Chairs & Linen Rentals
        </motion.p>

        <div className="flex items-center gap-6">
          <motion.a
            href="#faq"
            onClick={Anchor({ to: "#faq" })}
            className="text-slate-600 hover:underline"
            whileHover={{ y: -2, color: "#f97316" }} // orange-500 on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            FAQ
          </motion.a>
          <MotionLink
            
            onClick={Anchor({ to: "#quote" })}
            className="text-slate-600 hover:underline"
            whileHover={{ y: -2, color: "#f97316" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to ="/ourproducts" className="mr-2">
              Get a Quote
            </Link>
          </MotionLink>
        </div>
      </div>
    </motion.footer>
  );
}
