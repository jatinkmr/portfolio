import React, { Component } from 'react'
import './profileTab.css'

//Class ProfileTab
class ProfileTab extends Component {
    render() {
        return (
            <div className='row mainProfileDiv fade-in'>
                <div className='col-md-12'>
                    <div className='skills'>
                        <h2 className='a skill'>Skills</h2>
                        <div className='skillHeader'>
                            <h3 className='a'>HTML</h3>
                        </div>
                        <div className='skillContentDetails'>
                            <div className='skillSection'>
                                <span className='skillHeading'>HTML</span>
                                <div className='skillGrade'>
                                    <div className='htmlSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>JSX</span>
                                <div className='skillGrade'>
                                    <div className='jsxSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>pHp</span>
                                <div className='skillGrade'>
                                    <div className='phpMySql'></div>
                                </div>
                            </div>
                        </div>
                        <div className='skillHeader'>
                            <h3 className='a'>CSS</h3>
                        </div>
                        <div className='skillContentDetails'>
                            <div className='skillSection'>
                                <span className='skillHeading'>CSS</span>
                                <div className='skillGrade'>
                                    <div className='cssSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>BootStrap</span>
                                <div className='skillGrade'>
                                    <div className='bootStrapSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>ReactStrap</span>
                                <div className='skillGrade'>
                                    <div className='reactStrapSkill'></div>
                                </div>
                            </div>
                        </div>
                        <div className='skillHeader'>
                            <h3 className='a'>JavaScript</h3>
                        </div>
                        <div className='skillContentDetails'>
                            <div className='skillSection'>
                                <span className='skillHeading'>ReactJS</span>
                                <div className='skillGrade'>
                                    <div className='reactSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>NodeJS</span>
                                <div className='skillGrade'>
                                    <div className='nodeJsSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>KnexJS</span>
                                <div className='skillGrade'>
                                    <div className='knexJs'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>jQuery</span>
                                <div className='skillGrade'>
                                    <div className='jQuerySkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>VueJS</span>
                                <div className='skillGrade'>
                                    <div className='vueJsSkill'></div>
                                </div>
                            </div>
                        </div>
                        <div className='skillHeader'>
                            <h3 className='a'>Back-End</h3>
                        </div>
                        <div className='skillContentDetails'>
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
                        </div>
                        <div className='skillHeader'>
                            <h3 className='a'>Other</h3>
                        </div>
                        <div className='skillContentDetails'>
                            <div className='skillSection'>
                                <span className='skillHeading'>GIT</span>
                                <div className='skillGrade'>
                                    <div className='gitSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>Heroku</span>
                                <div className='skillGrade'>
                                    <div className='herokuSkill'></div>
                                </div>
                            </div>
                            <div className='skillSection'>
                                <span className='skillHeading'>AWS</span>
                                <div className='skillGrade'>
                                    <div className='awsSkill'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='experience'>
                        <h2 className='a skill'>Work Experience</h2>
                        <div className='skillHeader'>
                            <h3 className='a'>Full Time</h3>
                        </div>
                        <div className='row workExperience'>
                            <div className='braces'>
                                <p className='a'>&#x007B;</p>
                            </div>
                            <div className='experienceData'>
                                <div className='position a'>Associate Software Developer</div>
                                <div className='companyAndYear'>
                                    <div className='companyName'>
                                        <a
                                            href='https://www.momkidcare.com/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='MomKidCare'
                                            className='a'
                                        >
                                            Insurgics Health Solution Pvt. Ltd.
                                    </a>
                                    </div>
                                    <div className='year'>
                                        <p className='a'>Nov 2020 - Aug 2021</p>
                                    </div>
                                </div>
                                <div className='companyWork'>
                                    <ul className='workList'>
                                        <li>Public Website User Interface manipulation using Pug, Javascript and jQuery.</li>
                                        <li>Develop REST APIs using Express Framework along with Backend Logic.</li>
                                        <li>FrontEnd User Interface Integration with Rest APIs.</li>
                                        <li>Database Integration and developed MongoDB Queries sing Mongoose.</li>
                                        <li>Configuring and Managing website Deployment over AWS(EC2, IAM User and S3-Bucket)</li>
                                        <li>Cluster and Swagger Implementation on Project.</li>
                                        <li>Tools: NodeJS, ExpressJS, ReactJS, ReactStrap, MongoDB, Mongoose, Pug, Jira and Trello.</li>
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
                                <p className='a'>&#x007B;</p>
                            </div>
                            <div className='experienceData'>
                                <div className='position a'>Software Developer</div>
                                <div className='companyAndYear'>
                                    <div className='companyName'>
                                        <a
                                            href='https://www.firstcry.com/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='FirstCry'
                                            className='a'
                                        >
                                            BrainBees Solutions Pvt Ltd (FirstCry)
                                    </a>
                                    </div>
                                    <div className='year'>
                                        <p className='a'>Aug 2021 - Present</p>
                                    </div>
                                </div>
                                <div className='companyWork'>
                                    <ul className='workList'>
                                        <li>
                                            Work in CRM(Customer Relationship Management)-Team as Full-Stack Developer.
                                        </li>
                                        <li>Developed REST API using the Express framework along backend logic.</li>
                                        <li>Designed FrontEnd User-Interface using VueJS.</li>
                                        <li>FrontEnd User Interface Integration with REST APIs. </li>
                                        <li>Tools: NodeJS, ExpressJS, VueJS, PostgresSQL and Sequelize.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='skillHeader'>
                            <h3 className='a'>Internships</h3>
                        </div>
                        <div className='row workExperience'>
                            <div className='braces'>
                                <p className='a'>&#x007B;</p>
                            </div>
                            <div className='experienceData'>
                                <div className='position a'>Intern FullStack Web Developer</div>
                                <div className='companyAndYear'>
                                    <div className='companyName'>
                                        <a
                                            href='https://www.momkidcare.com/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='MomKidCare'
                                            className='a'
                                        >
                                            Insurgics Health Solution Pvt. Ltd.
                                    </a>
                                    </div>
                                    <div className='year'>
                                        <p className='a'>Mar - Nov 2020</p>
                                    </div>
                                </div>
                                <div className='companyWork'>
                                    <ul className='workList'>
                                        <li>
                                            Public Website User Interface manipulations using Pug, Javascript and Jquery.
                                        </li>
                                        <li>Develop Vendor and Admin Dashboard using CORE-UI theme using ReactJS and ReactStrap.</li>
                                        <li>Develop REST APIs using Express Framework along with Backend Logic.</li>
                                        <li>FrontEnd User Interface Integration with Rest APIs.</li>
                                        <li>Database Integration and developed MongoDB Queries sing Mongoose.</li>
                                        <li>Tools: NodeJS, ExpressJS, ReactJS, ReactStrap, MongoDB, Mongoose and Pug.</li>
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
                                <p className='a'>&#x007B;</p>
                            </div>
                            <div className='experienceData'>
                                <div className='position a'>Intern Back-End Developer</div>
                                <div className='companyAndYear'>
                                    <div className='companyName'>
                                        <a
                                            href='https://www.entrancezone.com/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='EntranceZone'
                                            className='a'
                                        >
                                            EntranceZone
                                    </a>
                                    </div>
                                    <div className='year'>
                                        <p className='a'>Nov 2019</p>
                                    </div>
                                </div>
                                <div className='companyWork'>
                                    <ul className='workList'>
                                        <li>
                                            Developed REST APIs using the Express FrameWork.
                                        </li>
                                        <li>Developed Backend Logic.</li>
                                        <li>Database Integration adn developed PostgreSQL queries using KnexJS.</li>
                                        <li>Tools: NodeJS and PostgreSQL.</li>
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
                                <p className='a'>&#x007B;</p>
                            </div>
                            <div className='experienceData'>
                                <div className='position a'>Intern Software Developer</div>
                                <div className='companyAndYear'>
                                    <div className='companyName'>
                                        <a
                                            href='http://www.itechmission.org/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title='iTM'
                                            className='a'
                                        >
                                            iTM (iTechMission) Pvt. Ltd.
                                    </a>
                                    </div>
                                    <div className='year'>
                                        <p className='a'>Jul - Oct 2019</p>
                                    </div>
                                </div>
                                <div className='companyWork'>
                                    <ul className='workList'>
                                        <li>Developed Public Website User Interface using php(WordPress).</li>
                                        <li>Developed Backedn logic.</li>
                                        <li>DataBase Integration with User Interface and developed SQL Queries.</li>
                                        <li>Tools: Core php, wordPress(CMS) and MySQL.</li>
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
            </div>
        )
    }
}

// export class profiletab
export default ProfileTab
