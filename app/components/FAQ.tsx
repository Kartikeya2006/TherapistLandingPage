import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What are your fees?",
      answer: "My fees are $200 for individual session and $240 for couple session."
    },
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required."
    },
    {
      question: "What are your office hours?",
      answer: "My office hours are for in-person Tue & Thu, 10 AM to 6 PM, and for Virtual via Zoom is Mon, Wed & Fri, 1 PM to 5 PM."
    },
    {
      question: "What geographic areas do you serve?",
      answer: "I serve the Los Angeles, CA. Online sessions are available for clients throughout anywhere."
    },
    {
      question: "What services do you offer?",
      answer: "I provide individual therapy, couples counseling, Anxiety & Stress Management, Relationship Counseling Trauma Recovery."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div id="faqs" className="bg-teal-100 w-full flex justify-center py-16 p-15">
      <div className="w-full max-w-[1400px] px-6 md:px-10">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-teal-900 mb-8 md:mb-12"
        >
          Frequently Asked Questions
        </motion.h1>

        {/* FAQ Items */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-0"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-teal-600"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 md:py-8 flex justify-between items-center text-left transition-colors duration-200 px-0 cursor-pointer"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-teal-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-teal-900" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-teal-900" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 md:pb-8">
                      <p className="text-base md:text-lg text-teal-800 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;