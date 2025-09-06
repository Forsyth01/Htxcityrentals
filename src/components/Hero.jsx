import React from "react";
import { motion } from "framer-motion";
import { PartyPopper, ArrowRight } from "lucide-react";
import { Section, Stat } from "./common/Layout";
import { container, item } from "../utils/animations";
import { Anchor } from "../utils/navigation";

export default function Hero() {
  return (
    <Section id="#home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-orange-50 to-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-700 ring-1 ring-orange-200">
            <PartyPopper className="w-4 h-4" /> Your trusted event rental partner
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Transform Your Event with <span className="text-orange-600">Htx</span>cityrentals
          </h1>

          <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
            Premium tables, chairs, and linens for weddings, parties, and corporate events.
            Reliable delivery, spotless quality, and friendly service.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="#rentals"
              onClick={Anchor({ to: "#rentals" })}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800"
            >
              Browse Rentals <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#quote"
              onClick={Anchor({ to: "#quote" })}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Get a Quote
            </motion.a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <Stat value="2k+" label="Chairs in inventory" />
            <Stat value="350+" label="Events completed" />
            <Stat value="24–48h" label="Flexible delivery" />
          </div>
        </motion.div>

        <motion.div variants={item} className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-orange-200 via-orange-100 to-white ring-1 ring-black/5 overflow-hidden"
          >
            <div className="absolute inset-0 grid grid-cols-3 gap-3 p-4 opacity-80">
              <img src="/images/chair.png" alt="" />
              <img src="/images/chair.png" alt="" />
              <img src="/images/chair.png" alt="" />
              <img src="/images/chair.png" alt="" />
              <img src="/images/chair.png" alt="" />
              <img src="/images/chair.png" alt="" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
