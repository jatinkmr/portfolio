import React from 'react';
import { motion } from 'framer-motion';
import './aboutTab.css';
import { pageTransition } from '../../utils/animation';

const AboutTab = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.div
            className="about-container fade-in"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                className="about-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="header-section">
                    <motion.h2
                        className="about-question"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Discovering
                        <motion.span
                            className="name-highlight"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.3,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            Jatin Kumar
                        </motion.span>
                        <motion.i
                            className="fas fa-lightbulb pulse-icon"
                            aria-hidden="true"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [1, 0.8, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.h2>

                    <motion.div
                        className="greeting-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className="wave-greeting">
                            Hello World!
                            <motion.span
                                className="wave"
                                role="img"
                                aria-label="waving-hand"
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
                        </h1>
                    </motion.div>
                </div>

                <motion.div
                    className="about-content"
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        "I'm a tech enthusiast based in the vibrant city of Delhi, India. Passionate about creating seamless digital experiences as a Full Stack Developer.",
                        "Known for my meticulous attention to detail, problem-solving mindset, and ability to work independently. Beyond coding, I find joy in exploring the outdoors, creating pencil sketches, watching horror films, and diving into immersive video games.",
                        "Currently exploring exciting new opportunities in the tech world.",
                        "I'm constantly experimenting with emerging web technologies and implementing innovative solutions that push boundaries."
                    ].map((text, index) => (
                        <motion.p
                            key={index}
                            custom={index}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className={index === 2 ? "interest-text" : ""}
                            whileHover={{
                                x: 10,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            {index === 0 && (
                                <>
                                    I'm a tech enthusiast based in the vibrant city of Delhi, India.
                                    Passionate about creating seamless digital experiences as a{' '}
                                    <motion.span
                                        className="highlight"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        Full Stack Developer
                                    </motion.span>.
                                </>
                            )}
                            {index === 1 && text}
                            {index === 2 && text}
                            {index === 3 && text}
                        </motion.p>
                    ))}

                    <motion.div
                        className="cta-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <p>
                            Interested in collaborating on something extraordinary?
                        </p>
                    </motion.div>

                    <motion.div
                        className="connect-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        <p>
                            Let's connect!{' '}
                            <motion.a
                                href="mailto:kumar.jatin873@gmail.com"
                                className="email-link"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Reach out via email
                                <motion.i
                                    className="fa fa-paper-plane hover-icon"
                                    aria-hidden="true"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.a>
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutTab;
