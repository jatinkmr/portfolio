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
    const [fieldErrors, setFieldErrors] = useState({
        userName: '',
        email: '',
        message: ''
    });
    const [fieldTouched, setFieldTouched] = useState({
        userName: false,
        email: false,
        message: false
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

        // Real-time validation for touched fields
        if (fieldTouched[name]) {
            const error = validateField(name, value);
            setFieldErrors({
                ...fieldErrors,
                [name]: error
            });
        }
    };

    const handleFieldBlur = (e) => {
        const { name, value } = e.target;
        setFieldTouched({
            ...fieldTouched,
            [name]: true
        });

        const error = validateField(name, value);
        setFieldErrors({
            ...fieldErrors,
            [name]: error
        });
    };

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'userName':
                if (!value.trim()) {
                    error = 'Name is required';
                } else if (value.trim().length < 2) {
                    error = 'Name must be at least 2 characters';
                } else if (value.trim().length > 50) {
                    error = 'Name must be less than 50 characters';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!validateEmail(value)) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'message':
                if (!value.trim()) {
                    error = 'Message is required';
                } else if (value.trim().length < 10) {
                    error = 'Message must be at least 10 characters';
                } else if (value.trim().length > 1000) {
                    error = 'Message must be less than 1000 characters';
                }
                break;
            default:
                break;
        }

        return error;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, email, message } = formState;

        // Mark all fields as touched
        setFieldTouched({
            userName: true,
            email: true,
            message: true
        });

        // Validate all fields
        const errors = {
            userName: validateField('userName', userName),
            email: validateField('email', email),
            message: validateField('message', message)
        };

        setFieldErrors(errors);

        // Check if there are any errors
        const hasErrors = Object.values(errors).some(error => error !== '');
        if (hasErrors) {
            return setStatus({
                submitted: true,
                success: false,
                message: 'Please fix the errors above before submitting.'
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
                'service_atn9oju',
                'template_xn1qear',
                { userName, email, message },
                'mT2j9sQTEHiODyakr'
            );

            if (response.status === 200) {
                localStorage.setItem('isContactFormFilled', 'true');
                setFormState({ userName: '', email: '', message: '' });
                setFieldErrors({ userName: '', email: '', message: '' });
                setFieldTouched({ userName: false, email: false, message: false });
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
                        className={`form-control ${fieldErrors.userName ? 'error' : ''} ${fieldTouched.userName && !fieldErrors.userName ? 'success' : ''}`}
                        type="text"
                        name="userName"
                        value={formState.userName}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        placeholder="Enter your name"
                    />
                    {fieldErrors.userName && (
                        <div className="field-error">
                            <i className="fa fa-exclamation-circle"></i>
                            {fieldErrors.userName}
                        </div>
                    )}
                    {fieldTouched.userName && !fieldErrors.userName && formState.userName && (
                        <div className="field-success">
                            <i className="fa fa-check-circle"></i>
                            Looks good!
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className={`form-control ${fieldErrors.email ? 'error' : ''} ${fieldTouched.email && !fieldErrors.email ? 'success' : ''}`}
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        placeholder="Enter your email"
                    />
                    {fieldErrors.email && (
                        <div className="field-error">
                            <i className="fa fa-exclamation-circle"></i>
                            {fieldErrors.email}
                        </div>
                    )}
                    {fieldTouched.email && !fieldErrors.email && formState.email && (
                        <div className="field-success">
                            <i className="fa fa-check-circle"></i>
                            Valid email address!
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        className={`form-control ${fieldErrors.message ? 'error' : ''} ${fieldTouched.message && !fieldErrors.message ? 'success' : ''}`}
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        placeholder="Enter your message"
                        rows="4"
                    />
                    <div className="character-count">
                        {formState.message.length}/1000 characters
                    </div>
                    {fieldErrors.message && (
                        <div className="field-error">
                            <i className="fa fa-exclamation-circle"></i>
                            {fieldErrors.message}
                        </div>
                    )}
                    {fieldTouched.message && !fieldErrors.message && formState.message && (
                        <div className="field-success">
                            <i className="fa fa-check-circle"></i>
                            Message looks great!
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className={`submit-button ${status.sending ? 'loading' : ''}`}
                    disabled={status.sending}
                >
                    {status.sending ? (
                        <>
                            <div className="loading-spinner"></div>
                            Sending Message...
                        </>
                    ) : (
                        <>
                            <i className="fa fa-paper-plane"></i>
                            Send Message
                        </>
                    )}
                </button>
            </form>

            {status.submitted && (
                <div className={`status-message ${getStatusClass()}`}>
                    {status.success ? (
                        <div className="success-animation">
                            <div className="success-icon">
                                <i className="fa-solid fa-circle-check fa-bounce"></i>
                            </div>
                            <div className="success-text">
                                {status.message}
                            </div>
                        </div>
                    ) : (
                        <>
                            <i className="fa fa-exclamation-triangle"></i>
                            {status.message}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ContactForm;
