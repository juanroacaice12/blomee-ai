"use client";

import { motion } from "framer-motion";

export default function Petals() {
  const petals = Array.from({ length: 15 });

  return (
    <>
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -50,
            x: Math.random() * window.innerWidth,
            opacity: 0.7,
          }}
          animate={{
            y: "110vh",
            x: `+=${Math.random() * 100 - 50}`,
            rotate: 360,
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute w-3 h-3 bg-[#C9A15D] rounded-full blur-sm"
        />
      ))}
    </>
  );
}
