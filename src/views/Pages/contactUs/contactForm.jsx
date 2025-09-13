import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './contact.css';
import { containerVariants, formGroupVariants, fieldErrorVariants, fieldSuccessVariants, buttonVariants, statusMessageVariants, spinnerVariants } from '../../utils/animation';

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
        <motion.div 
            className="contact-form-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.form 
                ref={form} 
                onSubmit={handleSubmit} 
                className="contact-form"
                variants={containerVariants}
            >
                <motion.div 
                    className="form-group"
                    variants={formGroupVariants}
                >
                    <motion.label 
                        htmlFor="userName"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        Name
                    </motion.label>
                    <motion.input
                        id="userName"
                        className={`form-control ${fieldErrors.userName ? 'error' : ''} ${fieldTouched.userName && !fieldErrors.userName ? 'success' : ''}`}
                        type="text"
                        name="userName"
                        value={formState.userName}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        placeholder="Enter your name"
                        whileFocus={{ scale: 1.02, borderColor: "#007bff" }}
                        transition={{ duration: 0.2 }}
                    />
                    <AnimatePresence>
                        {fieldErrors.userName && (
                            <motion.div 
                                className="field-error"
                                variants={fieldErrorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.i 
                                    className="fa fa-exclamation-circle"
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {fieldErrors.userName}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {fieldTouched.userName && !fieldErrors.userName && formState.userName && (
                            <motion.div 
                                className="field-success"
                                variants={fieldSuccessVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.i 
                                    className="fa fa-check-circle"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                />
                                Looks good!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div 
                    className="form-group"
                    variants={formGroupVariants}
                >
                    <motion.label 
                        htmlFor="email"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Email
                    </motion.label>
                    <motion.input
                        id="email"
                        className={`form-control ${fieldErrors.email ? 'error' : ''} ${fieldTouched.email && !fieldErrors.email ? 'success' : ''}`}
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        placeholder="Enter your email"
                        whileFocus={{ scale: 1.02, borderColor: "#007bff" }}
                        transition={{ duration: 0.2 }}
                    />
                    <AnimatePresence>
                        {fieldErrors.email && (
                            <motion.div 
                                className="field-error"
                                variants={fieldErrorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.i 
                                    className="fa fa-exclamation-circle"
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {fieldErrors.email}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {fieldTouched.email && !fieldErrors.email && formState.email && (
                            <motion.div 
                                className="field-success"
                                variants={fieldSuccessVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.i 
                                    className="fa fa-check-circle"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                />
                                Valid email address!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div 
                    className="form-group"
                    variants={formGroupVariants}
                >
                    <motion.label 
                        htmlFor="message"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Message
                    </motion.label>
                    <motion.textarea
                        id="message"
                        className={`form-control ${fieldErrors.message ? 'error' : ''} ${fieldTouched.message && !fieldErrors.message ? 'success' : ''}`}
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        placeholder="Enter your message"
                        rows="4"
                        whileFocus={{ scale: 1.02, borderColor: "#007bff" }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.div 
                        className="character-count"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {formState.message.length}/1000 characters
                    </motion.div>
                    <AnimatePresence>
                        {fieldErrors.message && (
                            <motion.div 
                                className="field-error"
                                variants={fieldErrorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.i 
                                    className="fa fa-exclamation-circle"
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {fieldErrors.message}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {fieldTouched.message && !fieldErrors.message && formState.message && (
                            <motion.div 
                                className="field-success"
                                variants={fieldSuccessVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.i 
                                    className="fa fa-check-circle"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                />
                                Message looks great!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.button
                    type="submit"
                    className={`submit-button ${status.sending ? 'loading' : ''}`}
                    disabled={status.sending}
                    variants={buttonVariants}
                    initial="idle"
                    whileHover={status.sending ? "loading" : "hover"}
                    whileTap={status.sending ? "loading" : "tap"}
                    animate={status.sending ? "loading" : "idle"}
                >
                    {status.sending ? (
                        <>
                            <motion.div 
                                className="loading-spinner"
                                variants={spinnerVariants}
                                animate="animate"
                            />
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Sending Message...
                            </motion.span>
                        </>
                    ) : (
                        <>
                            <motion.i 
                                className="fa fa-paper-plane"
                                whileHover={{ x: 2, y: -2 }}
                                transition={{ duration: 0.2 }}
                            />
                            Send Message
                        </>
                    )}
                </motion.button>
            </motion.form>

            <AnimatePresence>
                {status.submitted && (
                    <motion.div 
                        className={`status-message ${getStatusClass()}`}
                        variants={statusMessageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {status.success ? (
                            <motion.div 
                                className="success-animation"
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 150
                                }}
                            >
                                <motion.div 
                                    className="success-icon"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ 
                                        delay: 0.3,
                                        duration: 0.6,
                                        ease: "backOut"
                                    }}
                                >
                                    <i className="fa-solid fa-circle-check fa-bounce"></i>
                                </motion.div>
                                <motion.div 
                                    className="success-text"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {status.message}
                                </motion.div>
                            </motion.div>
                        ) : (
                            <>
                                <motion.i 
                                    className="fa fa-exclamation-triangle"
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {status.message}
                                </motion.span>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ContactForm;
