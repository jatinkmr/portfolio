import React, { Component, createRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

// class ContactForm
class ContactForm extends Component {
    form = createRef()
    state = {
        isFormAlreadyFilled: false,
        isErrorOccurred: false,
        userName: '',
        email: '',
        message: '',
        errorMessage: ''
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    contactFormSubmitHandler = async (ev) => {
        ev.preventDefault();
        const { userName, email, message } = this.state
        try {
            if (!userName || !email || !message) {
                return this.setState({
                    isFormAlreadyFilled: true,
                    isErrorOccurred: true,
                    errorMessage: 'Some Field has been empty between Name, Email or Message! Please Check!'
                })
            } else {
                const isValidEmail = email.split('@')
                let arr = ['gmail.com', 'yahoo.com', 'outlook.com']
                if (!arr.includes(isValidEmail[1])) {
                    return this.setState({
                        isFormAlreadyFilled: true,
                        isErrorOccurred: true,
                        errorMessage: 'Invalid Email! Please enter a valid email address! Only Gmail, Yahoo and Outlook is allowed!'
                    })
                }
                this.setState({
                    isFormAlreadyFilled: true,
                    isErrorOccurred: true,
                    errorMessage: "Sending..."
                })
                let response = await emailjs.send(
                    'service_orc3b3h',
                    'template_xn1qear',
                    { userName, email, message },
                    'mT2j9sQTEHiODyakr'
                );
                if (response.status === 200) {
                    localStorage.setItem('isContactFormFilled', 'true')
                    return this.setState({
                        userName: '',
                        email: '',
                        message: '',
                        isFormAlreadyFilled: true,
                        isErrorOccurred: false,
                        errorMessage: 'Message has been sent! Thanks you for reaching out to me!'
                    })
                }
            }
        } catch (error) {
            let storedData = (localStorage.getItem('isContactFormFilled') === 'true') ? true : false
            if (storedData) {
                localStorage.removeItem('isContactFormFilled')
            }
            this.setState({
                isFormAlreadyFilled: false,
                isErrorOccurred: true,
                errorMessage: 'Error Occurred while sending the message! Unable to sent mail!'
            })
        }
    }

    componentDidMount = async () => {
        const storedData = (localStorage.getItem('isContactFormFilled') === 'true') ? true : false

        emailjs.init("mT2j9sQTEHiODyakr")

        this.setState({
            isFormAlreadyFilled: storedData,
            isErrorOccurred: !storedData,
            errorMessage: 'Message has been sent! Thank you for reaching out to me!'
        })
    }

    // render funtion for rendering the contact us form
    render() {
        const { isFormAlreadyFilled, isErrorOccurred, userName, email, message, errorMessage } = this.state
        return (
            <>
                <form onSubmit={this.contactFormSubmitHandler} ref={this.form}>
                    <div className="row">
                        <div className="col-md-5 col-sm-10 mb-3 mr-3">
                            <input className="form-control" type="text" name="userName" value={userName} onChange={this.inputChangeHandler} placeholder="Enter Your Name" />
                        </div>
                        <div className="col-md-5 col-sm-10 mb-3 mr-3">
                            <input className="form-control" type="email" name="email" value={email} onChange={this.inputChangeHandler} placeholder="Enter Your Email" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-sm-10 mb-3 mr-3">
                            <textarea className="form-control" name="message" value={message} onChange={this.inputChangeHandler} placeholder="Enter Your Message" rows="4" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-sm-10 mb-3 mr-3">
                            <button type="submit" className="btn btn-success" disabled={!isErrorOccurred} >Submit</button>
                        </div>
                    </div>
                </form>

                {isFormAlreadyFilled ? (
                    <div className="row contactHeading errorMessage">
                        {errorMessage}
                    </div>
                ) : null}
            </>
        )
    }
}

// contactForm
export default ContactForm
