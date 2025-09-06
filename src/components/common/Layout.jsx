import React from "react";
import { motion } from "framer-motion";
import { item } from "../../utils/animations";

export const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    {children}
  </section>
);

export const Card = ({ children, className = "" }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -4 }}
    className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white p-6 md:p-8 ${className}`}
  >
    {children}
  </motion.div>
);

export const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{value}</div>
    <div className="text-xs md:text-sm text-slate-600">{label}</div>
  </div>
);

export const SectionHeader = ({ title, subtitle, className = "" }) => (
  <div className={`mb-10 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
    {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
  </div>
);
