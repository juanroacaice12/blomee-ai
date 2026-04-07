"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Petals() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const petals = Array.from({ length: 20 });

  return (
    <>
      {width > 0 &&
        petals.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: Math.random() * width,
              opacity: 0.6,
            }}
            animate={{
              y: "110vh",
              x: `+=${Math.random() * 200 - 100}`,
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-4 h-2 bg-[#C9A15D] rounded-full blur-[1px]"
          />
        ))}
    </>
  );
}