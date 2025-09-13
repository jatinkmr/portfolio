import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './backgroundTab.css'
import HomeTab from '../homeTab/hometab.jsx'
import ProfileTab from '../profileTab/profiletab.jsx'
import ContactTab from '../contactUs/contact.jsx'
import AboutTab from '../aboutTab/aboutTab.jsx'
import { fadeIn, slideInFromLeft, scaleIn } from '../../utils/animation.js'

const Backgroundtab = () => {
  const [status, setStatus] = useState('home');

  const changeHandler = (event) => {
    setStatus(event.target.name);
  };

  return (
    <motion.div
      className='container'
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className='col-md-12'>
        <div className='row fakeDiv'></div>
        <div className='row dataHolder'>
          {/* Social Media Holder with Animation */}
          <motion.div
            className='socialMediaHolder'
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
          >
            <div className='topBackGround'></div>
            <motion.div
              className='profileImage'
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src='images/mine.jpg'
                alt='mine'
                height='10%'
                width='60%'
                data-toggle='tooltip'
                title='Jatin Kumar "Kamboj"'
              />
            </motion.div>

            <motion.div
              className='row socializeRow'
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.p
                className='a mx-auto text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6
                }}
                whileHover={{
                  textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span
                  initial={{ display: "inline-block", opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    ease: "backOut"
                  }}
                >
                  Software Engineer
                </motion.span>
              </motion.p>
            </motion.div>

            <motion.div
              className='row socializationLinks justify-content-center'
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6
                  }
                }
              }}
            >
              <ul id='socialList'>
                {[
                  { href: 'https://www.github.com/jatinkmr', icon: 'fab fa-github', title: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/jatinkumarkamboj/', icon: 'fab fa-linkedin', title: 'LinkedIn' },
                  { href: 'mailto:kumar.jatin873@gmail.com', icon: 'fa-brands fa-google', title: 'Google(gMail)' },
                  { href: 'https://x.com/jatinkrkamboj', icon: 'fa-brands fa-x-twitter', title: 'Twitter' },
                  { href: 'https://www.instagram.com/ijatinkrkamb0j/', icon: 'fab fa-instagram', title: 'InstaGram' },
                  { href: 'https://www.facebook.com/jatin.kamboj.37', icon: 'fab fa-facebook-square', title: 'FaceBook' }
                ].map((social, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 }
                      }
                    }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      data-toggle='tooltip'
                      title={social.title}
                    >
                      <i className={social.icon}></i>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className='contentHolder'>
            <motion.div
              className='contentHeading bg-dark'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ul id='headingList' className='nav justify-content-center'>
                {['home', 'profile', 'about', 'contact'].map((tab) => (
                  <motion.li
                    key={tab}
                    className='nav-item'
                    onClick={changeHandler}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      type='button'
                      className={`btn btn-link px-1 ${status === tab ? "active" : ""}`}
                      name={tab}
                      data-toggle='tooltip'
                      title={tab.charAt(0).toUpperCase() + tab.slice(1)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className='contentData'>
              <AnimatePresence mode='wait'>
                {status === 'home' && <HomeTab key="home" />}
                {status === 'profile' && <ProfileTab key="profile" />}
                {status === 'about' && <AboutTab key="about" />}
                {status === 'contact' && <ContactTab key="contact" />}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          className='row footerContent'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className='text-right'>Copyright © 2020 Jatin Kumar "Kamboj"</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Backgroundtab
