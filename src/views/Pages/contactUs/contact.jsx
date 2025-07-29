import React from 'react';
import { PopupButton } from "react-calendly";
import ContactForm from './contactForm';
import './contact.css';

const ContactTab = () => {
    return (
        <div className='contact-container fade-in'>
            <div className='contact-header'>
                <h1 className='greeting-text'>
                    Hi There...!!
                    <span className='wave' role='img' aria-label='waving-hand'>
                        👋
                    </span>
                </h1>
                <div className='contact-description'>
                    <p>
                        I'm available for freelance projects and open to new opportunities. Whether you have a project in mind,
                        want to discuss potential collaboration, or just want to say hello, my inbox is always open.
                    </p>
                </div>
            </div>

            <div className='contact-content'>
                <div className='contact-info'>
                    <div className='info-card'>
                        <div className='info-icon'>
                            <i className="fa-brands fa-google"></i>
                        </div>
                        <div className='info-details'>
                            <h3>Email</h3>
                            <p>kumar.jatin873@gmail.com</p>
                        </div>
                    </div>

                    <div className='info-card'>
                        <div className='info-icon'>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className='info-details'>
                            <h3>Location</h3>
                            <p>New Delhi, India</p>
                        </div>
                    </div>

                    <div className='info-card'>
                        <div className='info-icon'>
                            <i className="fa-solid fa-calendar-days"></i>
                        </div>
                        <div className='info-details'>
                            <h3>Schedule a Meeting</h3>
                            <PopupButton
                                url="https://calendly.com/kumar-jatin873/15min"
                                rootElement={document.getElementById("root")}
                                text="Book a Meeting"
                                className="calendly-popup-btn"
                            />
                        </div>
                    </div>

                    <div className='social-links'>
                        <a href="https://github.com/jatinkmr" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='GitHub'>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jatinkumarkamboj/" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='LinkedIn'>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:kumar.jatin873@gmail.com" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Google(gMail)'>
                            <i className="fa-brands fa-google"></i>
                        </a>
                        <a href="https://x.com/jatinkrkamboj" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Twitter'>
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/ijatinkrkamb0j/" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/jatin.kamboj.37" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Facebook'>
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>

                <div className='contact-form-section'>
                    <h2>Send Me a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactTab;
