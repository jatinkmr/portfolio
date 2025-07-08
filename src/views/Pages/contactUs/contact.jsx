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
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className='info-details'>
                            <h3>Email</h3>
                            <p>kumar.jatin873@gmail.com</p>
                        </div>
                    </div>

                    <div className='info-card'>
                        <div className='info-icon'>
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className='info-details'>
                            <h3>Location</h3>
                            <p>New Delhi, India</p>
                        </div>
                    </div>

                    <div className='info-card calendly-card'>
                        <div className='info-icon'>
                            <i className="fa fa-calendar"></i>
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
                            <i className="fa fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jatinkumarkamboj/" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='LinkedIn'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="mailto:kumar.jatin873@gmail.com" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Google(gMail)'>
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a href="https://twitter.com/jatinkrkamboj" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Twitter'>
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/ijatinkrkamb0j/" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Instagram'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/jatin.kamboj.37" target="_blank" rel="noopener noreferrer" data-toggle='tooltip' title='Facebook'>
                            <i className="fa fa-facebook"></i>
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
