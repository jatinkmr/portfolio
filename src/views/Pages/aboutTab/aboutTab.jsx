import React, { Component } from 'react'
import './aboutTab.css'

// class AboutTab
class AboutTab extends Component {
    render() {
        return (
            <div className='row mainAboutTab fade-in'>
                <div className='waveHand'>
                    <h1>
                        Hi There...!!{' '}
                        <span className='wave' role='img' aria-label='waving-hand'>
                            👋
            </span>
                    </h1>
                </div>
                <div className='mainAboutHello'>
                    I&#39;m <span>Jatin Kumar</span> from Delhi, India which is also known
          as Capital of India. I&#39;m a Web Developer.
          <br />
                    <br />
          Currently I&#39;m working as an Intern FullStack Web Developer at{' '}
                    <span>
                        <a
                            href='https://www.momkidcare.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            data-toggle='tooltip'
                            title='MomKidCare'
                        >
                            MomKidCare
            </a>
                    </span>
          . I always tried to learn new technologies in Web and try to implement them too.
        </div>
            </div>
        )
    }
}

// export aboutTab Page
export default AboutTab
