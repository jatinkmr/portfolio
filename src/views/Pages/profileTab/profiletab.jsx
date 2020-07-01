import React, { Component } from 'react'
import './profileTab.css'

//Class ProfileTab
class ProfileTab extends Component {
    render() {
        return (
            <div className='row mainProfileDiv'>
                <div className='skills'>
                    <h2 className='a skill'>Skills</h2>
                    <div className='skillSection'>
                        <span className='skillHeading'>GIT</span>
                        <div className='skillGrade'>
                            <div className='gitSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>HTML/PUG & CSS</span>
                        <div className='skillGrade'>
                            <div className='htmlSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>ReactJS</span>
                        <div className='skillGrade'>
                            <div className='reactSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>pHp</span>
                        <div className='skillGrade'>
                            <div className='phpMySql'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>NodeJS</span>
                        <div className='skillGrade'>
                            <div className='nodeJsSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>MySQL</span>
                        <div className='skillGrade'>
                            <div className='phpMySql'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>MongoDB</span>
                        <div className='skillGrade'>
                            <div className='mongoDb'></div>
                        </div>
                    </div>
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
