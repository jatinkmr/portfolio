import React, { Component } from 'react'
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
                    <div className='contactDetails'>
                        <div className='connectHeading'>
                            <p>You can connect or contact me at :</p>
                        </div>
                        <div>
                            <p className='speech'>Contact Information: </p>
                        </div>
                        <div className='row socializationLinks'>
                            <ul id='socialList'>
                                <li>
                                    <a
                                        href='https://www.github.com/jatinkmr'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='GitHub'
                                    >
                                        <i className='fa fa-github-square'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.linkedin.com/in/jatinkumarkamboj/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='LinkedIn'
                                    >
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='mailto:kumar.jatin873@gmail.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='Google(gMail)'
                                    >
                                        <i className='fa fa-google-plus'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://twitter.com/jatinkrkamboj'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='Twitter'
                                    >
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.instagram.com/ijatinkrkamb0j/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='InstaGram'
                                    >
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.facebook.com/jatin.kamboj.37'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='FaceBook'
                                    >
                                        <i className='fa fa-facebook-square'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//contactUs Page
export default ContactTab
