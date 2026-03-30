"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === "button" || e.target.closest("button") || e.target.tagName.toLowerCase() === "a" || e.target.closest("a")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 rounded-full border-2 border-primary"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? "rgba(var(--color-primary), 0.2)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.8 }}
      />
    </>
  );
}
