import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

export default function DesktopNav({ location }) {
  const isGraduationPage = location.pathname === "/graduation-packages";
  const isCartPage = location.pathname === "/cart";
  const isOurProductsPage = location.pathname === "/ourproducts";

//   if (isCartPage || isOurProductsPage) return null;

  // parent controls stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // children animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      className="hidden md:flex items-center gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {!isGraduationPage && !isCartPage && !isOurProductsPage && (
        <motion.div variants={item}>
          <NavLink href="#gallery">Gallery</NavLink>
        </motion.div>
      )}
      {!isGraduationPage  && !isCartPage && !isOurProductsPage && (
        <motion.div variants={item}>
          <NavLink href="#faq">FAQ</NavLink>
        </motion.div>
      )}
      {!isGraduationPage && !isCartPage && !isOurProductsPage && (
        <motion.div variants={item}>
          <NavLink href="#contactus">Contact us</NavLink>
        </motion.div>
      )}
      <motion.div variants={item}>
        <Link
          to="/graduation-packages"
          className={`uppercase text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 ${isCartPage && " underline underline-offset-8 hover:scale-105"}`}
        >
          Graduation Packages
        </Link>
      </motion.div>
    </motion.nav>
  );
}
