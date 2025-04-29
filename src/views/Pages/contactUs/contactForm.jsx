import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const ContactForm = () => {
    const form = useRef();
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState({
        submitted: false,
        success: false,
        message: '',
        sending: false
    });

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init("mT2j9sQTEHiODyakr");

        // Check if form was previously submitted
        const formSubmitted = localStorage.getItem('isContactFormFilled') === 'true';
        if (formSubmitted) {
            setStatus({
                submitted: true,
                success: true,
                message: 'Thank you for reaching out! I will get back to you soon.'
            });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, email, message } = formState;

        // Basic validation
        if (!userName || !email || !message) {
            return setStatus({
                submitted: true,
                success: false,
                message: 'Please fill in all fields.'
            });
        }

        // Email validation
        if (!validateEmail(email)) {
            return setStatus({
                submitted: true,
                success: false,
                message: 'Please enter a valid email address.'
            });
        }

        try {
            // Set sending status
            setStatus({
                ...status,
                sending: true,
                message: 'Sending message...'
            });

            const response = await emailjs.send(
                'service_orc3b3h',
                'template_xn1qear',
                { userName, email, message },
                'mT2j9sQTEHiODyakr'
            );

            if (response.status === 200) {
                localStorage.setItem('isContactFormFilled', 'true');
                setFormState({ userName: '', email: '', message: '' });
                setStatus({
                    submitted: true,
                    success: true,
                    message: 'Message sent successfully! Thank you for reaching out.',
                    sending: false
                });
            }
        } catch (error) {
            localStorage.removeItem('isContactFormFilled');
            setStatus({
                submitted: true,
                success: false,
                message: 'Failed to send message. Please try again later.',
                sending: false
            });
        }
    };

    const getStatusClass = () => {
        if (!status.submitted) return '';
        return status.success ? 'status-success' : 'status-error';
    };

    return (
        <div className="contact-form-container">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input
                        id="userName"
                        className="form-control"
                        type="text"
                        name="userName"
                        value={formState.userName}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="form-control"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        className="form-control"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message"
                        rows="4"
                    />
                </div>

                <button
                    type="submit"
                    className="submit-button"
                    disabled={status.sending}
                >
                    {status.sending ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {status.submitted && (
                <div className={`status-message ${getStatusClass()}`}>
                    {status.message}
                </div>
            )}
        </div>
    );
};

export default ContactForm;
