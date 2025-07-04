'use client'
import React, { useState } from "react";
import PhoneIcon from "../icons/phone";
import { motion } from 'framer-motion';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    time: string;
    agreeToContact: boolean;
};

type FormErrors = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    time?: string;
    agreeToContact?: string;
};

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
        time: '',
        agreeToContact : false,
    });
    const [errors, setErrors] = useState<FormErrors>({});
    
    const validate = () => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }
        if (!/^\+?[0-9]{10,15}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Phone number is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        if (!formData.time.trim()) {
            newErrors.time = 'Preferred time is required';
        }

        if (!formData.agreeToContact) {
            newErrors.agreeToContact = 'You must agree to be contacted';
        }

        return newErrors;
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Form submitted', formData);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
        }
    };
    return (
        <div id="contact" className="bg-teal-100 w-full flex items-center">
            <div className="w-full max-w-[1400px] p-20 flex flex-col gap-10 md:flex-row md:justify-between">
                {/* Left Info Div */}
                <div>
                    <motion.div 
                        whileHover={{scale : 1.02}}
                        transition={{duration : 0.2}}
                        className="p-2"
                    >
                        <h1 className="text-3xl font-semibold text-teal-900">
                            Our Office
                        </h1>
                        <p className="text-teal-900 mt-3">
                            1287 Maplewood Drive,<br/>
                            Los Angeles,<br/>
                            CA 90026
                        </p>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale : 1.02}}
                        transition={{duration : 0.2}}
                        className="mt-10 p-2"
                    >
                        <h1 className="text-3xl font-semibold text-teal-900">
                            Hours
                        </h1>
                        <p className="text-teal-900 mt-3">
                            In-person: Tue & Thu, 10 AM–6 PM<br/>
                            Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
                        </p>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale : 1.02}}
                        transition={{duration : 0.2}}
                        className="mt-10 p-2"
                    >
                        <h1 className="text-3xl font-semibold text-teal-900">
                            Contact
                        </h1>
                        <p className="text-teal-900 flex gap-2 mt-3">
                           <PhoneIcon/> (323) 555-0192
                        </p>
                        <p className="text-teal-900 flex gap-2">
                           Email: serena@blakepsychology.com
                        </p>
                    </motion.div>
                </div>

                {/* Form Div */}
                <motion.div
                    whileHover={{scale : 1.02}}
                    transition={{duration : 0.3}}
                    className="bg-white rounded-lg shadow-lg p-5 w-full max-w-[360px] border-1 border-teal-900"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 
                        className="text-xl font-bold text-teal-900 text-center mb-2"
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h2>
                    
                    <motion.p 
                        className="text-xs text-teal-900 text-center mb-6 leading-relaxed"
                        variants={itemVariants}
                    >
                        Simply fill out the brief fields below and Ellie will be in touch
                        with you soon, usually within one business day. This form is
                        safe, private, and completely free.
                    </motion.p>

                    <div className="space-y-4">
                    <form onSubmit={handleSubmit}>   
                        <motion.div variants={itemVariants}>
                            <label className="block text-xs font-medium text-teal-900 mb-1">
                                Name
                            </label>
                            <motion.input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name : e.target.value})}
                                placeholder="Name"
                                className="w-full px-3 py-1 border placeholder:text-xs border-teal-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-200"
                                whileFocus={{ scale: 1.02 }}
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-600 italic">{errors.name}</p>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="block text-xs font-medium text-teal-900 mb-1 mt-2">
                            Email
                            </label>
                            <motion.input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email : e.target.value })}
                                placeholder="you@example.com"
                                className="w-full px-3 py-1 border placeholder:text-xs border-teal-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-200"
                                whileFocus={{ scale: 1.02 }}
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-600 italic">{errors.email}</p>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="block text-xs font-medium text-teal-900 mb-1 mt-2">
                            Phone
                            </label>
                            <motion.input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone : e.target.value })}
                                placeholder="(555) 555-5555"
                                className="w-full px-3 py-1 border placeholder:text-xs border-teal-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-200"
                                whileFocus={{ scale: 1.02 }}
                            />
                            {errors.phone && (
                                <p className="mt-1 text-xs text-red-600 italic ">{errors.phone}</p>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="block text-xs font-medium text-teal-900 mb-1 mt-2">
                                What brings you here ?
                            </label>
                            <motion.textarea
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message : e.target.value })}
                                placeholder="How can I help you?"
                                rows={1}
                                className="w-full px-3 py-1 border placeholder:text-xs border-teal-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-200 resize-none"
                                whileFocus={{ scale: 1.02 }}
                            />
                            {errors.message && (
                                <p className="mt-1 text-xs text-red-600 italic ">{errors.message}</p>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="block text-xs font-medium text-teal-900 mb-1 mt-2">
                                Preferred time to reach you
                            </label>
                            <motion.textarea
                                name="preferred time"
                                value={formData.time}
                                onChange={(e) => setFormData({...formData, time : e.target.value })}
                                placeholder="Your Preferred time"
                                rows={1}
                                className="w-full px-3 py-1 border placeholder:text-xs border-teal-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent transition-all duration-200 resize-none"
                                whileFocus={{ scale: 1.02 }}
                            />
                            {errors.time && (
                                <p className="mt-1 text-xs text-red-600 italic ">{errors.time}</p>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <motion.input
                                type="checkbox"
                                id="agreeToContact"
                                checked={formData.agreeToContact}
                                onChange={(e) => setFormData({ ...formData, agreeToContact: e.target.checked })}
                            />
                            <label htmlFor="agreeToContact" className="text-sm text-teal-900 text-semibold">
                                I agree to be contacted
                            </label>
                            {errors.agreeToContact && (
                                <p className="mt-1 text-xs text-red-600 italic">{errors.agreeToContact}</p>
                            )}
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full bg-teal-800 text-white py-1 px-4 text-sm rounded-md font-medium hover:bg-teal-950 transition-colors duration-200 cursor-pointer mt-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Submit
                        </motion.button>
                    </form> 

                    <motion.p 
                        className="text-xs text-gray-500 text-center mt-4"
                        variants={itemVariants}
                    >
                        ⓘ By submitting, you confirm you are 18+ and agree to our{' '}
                        <span className="text-teal-600 underline cursor-pointer">Privacy Policy</span> &{' '}
                        <span className="text-teal-600 underline cursor-pointer">TOS</span>{' '}
                        and to receive emails & texts from Selena Blake.
                    </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ContactForm;