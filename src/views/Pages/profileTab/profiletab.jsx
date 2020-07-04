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
                    <div className='skillSection'>
                        <span className='skillHeading'>postgreSql</span>
                        <div className='skillGrade'>
                            <div className='postgreSql'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>KnexJS</span>
                        <div className='skillGrade'>
                            <div className='knexJs'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'>Java</span>
                        <div className='skillGrade'>
                            <div className='java'></div>
                        </div>
                    </div>
                </div>
                <div className='experience'>
                    <h2 className='a skill'>Work Experience</h2>
                    <div className='row workExperience'>
                        <h3>Intern Software Developer</h3>
                        <div className='row nameAndYear'>
                            <div className='col-md-6'>
                                <p>iTM(iTechMission) Pvt. Ltd.</p>
                            </div>
                            <div className='col-md-6'>
                                <p>July 2019 - October 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export class profiletab
export default ProfileTab
