import React from 'react';
import './profileTab.css';

const ProfileTab = () => {
    return (
        <div className='mainProfileDiv fade-in'>
            {/* Left Column - Skills */}
            <div className='skills'>
                <h2 className='a skill'>
                    <i className="fa fa-cogs" aria-hidden="true"></i> Skills
                </h2>

                <div className='skillHeader'>
                    <h3 className='a'>
                        <i className="fa fa-code" aria-hidden="true"></i> HTML
                    </h3>
                </div>
                <div className='skillContentDetails'>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-html5" aria-hidden="true"></i> HTML</span>
                        <div className='skillGrade'>
                            <div className='htmlSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-code" aria-hidden="true"></i> JSX</span>
                        <div className='skillGrade'>
                            <div className='jsxSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-file-code-o" aria-hidden="true"></i> PHP</span>
                        <div className='skillGrade'>
                            <div className='phpMySqlSkill'></div>
                        </div>
                    </div>
                </div>

                <div className='skillHeader'>
                    <h3 className='a'>
                        <i className="fa fa-css3" aria-hidden="true"></i> CSS
                    </h3>
                </div>
                <div className='skillContentDetails'>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-css3" aria-hidden="true"></i> CSS</span>
                        <div className='skillGrade'>
                            <div className='cssSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-columns" aria-hidden="true"></i> Bootstrap</span>
                        <div className='skillGrade'>
                            <div className='bootStrapSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-th" aria-hidden="true"></i> ReactStrap</span>
                        <div className='skillGrade'>
                            <div className='reactStrapSkill'></div>
                        </div>
                    </div>
                </div>

                <div className='skillHeader'>
                    <h3 className='a'>
                        <i className="fa fa-code" aria-hidden="true"></i> JavaScript
                    </h3>
                </div>
                <div className='skillContentDetails'>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-code-fork" aria-hidden="true"></i> ReactJS</span>
                        <div className='skillGrade'>
                            <div className='reactSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-server" aria-hidden="true"></i> NodeJS</span>
                        <div className='skillGrade'>
                            <div className='nodeJsSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-database" aria-hidden="true"></i> KnexJS</span>
                        <div className='skillGrade'>
                            <div className='knexJsSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-jsfiddle" aria-hidden="true"></i> jQuery</span>
                        <div className='skillGrade'>
                            <div className='jQuerySkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-code" aria-hidden="true"></i> VueJS</span>
                        <div className='skillGrade'>
                            <div className='vueJsSkill'></div>
                        </div>
                    </div>
                </div>

                <div className='skillHeader'>
                    <h3 className='a'>
                        <i className="fa fa-database" aria-hidden="true"></i> Back-End
                    </h3>
                </div>
                <div className='skillContentDetails'>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-database" aria-hidden="true"></i> MySQL</span>
                        <div className='skillGrade'>
                            <div className='phpMySqlSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-database" aria-hidden="true"></i> MongoDB</span>
                        <div className='skillGrade'>
                            <div className='mongoDbSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-database" aria-hidden="true"></i> PostgreSQL</span>
                        <div className='skillGrade'>
                            <div className='postgreSqlSkill'></div>
                        </div>
                    </div>
                </div>

                <div className='skillHeader'>
                    <h3 className='a'>
                        <i className="fa fa-cogs" aria-hidden="true"></i> Other
                    </h3>
                </div>
                <div className='skillContentDetails'>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-git" aria-hidden="true"></i> Git</span>
                        <div className='skillGrade'>
                            <div className='gitSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-cloud-upload" aria-hidden="true"></i> Heroku</span>
                        <div className='skillGrade'>
                            <div className='herokuSkill'></div>
                        </div>
                    </div>
                    <div className='skillSection'>
                        <span className='skillHeading'><i className="fa fa-cloud" aria-hidden="true"></i> AWS</span>
                        <div className='skillGrade'>
                            <div className='awsSkill'></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Experience */}
            <div className='experience'>
                <h2 className='a skill'>
                    <i className="fa fa-briefcase" aria-hidden="true"></i> Work Experience
                </h2>

                <div className='skillHeader'>
                    <h3 className='a'><i className="fa fa-briefcase" aria-hidden="true"></i> Full Time</h3>
                </div>

                <div className='workExperience'>
                    <div className='experienceData'>
                        <div className='position a'>
                            <i className="fa fa-laptop" aria-hidden="true"></i>
                            Software Developer
                        </div>
                        <div className='companyAndYear'>
                            <div className='companyName'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
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
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <p className='a'>Aug 2021 - May 2023</p>
                            </div>
                        </div>
                        <div className='companyWork'>
                            <ul className='workList'>
                                <li>Work in CRM(Customer Relationship Management)-Team as Full-Stack Developer.</li>
                                <li>Developed REST API using the Express framework along backend logic.</li>
                                <li>Designed FrontEnd User-Interface using VueJS.</li>
                                <li>FrontEnd User Interface Integration with REST APIs.</li>
                                <li>Tools: NodeJS, ExpressJS, VueJS, PostgresSQL and Sequelize.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='workExperience'>
                    <div className='experienceData'>
                        <div className='position a'>
                            <i className="fa fa-laptop" aria-hidden="true"></i>
                            Associate Software Developer
                        </div>
                        <div className='companyAndYear'>
                            <div className='companyName'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
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
                                <i className="fa fa-calendar" aria-hidden="true"></i>
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

                <div className='skillHeader'>
                    <h3 className='a'><i className="fa fa-graduation-cap" aria-hidden="true"></i> Internships</h3>
                </div>

                <div className='workExperience'>
                    <div className='experienceData'>
                        <div className='position a'>
                            <i className="fa fa-code" aria-hidden="true"></i> 
                            Intern FullStack Web Developer
                        </div>
                        <div className='companyAndYear'>
                            <div className='companyName'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
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
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <p className='a'>Mar - Nov 2020</p>
                            </div>
                        </div>
                        <div className='companyWork'>
                            <ul className='workList'>
                                <li>Public Website User Interface manipulations using Pug, Javascript and Jquery.</li>
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

                <div className='workExperience'>
                    <div className='experienceData'>
                        <div className='position a'>
                            <i className="fa fa-server" aria-hidden="true"></i>
                            Intern Back-End Developer
                        </div>
                        <div className='companyAndYear'>
                            <div className='companyName'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
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
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <p className='a'>Nov 2019</p>
                            </div>
                        </div>
                        <div className='companyWork'>
                            <ul className='workList'>
                                <li>Developed REST APIs using the Express FrameWork.</li>
                                <li>Developed Backend Logic.</li>
                                <li>Database Integration and developed PostgreSQL queries using KnexJS.</li>
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

                <div className='workExperience'>
                    <div className='experienceData'>
                        <div className='position a'>
                            <i className="fa fa-code" aria-hidden="true"></i>
                            Intern Software Developer
                        </div>
                        <div className='companyAndYear'>
                            <div className='companyName'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
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
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <p className='a'>Jul - Oct 2019</p>
                            </div>
                        </div>
                        <div className='companyWork'>
                            <ul className='workList'>
                                <li>Developed Public Website User Interface using php(WordPress).</li>
                                <li>Developed Backend logic.</li>
                                <li>Database Integration with User Interface and developed SQL Queries.</li>
                                <li>Tools: Core php, WordPress(CMS) and MySQL.</li>
                                <li className='projectName'>
                                    Project:{' '}
                                    <a
                                        href='https://learning4impact.org/'
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
    );
};

export default ProfileTab;
