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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Request a Quote
          </h2>
          <p className="mt-2 text-slate-600">
            Tell us about your event and we'll reply with pricing and availability.
          </p>
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
            <input
              name="name"
              required
              className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-700">Phone / WhatsApp</label>
            <input
              name="phone"
              className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-700">Event Date</label>
            <input
              type="date"
              name="date"
              className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <label className="text-sm text-slate-700">Event Location</label>
            <input
              name="location"
              className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <label className="text-sm text-slate-700">Items & Quantities</label>
            <textarea
              name="items"
              rows={5}
              placeholder="e.g., 100 Chiavari chairs, 10 round tables, white linens"
              className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              By submitting, you agree to be contacted about your request.
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800"
            >
              Send Request <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </form>

        <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2 p-3 rounded-xl ring-1 ring-slate-200">
            <Phone className="w-4 h-4 text-orange-600" />{" "}
            <span>Phone/WhatsApp: (xxx) xxx-xxxx</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl ring-1 ring-slate-200">
            <Mail className="w-4 h-4 text-orange-600" />{" "}
            <span>Email: hello@htxcityrentals.com</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl ring-1 ring-slate-200">
            <MapPin className="w-4 h-4 text-orange-600" />{" "}
            <span>Houston & surrounding areas</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
