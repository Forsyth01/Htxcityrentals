import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router";

// Optional: install canvas-confetti for confetti animation
// npm install canvas-confetti
import confetti from "canvas-confetti";

export default function SuccessAnimation({ message = "Quote Sent Successfully!", duration = 3000 }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Launch confetti when component mounts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Redirect after `duration` milliseconds
    const timer = setTimeout(() => {
      navigate("/"); // go to home page
    }, duration);

    return () => clearTimeout(timer);
  }, [navigate, duration]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-28 h-28 border-4 border-orange-500 border-t-transparent rounded-full flex items-center justify-center"
        >
          <Check className="w-14 h-14 text-orange-500" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white text-xl font-bold mt-4 text-center"
        >
          {message}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
