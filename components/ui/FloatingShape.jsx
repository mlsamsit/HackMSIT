"use client";

import { motion } from "framer-motion";

export default function FloatingShape({ children, delay = 0, duration = 4, className = "" }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
