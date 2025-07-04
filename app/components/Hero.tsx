'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        alt="any image" 
        src="/ImageTherapy.jpg"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" />
      
      <div className="absolute inset-0 z-20 pt-[50px] flex flex-col items-center text-center space-y-6 px-4">
        <motion.p 
          className="text-white/90 font-semibold mt-20 text-lg tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Compassionate Therapy in Los Angeles & Online.
        </motion.p>

        <motion.h1 
          className="text-white text-4xl md:text-5xl font-bold max-w-4xl leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Personalized psychological care for anxiety, relationships, and emotional healing.
        </motion.h1>

        <motion.p 
          className="text-white/95 text-xl md:text-2xl font-medium max-w-3xl leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Start your journey toward clarity, connection, and lasting inner peace today.
        </motion.p>

        <motion.button 
          className="bg-teal-100 hover:bg-teal-200 cursor-pointer text-blue-800 font-bold text-xl px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mt-8 border-2 border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Free Consult
        </motion.button>
      </div>
    </div>
  );
}