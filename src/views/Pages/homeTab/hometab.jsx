import React from 'react';
import { motion } from 'framer-motion';
import './hometab.css';
import { pageTransition, staggerContainer, staggerItem } from '../../utils/animation';

const HomeTab = () => {
  return (
    <motion.div 
      className="home-container fade-in"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div 
        className="intro-section"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="greeting-name-section"
          variants={staggerItem}
        >
          <motion.div 
            className="greeting"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="highlight">Hello, I'm</span>
            <motion.span 
              className="wave" 
              role="img" 
              aria-label="wave"
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
          </motion.div>

          <motion.h1 
            className="name"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
          >
            <span className="name-highlight">Jatin Kumar</span>
          </motion.h1>
        </motion.div>

        <motion.h2 
          className="title"
          variants={staggerItem}
        >
          Full-Stack <motion.span 
            className="js-highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            JavaScript
          </motion.span> Developer
        </motion.h2>

        <motion.div 
          className="description"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={staggerItem}>
            I craft <span className="highlight-text">scalable web applications</span> with{' '}
            <motion.span 
              className="exp-highlight"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              4+ years
            </motion.span>{' '}
            of hands-on experience across the entire development stack.
          </motion.p>

          <motion.p className="intro-detail" variants={staggerItem}>
            Previously at <span className="company">FirstCry.com</span>, I build CRM dashboards and integrate frontend interfaces with REST APIs.
            My expertise spans <span className="tech">Node.js</span>, <span className="tech">Express</span>, <span className="tech">React</span>,
            and <span className="tech">Vue.js</span>, with cloud deployments on <span className="tech">AWS</span>.
          </motion.p>

          <motion.p className="intro-detail" variants={staggerItem}>
            When I'm not coding, you'll find me exploring new technologies,
            <span className="passion"> crafting delicious meals</span>,
            or perfecting my <span className="coffee-art">coffee brewing art </span>
            <motion.span 
              className="coffee-icon" 
              role="img" 
              aria-label="coffee"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity
              }}
            >
              ☕
            </motion.span>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href={`${process.env.PUBLIC_URL}/resume/jatin-kumar-kamboj-cv.pdf`}
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            <span className="btn-text">View My Resume</span>
            <motion.span 
              className="icon" 
              role="img" 
              aria-label="scroll"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📜
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomeTab;
