import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./common/Layout";

const faqs = [
  { q: "Who are we?", a: "We are a local rental company in the Greater Houston area..." },
  { q: "How do I make a reservation and payment?", a: "Event equipment is reserved upon..." },
  { q: "What is your cancellation policy?", a: "If you decide to cancel your rental..." },
  { q: "Do I need to make a reservation?", a: "Reservations are required..." },
  { q: "Do you deliver?", a: "Yes! Average delivery rates start at $55..." },
  { q: "Do you offer Customer pick-ups?", a: "We don't offer customer pick-ups..." },
  { q: "What are your standard delivery hours?", a: "Our standard Delivery is Monday through Sunday 8-8" },
  { q: "Can I set up a delivery time?", a: "Yes! Deliveries can be scheduled..." },
  { q: "Can I get a refund on un-used rental equipment?", a: "Unfortunately not, we charge for time out not time used." },
  { q: "Do you set up the equipment?", a: "We can set up the equipment for an extra charge..." },
  { q: "What if I lose or damage an item?", a: "You will be charged the replacement cost..." },
  { q: "What credit cards do you accept?", a: "VISA, Master Card, Discover and most Debit cards." },
  { q: "Do you offer late night, early morning, Saturday or Sunday deliveries?", a: "Yes, we can do them! Please call for a quote." },
  { q: "What do I need to rent?", a: "A valid license." },
];

function FAQItem({ q, a, i, openIndex, setOpenIndex }) {
  const isOpen = openIndex === i;

  return (
    <motion.div
      className="border-b border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : i)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-slate-900">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <PlusIcon />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`faq-${i}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-orange-500 cursor-pointer"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" className="bg-slate-50 tracking-tighter">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6"
        >
          FAQ
        </motion.h2>

        <motion.div
          className="rounded-2xl bg-white ring-1 ring-black/5 p-2 md:p-4 "
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              i={i}
              q={f.q}
              a={f.a}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
