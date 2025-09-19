import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { sendContactMessage } from "../utils/emailService"; // ✅ Use service file

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactMessage({
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      });
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="contactus"
      className="lg:py-20 py-10 flex items-center justify-center bg-black p-4 tracking-tighter"
    >
      <motion.div
        className="bg-white xl:rounded-2xl shadow-xl max-w-3xl w-full p-6 sm:p-10 flex flex-col sm:flex-row gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Contact Info */}
        <motion.div
          className="flex-1 flex flex-col justify-between gap-6"
          variants={itemVariants}
        >
          <div className="md:space-y-10 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
              Contact Us
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Have questions or want to get in touch? Fill out the form or reach
              us via the info below.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} />
                <span>+1 317 459 3144</span>
              </div>
              <a
                href="mailto:Htxcityrentals@gmail.com"
                className="flex items-center gap-3 text-orange-700"
              >
                <Mail size={20} />
                <span>Htxcityrentals@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="">
          <img
            src="/images/img1 (6).jpg"
            alt=""
            className="sm:h-90 h-50 w-80 rounded-xl object-cover"
          />
        </div>
        {/* Contact Form */}
        {/* <motion.div className="flex-1" variants={itemVariants}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base"
              required
              variants={itemVariants}
            />
            <motion.input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base"
              required
              variants={itemVariants}
            />
            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base resize-none"
              required
              variants={itemVariants}
            />
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-2 mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-colors text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div> */}
      </motion.div>
    </div>
  );
}
