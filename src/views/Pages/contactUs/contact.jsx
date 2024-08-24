import React, { Component } from 'react'
import ContactForm from './contactForm'
import './contact.css'

//Class ContactTab
class ContactTab extends Component {
    render() {
        return (
            <div className='row mainContactDiv fade-in'>
                <div className='col-md-12'>
                    <div className='waveHand'>
                        <h1>
                            Hi There...!!{' '}
                            <span className='wave' role='img' aria-label='waving-hand'>
                                👋
                        </span>
                        </h1>
                    </div>
                    <div className='contactHeading'>
                        I&#39;m available for hire and open to any ideas of cooperation. <br />
                        <br /> My inbox is always open for Every0ne whether you want to say
                        &quot;Hello&quot; or have any other &quot;Question&#x2753;&quot;. <br /><br /> Just mail me or connect with me at below given medium.
                    </div>
                    <br /><br />
                    <div className="contactHeading">
                        You can connect with me by fill-up below given form :
                    </div>
                    <br />
                    <div className='contactDetails'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        )
    }
}

//contactUs Page
export default ContactTab
