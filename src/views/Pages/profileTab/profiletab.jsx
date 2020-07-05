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
                        <div className='braces'>
                            <p>&#x007B;</p>
                        </div>
                        <div className='experienceData'>
                            <div className='position a'>Intern Full-Stack Web Developer</div>
                            <div className='companyAndYear'>
                                <div className='companyName a'>
                                    <a
                                        href='https://www.momkidcare.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='MomKidCare'
                                    >
                                        MomKidCare
                                    </a>
                                </div>
                                <div className='year a'>Mar 2020 - Present</div>
                            </div>
                            <div className='companyWork'>
                                <ul className='workList'>
                                    <li>
                                        Work on Company Product and Provide Full-Stack Developer Support.
                                    </li>
                                    <li>
                                        Tools: NodeJS, ReactJS, MongoDB and Pug.
                                    </li>
                                    <li className='projectName'>
                                        Project:{' '}
                                        <a
                                            href='https://www.momkidcare.com/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='MomKidCare'
                                        >
                                            MomKidCare
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row workExperience'>
                        <div className='braces'>
                            <p>&#x007B;</p>
                        </div>
                        <div className='experienceData'>
                            <div className='position a'>Intern Back-End Developer</div>
                            <div className='companyAndYear'>
                                <div className='companyName a'>
                                    <a
                                        href='https://www.entrancezone.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='EntranceZone'
                                    >
                                        EntranceZone
                                    </a>
                                </div>
                                <div className='year a'>Nov 2019</div>
                            </div>
                            <div className='companyWork'>
                                <ul className='workList'>
                                    <li>
                                        Work on Company Product and Provide BackEnd support in making APIs(Application Programming Interfaces).
                                    </li>
                                    <li>
                                        Tools: NodeJS and PostgreSQL.
                                    </li>
                                    <li className='projectName'>
                                        Project:{' '}
                                        <a
                                            href='https://www.entrancezone.com/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='EntranceZone'
                                        >
                                            EntranceZone
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row workExperience'>
                        <div className='braces'>
                            <p>&#x007B;</p>
                        </div>
                        <div className='experienceData'>
                            <div className='position a'>Intern Software Developer</div>
                            <div className='companyAndYear'>
                                <div className='companyName a'>
                                    <a
                                        href='http://www.itechmission.org/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        data-toggle='tooltip'
                                        title='iTM'
                                    >
                                        iTM(iTechMission) Pvt. Ltd.
                                    </a>
                                </div>
                                <div className='year a'>Jul 2019 - Oct 2019</div>
                            </div>
                            <div className='companyWork'>
                                <ul className='workList'>
                                    <li>
                                        Provide BackEnd support on Companies Projects.
                                    </li>
                                    <li>
                                        Tools: Core php, wordPress and MySQL.
                                    </li>
                                    <li className='projectName'>
                                        Project:{' '}
                                        <a
                                            href='https://learning4impact.in/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='learning4impact'
                                        >
                                            Learning4Impact
                                        </a>
                                    </li>
                                </ul>
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
