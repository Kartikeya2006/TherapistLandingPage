'use client'
import AnimatedStatsSection from "./components/AnimatedStats";
import Services from "./components/Services";
import Star from "./icons/star";
import { motion } from 'framer-motion';
import About from "./components/About";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
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
        ease: [0.42, 0, 0.58, 1] // cubic-bezier for easeInOut
      }
    }
  };
  return (
    <main className="bg-[#f6f9f9] mx-auto pt-[120px]">

      <Hero/>
      
      <AnimatedStatsSection/>

      <Services/>


      <div className="w-full bg-teal-800 flex items-center justify-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="min-h-[200px] w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10"
        >
          {/* Heading */}
          <motion.div 
            variants={itemVariants}
            className="flex-1"
          >
            <h1 className="text-teal-100 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Schedule A Consultation
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div 
            variants={itemVariants}
            className="flex-1"
          >
            <p className="text-teal-100 text-lg md:text-xl font-medium leading-relaxed">
              Senera Blake is currently accepting new clients. Available for online and in-person sessions.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div 
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#134e4a"
              }}
              whileTap={{ scale: 0.95 }}
              className="text-teal-100 font-semibold bg-teal-800 px-6 py-3 
              rounded-lg border-2 border-white cursor-pointer transition-all duration-300
              flex items-center gap-2 whitespace-nowrap hover:bg-white hover:text-teal-900"
            >
              <Star />
              Start Healing
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
     

      <About/>

      <FAQ/>

      <ContactForm/>

      <Footer/>
    </main>
  );
}  

