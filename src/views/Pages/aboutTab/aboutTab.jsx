import React, { Component } from 'react'
import './aboutTab.css'

// class AboutTab
class AboutTab extends Component {
    render() {
        return (
            <div className='row mainAboutTab fade-in'>
                <div className='whoAmI'>
                    Who&#39;s <span title='Jatin Kumar "Kamboj"'>Jatin Kumar</span> &#x2753;
                </div>
                <div className='waveHand'>
                    <h1>
                        Hey There...!!{' '}
                        <span className='wave' role='img' aria-label='waving-hand'>
                            👋
                        </span>
                    </h1>
                </div>
                <div className='mainAboutHello'>
                    I&#39;m <span title='Jatin Kumar "Kamboj"'>Jatin Kumar</span> from Delhi, India which is also known as Capital of India. I am an upComing Full Stack Developer.<br /><br />
                    Well-organized person, problem solver, independent employee with high attention to detail. I Like outdoor activities, Pencil Sketching, Horror Movies and Video Games. <br /><br />
                    I&#39;m a <span title='Web Developer'>Web Developer</span> and Currently I&#39;m working as an Intern FullStack Web Developer at{' '}
                    <span>
                        <a
                            href='https://www.momkidcare.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            data-toggle='tooltip'
                            title='MomKidCare'
                        >
                            Insurgics Health Solution Pvt. Ltd.
                        </a>
                    </span>.<br /><br />
                    I always tried to learn new technologies in Web Development and try to implement them too.
                    <br /><br />
                    Think we could Create SomeThing Together &#x2753; <br />Feel Free to Drop me an email <i class="fa fa-envelope" aria-hidden="true"></i> &#10069;
                </div>
            </div>
        )
    }
}

// export aboutTab Page
export default AboutTab
