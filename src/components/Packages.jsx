import React from "react";
import { motion } from "framer-motion";
import { BadgeDollarSign, Check, ArrowRight } from "lucide-react";
import { Section, Card, SectionHeader } from "./common/Layout";
import { fadeIn, container } from "../utils/animations";
import { Anchor } from "../utils/navigation";

const packages = [
  {
    name: "Wedding Package",
    priceHint: "Custom priced",
    items: [
      "100 Chiavari chairs",
      "10 round tables",
      "Full linens included",
    ],
  },
  {
    name: "Birthday Package",
    priceHint: "Budget friendly",
    items: ["50 chairs", "5 banquet tables", "Colorful tablecloths"],
  },
  {
    name: "Corporate Package",
    priceHint: "Tailored quote",
    items: ["80 chairs", "8 rectangle tables", "Neutral linens"],
  },
];

export default function Packages() {
  return (
    <Section id="packages" className="bg-slate-50">
      <div className="xl:w-[80%] m-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <SectionHeader
            title="Popular Packages"
            subtitle="Pre-bundled options for common event sizes. Custom packages available."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {packages.map((pkg, i) => (
              <Card key={i}>
                <div className="flex items-center gap-2">
                  <BadgeDollarSign className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-slate-900">{pkg.name}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 mt-1 shrink-0 text-orange-600" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-500">{pkg.priceHint}</span>
                  <a
                    href="#quote"
                    onClick={Anchor({ to: "#quote" })}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
                  >
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
