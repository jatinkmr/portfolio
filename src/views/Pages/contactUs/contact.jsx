import React from 'react';
import { motion } from 'framer-motion';
import { PopupButton } from "react-calendly";
import ContactForm from './contactForm';
import './contact.css';
import { pageTransition, staggerContainer, staggerItem } from '../../utils/animation';

const ContactTab = () => {
    const socialLinks = [
        { href: "https://github.com/jatinkmr", icon: "fab fa-github", title: 'GitHub' },
        { href: "https://www.linkedin.com/in/jatinkumarkamboj/", icon: "fab fa-linkedin", title: 'LinkedIn' },
        { href: "mailto:kumar.jatin873@gmail.com", icon: "fa-brands fa-google", title: 'Google(gMail)' },
        { href: "https://x.com/jatinkrkamboj", icon: "fa-brands fa-x-twitter", title: 'Twitter' },
        { href: "https://www.instagram.com/ijatinkrkamb0j/", icon: "fab fa-instagram", title: 'Instagram' },
        { href: "https://www.facebook.com/jatin.kamboj.37", icon: "fab fa-facebook", title: 'Facebook' }
    ];

    const infoCards = [
        {
            icon: "fa-brands fa-google",
            title: "Email",
            detail: "kumar.jatin873@gmail.com"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Location",
            detail: "New Delhi, India"
        }
    ];

    return (
        <motion.div
            className='contact-container fade-in'
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                className='contact-header'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className='greeting-text'
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200
                    }}
                >
                    Hi There...!!
                    <motion.span
                        className='wave'
                        role='img'
                        aria-label='waving-hand'
                        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                        👋
                    </motion.span>
                </motion.h1>
                <motion.div
                    className='contact-description'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <p>
                        I'm available for freelance projects and open to new opportunities. Whether you have a project in mind,
                        want to discuss potential collaboration, or just want to say hello, my inbox is always open.
                    </p>
                </motion.div>
            </motion.div>

            <div className='contact-content'>
                <motion.div
                    className='contact-info'
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className='info-card'
                            variants={staggerItem}
                            whileHover={{
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                        >
                            <motion.div
                                className='info-icon'
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <i className={card.icon}></i>
                            </motion.div>
                            <div className='info-details'>
                                <h3>{card.title}</h3>
                                <p>{card.detail}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Schedule Meeting Card */}
                    <motion.div
                        className='info-card'
                        variants={staggerItem}
                        whileHover={{
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                    >
                        <motion.div
                            className='info-icon'
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <i className="fa-solid fa-calendar-days"></i>
                        </motion.div>
                        <div className='info-details'>
                            <h3>Schedule a Meeting</h3>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <PopupButton
                                    url="https://calendly.com/kumar-jatin873/15min"
                                    rootElement={document.getElementById("root")}
                                    text="Book a Meeting"
                                    className="calendly-popup-btn"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='social-links'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-toggle='tooltip'
                                title={link.title}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className={link.icon}></i>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className='contact-form-section'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Send Me a Message
                    </motion.h2>
                    <ContactForm />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactTab;
