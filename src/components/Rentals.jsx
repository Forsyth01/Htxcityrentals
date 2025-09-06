import React from "react";
import { motion } from "framer-motion";
import { Table, PartyPopper, Check, ArrowRight } from "lucide-react";
import { Section, Card, SectionHeader } from "./common/Layout";
import { fadeIn, container } from "../utils/animations";
import { Anchor } from "../utils/navigation";

const rentals = [
  {
    icon: Table,
    title: "Tables",
    features: [
      "Round tables (seats 8–10)",
      "Rectangle banquet tables",
      "Cocktail & high-top tables",
    ],
  },
  {
    icon: Table,
    title: "Chairs",
    features: [
      "Chiavari, banquet, and folding",
      "Cleaned & sanitized every use",
      "Available in multiple colors",
    ],
  },
  {
    icon: PartyPopper,
    title: "Linens",
    features: [
      "Tablecloths – all sizes",
      "Chair covers, sashes, runners",
      "Napkins to match your theme",
    ],
  },
];

export default function Rentals() {
  return (
    <Section id="rentals" className=" xl:w-[80%] m-auto">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <SectionHeader
          title="Rentals"
          subtitle="Tables, chairs, and linens for every style and budget."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {rentals.map((rental, idx) => (
            <Card key={idx}>
              <div className="flex items-center gap-3">
                <rental.icon className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-slate-900">{rental.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {rental.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-orange-600" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#quote"
                  onClick={Anchor({ to: "#quote" })}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
                >
                  Request this <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
