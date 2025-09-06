// ===== package.json =====
{
  "name": "htxcityrentals",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5"
  }
}

// ===== src/main.jsx =====
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ===== src/index.css =====
@tailwind base;
@tailwind components;
@tailwind utilities;

// ===== src/App.jsx =====
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rentals from "./components/Rentals";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <Rentals />
      <Packages />
      <Gallery />
      <FAQ />
      <Quote />
      <Footer />
    </div>
  );
}

// ===== src/utils/animations.js =====
export const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.5, ease: "easeOut" },
  },
};

export const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

// ===== src/utils/navigation.js =====
export const Anchor = ({ to }) => {
  const handle = (e) => {
    e.preventDefault();
    document.querySelector(to)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return handle;
};

// ===== src/components/common/Layout.jsx =====
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
    <div className="text-3xl md:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="text-xs md:text-sm text-slate-600">{label}</div>
  </div>
);

export const SectionHeader = ({ title, subtitle, className = "" }) => (
  <div className={`mb-10 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
  </div>
);

// ===== src/components/Header.jsx =====
import React from "react";
import { ArrowRight } from "lucide-react";
import { Anchor } from "../utils/navigation";

const NavLink = ({ href, children }) => {
  const onClick = Anchor({ to: href });
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  );
};

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-backdrop-blur:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={Anchor({ to: "#home" })} className="font-semibold text-lg tracking-tight">
          <span className="text-orange-600">Htx</span>cityrentals
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#rentals">Rentals</NavLink>
          <NavLink href="#packages">Packages</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#quote">Get a Quote</NavLink>
        </nav>
        <a
          href="#quote"
          onClick={Anchor({ to: "#quote" })}
          className="md:inline-flex hidden items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800"
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

// ===== src/components/Hero.jsx =====
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
            Transform Your Event with <span className="text-orange-600">Htxcityrentals</span>
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
              <div className="rounded-xl bg-white/70" />
              <div className="rounded-xl bg-white/70" />
              <div className="rounded-xl bg-white/70" />
              <div className="rounded-xl bg-white/70" />
              <div className="rounded-xl bg-white/70" />
              <div className="rounded-xl bg-white/70" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ===== src/components/Rentals.jsx =====
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
    <Section id="rentals" className="bg-white">
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
                <h3 className="text-xl font-semibold">{rental.title}</h3>
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

// ===== src/components/Packages.jsx =====
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
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
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
    </Section>
  );
}

// ===== src/components/Gallery.jsx =====
import React from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./common/Layout";
import { fadeIn, container, item } from "../utils/animations";

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-white">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <SectionHeader
          title="Gallery"
          subtitle="A peek at events we've helped bring to life."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              variants={item}
              className="aspect-[4/3] rounded-2xl ring-1 ring-black/5 overflow-hidden bg-gradient-to-tr from-orange-200 via-orange-100 to-white"
            >
              <div className="w-full h-full grid grid-cols-3 gap-2 p-3 opacity-80">
                <div className="rounded-lg bg-white/70" />
                <div className="rounded-lg bg-white/70" />
                <div className="rounded-lg bg-white/70" />
                <div className="rounded-lg bg-white/70" />
                <div className="rounded-lg bg-white/70" />
                <div className="rounded-lg bg-white/70" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ===== src/components/FAQ.jsx =====
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./common/Layout";
import { fadeIn } from "../utils/animations";

const faqs = [
  {
    q: "Do you deliver and pick up?",
    a: "Yes, we deliver and pick up at your event location. Timing windows are coordinated in advance.",
  },
  {
    q: "Do you set up tables and chairs?",
    a: "Setup/teardown is available upon request for an additional fee.",
  },
  {
    q: "Is there a minimum order?",
    a: "Minimums may vary by distance and item type. Send your details and we'll advise right away.",
  },
  {
    q: "How do I secure my booking?",
    a: "A deposit confirms your reservation. The remaining balance is due prior to delivery.",
  },
];

function FAQItem({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-slate-900">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }}>
          <PlusIcon />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={`faq-${i}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" className="bg-slate-50">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">FAQ</h2>
        <div className="rounded-2xl bg-white ring-1 ring-black/5 p-2 md:p-4">
          {faqs.map((f, i) => (
            <FAQItem key={i} i={i} q={f.q} a={f.a} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

// ===== src/components/Quote.jsx =====
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Section } from "./common/Layout";
import { fadeIn } from "../utils/animations";

export default function Quote() {
  return (
    <Section id="quote" className="bg-white">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Request a Quote</h2>
          <p className="mt-2 text-slate-600">Tell us about your event and we'll reply with pricing and availability.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            alert(
              `Thanks! We'll get back to you soon.\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nEvent Date: ${data.date}\nLocation: ${data.location}\nItems: ${data.items}`
            );
          }}
          className="grid md:grid-cols-2 gap-4 bg-slate-50 rounded-2xl p-4 md:p-6 ring-1 ring-black/5"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-700">Full Name</label>
            <input name="name" required className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-700">Email</label>
            <input type="email" name="email" required className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-700">Phone / WhatsApp</label>
            <input name="phone" className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-700">Event Date</label>
            <input type="date" name="date" className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <label className="text-sm text-slate-700">Event Location</label>
            <input name="location" className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <label className="text-sm text-slate-700">Items & Quantities</label>
            <textarea name="items" rows={5} placeholder="e.g., 100 Chiavari chairs, 10 round tables, white linens" className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-500">By submitting, you agree to be contacted about your request.</div>
            <motion.button whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800">
              Send Request <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </form>

        <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2 p-3 rounded-xl ring-1 ring-slate-200">
            <Phone className="w-4 h-4 text-orange-600" /> <span>Phone/WhatsApp: (xxx) xxx-xxxx</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl ring-1 ring-slate-200">
            <Mail className="w-4 h-4 text-orange-600" /> <span>Email: hello@htxcityrentals.com</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl ring-1 ring-slate-200">
            <MapPin className="w-4 h-4 text-orange-600" /> <span>Houston & surrounding areas</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

// ===== src/components/Footer.jsx =====
import React, { useMemo } from "react";
import { Anchor } from "../utils/navigation";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="mt-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-slate-600">© {year} Htxcityrentals — Tables, Chairs & Linen Rentals</p>
        <div className="flex items-center gap-6">
          <a href="#faq" onClick={Anchor({ to: "#faq" })} className="hover:underline">FAQ</a>
          <a href="#quote" onClick={Anchor({ to: "#quote" })} className="hover:underline">Get a Quote</a>
        </div>
      </div>
    </footer>
  );
}

// ===== tailwind.config.js =====
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// ===== postcss.config.js =====
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// ===== vite.config.js =====
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// ===== index.html =====
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Htxcityrentals - Tables, Chairs & Linen Rentals</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>