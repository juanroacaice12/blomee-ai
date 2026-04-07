"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F5F1EA]">

      {/* 🌼 watermark */}
      <img
        src="/LOGO BLOMEÉ.png"
        className="absolute opacity-5 w-[650px] blur-[3px] pointer-events-none"
      />

      {/* contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        {/* LOGO */}
        <motion.img
          src="/LOGO BLOMEÉ.png"
          className="w-[220px] mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* tagline */}
        <p className="text-gray-600 mb-10 text-lg tracking-wide max-w-md mx-auto">
          Inteligencia experta en cosmetología, formulación y cuidado de la piel
        </p>

        {/* botón */}
        <motion.button
          onClick={() => router.push("/chat")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#C9A15D] text-white px-12 py-3 rounded-full shadow-xl tracking-wide"
        >
          Entrar a BLOMEÉ AI
        </motion.button>
      </motion.div>
    </div>
  );
}