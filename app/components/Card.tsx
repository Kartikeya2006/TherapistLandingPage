'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CardProps = {
  imageSrc: string;
  heading: string;
  subheading: string;
};

const Card: React.FC<CardProps> = ({ imageSrc, heading, subheading }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[320px] h-[420px] mx-auto bg-teal-100 border-1 border-teal-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[180px] overflow-hidden rounded-xl mb-4 flex-shrink-0"
      >
        <Image 
          src={imageSrc} 
          alt={heading}
          className="w-full h-full object-cover"
          width={300}
          height={200}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex-1 flex flex-col justify-between"
      >
        <div className="space-y-3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl font-bold text-teal-900 leading-tight h-[60px] flex items-start"
          >
            {heading}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-teal-700 text-sm leading-relaxed h-[40px] flex items-start"
          >
            {subheading}
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full text-sm bg-teal-100 hover:bg-white text-teal-900 font-medium py-2 px-6 rounded-lg transition-all duration-200 border border-teal-900 cursor-pointer mt-auto"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Card;