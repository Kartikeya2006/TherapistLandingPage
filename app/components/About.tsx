'use client'
import React from "react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <div id="about" className="bg-teal-100 w-full grid place-items-center ">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="w-full max-w-[1400px] p-6 md:p-10 flex flex-col lg:flex-row  gap-8 lg:gap-10"
      >
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-auto flex justify-center lg:justify-start lg:ml-[100px]"
        >
          <div className="bg-teal-50 p-3 rounded-lg max-w-[400px] w-full lg:max-h-[600px]">
            <Image 
              src="/SerenaBlake.webp" 
              alt="profile image"
              className="w-full h-full rounded-lg object-cover"
              width={400} 
              height={600}
            />
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="w-full lg:flex-1 lg:max-w-[600px] space-y-6"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-amber-100 p-1.5 rounded-lg"
          >
            <p className="text-teal-900 text-xs md:text-base">
              About Serena Blake, licensed clinical psychologist (PsyD), Los Angeles, CA.
            </p>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl lg:text-5xl lg:font-bold md:text-4xl font-semibold text-teal-900 leading-tight"
          >
            Hi I am Serena Blake
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <p className="text-teal-800 text-base md:text-lg leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles,
               CA, with eight years of experience and over 500 client sessions. She blends evidence-based
                approaches like cognitive-behavioral therapy and mindfulness with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal
                 from trauma. Whether you meet in her Maplewood Drive office or connect virtually 
                 via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;