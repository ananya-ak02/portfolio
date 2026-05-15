"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive") ||
        target.hasAttribute("role") && target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-accent-cyan rounded-full pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - (isHovering ? 12 : 4),
        y: mousePosition.y - (isHovering ? 12 : 4),
        width: isHovering ? 24 : 8,
        height: isHovering ? 24 : 8,
        opacity: isHovering ? 0.6 : 1,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
}
