import React, { Component } from 'react'
import './contact.css'

//Class ContactTab
class ContactTab extends Component {
    render() {
        return (
            <div className='row mainContactDiv'>
                <div className='waveHand'>
                    <h1>
                        Hi there! <span className='wave' role='img' aria-label='waving-hand'>👋</span>
                    </h1>
                </div>
                <div className='contactHeading'>
                    I am available for hire and open to any ideas of cooperation.
                </div>
                <div className='contactDetails'>
                    <div></div>
                </div>
            </div>
        )
    }
}

//contactUs Page
export default ContactTab
