import React from "react";
import { motion } from "framer-motion";

export default function WhoAreWe() {
  return (
    <section className="bg-white dark:bg-slate-900 py-24 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-6"
      >
        Who Are We
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto mb-16"
      >
        Htxcityrentals is your trusted partner in making every event unforgettable.
        From weddings to corporate gatherings, we provide premium tables, chairs,
        linens, decor, and complete setups with a focus on quality and reliability.
      </motion.p>

      {/* Mission & Vision Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            To provide high-quality, reliable, and stylish event rentals that help
            our clients create memorable experiences without the stress of setup
            and logistics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4">
            Our Vision
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            To be the leading event rental service in Nigeria, recognized for
            exceptional quality, creative solutions, and a dedication to making
            every event truly unforgettable.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Alice Johnson", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Michael Smith", role: "Operations Manager", img: "https://randomuser.me/api/portraits/men/46.jpg" },
            { name: "Sarah Lee", role: "Event Coordinator", img: "https://randomuser.me/api/portraits/women/48.jpg" },
            { name: "James Brown", role: "Customer Support", img: "https://randomuser.me/api/portraits/men/50.jpg" },
          ].map((member) => (
            <div key={member.name} className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
