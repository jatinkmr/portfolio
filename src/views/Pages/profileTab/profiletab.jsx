import React, { Component } from 'react'
import './profileTab.css'

//Class ProfileTab
class ProfileTab extends Component {
    render() {
        return (
            <div className='row mainDiv'>
                <div className='skills'>
                    <h2 className='a skill'>Skills</h2>
                </div>
                <div className='experience'>
                    <h2 className='a skill'>Experience</h2>
                </div>
            </div>
        )
    }
}

// export class profiletab
export default ProfileTab