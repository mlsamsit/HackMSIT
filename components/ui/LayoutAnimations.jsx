"use client";

import InteractiveCursor from "./InteractiveCursor";
import { motion } from "framer-motion";

export default function LayoutAnimations({ children }) {
  return (
    <>
      <div className="hidden md:block">
        <InteractiveCursor />
      </div>
      {/* Animated Background Global Overlay for that Hack UI look */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-background opacity-95" />
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, var(--color-on-background) 0, var(--color-on-background) 1px, transparent 1px, transparent 20px)'
          }}
        />
      </div>
      
      {/* Page Reveal Transition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
