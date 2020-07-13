import React, { Component } from "react";
import './aboutTab.css';

// class AboutTab
class AboutTab extends Component {
    render() {
        return (
            <div className='row mainAboutTab fade-in'>
                <div className='waveHand'>
                    <h1>
                        Hi There...!! <span className='wave' role='img' aria-label='waving-hand'>👋</span>
                    </h1>
                </div>
            </div>
        )
    }
}

// export aboutTab Page
export default AboutTab;