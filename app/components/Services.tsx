'use client';
import Image from "next/image";
import Card from "./Card";
import { motion } from 'framer-motion';

const Services = () => {
    return(
        <div id="services" className="w-full flex items-center">
            <div className="w-full max-w-[1400px] p-20 relative">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-teal-800 font-sans font-bold text-4xl md:text-5xl lg:text-6xl"
                >
                    How I help
                </motion.h1>
                <div className="w-full max-w-[1000px] mt-14 md:flex md:gap-2.5 z-10 relative">
                    <div>
                        <Card
                            heading="Anxiety & Stress Management"
                            subheading="Learn practical ways to calm your mind and regain control of daily stress."
                            imageSrc="/image1card.webp"
                        />
                    </div>
                    <div className="mt-5 md:mt-0">
                        <Card
                            heading="Relationship Counseling"
                            subheading="Strengthen communication and rebuild trust in your personal connections."
                            imageSrc="/image2card.webp"
                        />
                    </div>
                    <div className="mt-5 md:mt-0">
                        <Card
                            heading="Trauma Recovery"
                            subheading="Heal from past experiences in a safe, supportive therapeutic space."
                            imageSrc="/Image3Card.jpg"
                        />
                    </div>
                </div>

                <Image
                    src="/TreeTherapist.webp"
                    alt="Tree"
                    width={250}
                    height={250}
                    className="absolute bottom-0 right-0 z-0 opacity-90 pointer-events-none 
                    hidden md:block md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
                />
            </div>
        </div>
    );
}

export default Services;
