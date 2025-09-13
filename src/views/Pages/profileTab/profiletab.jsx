import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './profileTab.css';
import { pageTransition } from '../../utils/animation';

// Skill Bar Component
const SkillBar = ({ skill, percentage, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className='skillSection'
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay, duration: 0.5 }}
        >
            <span className='skillHeading'>
                <i className={skill.icon} aria-hidden="true"></i> {skill.name}
            </span>
            <div className='skillGrade'>
                <motion.div
                    className={skill.className}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{
                        delay: delay + 0.2,
                        duration: 1,
                        ease: "easeOut"
                    }}
                ></motion.div>
            </div>
        </motion.div>
    );
};

// Experience Card Component
const ExperienceCard = ({ experience, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className='workExperience'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
        >
            <motion.div
                className='experienceData'
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className='position a'>
                    <i className={experience.icon} aria-hidden="true"></i>
                    {experience.position}
                </div>
                <div className='companyAndYear'>
                    <div className='companyName'>
                        <i className="fa-solid fa-map-marker-alt" aria-hidden="true"></i>
                        <a
                            href={experience.companyUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            data-toggle='tooltip'
                            title={experience.companyTooltip}
                            className='a'
                        >
                            {experience.companyName}
                        </a>
                    </div>
                    <div className='year'>
                        <i className="fa-solid fa-calendar-alt" aria-hidden="true"></i>
                        <p className='a'>{experience.duration}</p>
                    </div>
                </div>
                <motion.div
                    className='companyWork'
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                >
                    <ul className='workList'>
                        {experience.responsibilities.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.2 + 0.4 + idx * 0.1 }}
                                whileHover={{ x: 5 }}
                            >
                                {typeof item === 'object' && item.type === 'project' ? (
                                    <>
                                        Project:{' '}
                                        <a
                                            href={item.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            data-toggle='tooltip'
                                            title={item.name}
                                        >
                                            {item.name}
                                        </a>
                                    </>
                                ) : (
                                    item
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const ProfileTab = () => {
    // HTML Skills Data
    const htmlSkills = [
        { name: 'HTML', icon: 'fa-brands fa-html5', className: 'htmlSkill', percentage: 75 },
        { name: 'JSX', icon: 'fa-brands fa-react', className: 'jsxSkill', percentage: 65 },
        { name: 'PHP', icon: 'fa-brands fa-php', className: 'phpMySqlSkill', percentage: 55 }
    ];

    // CSS Skills Data
    const cssSkills = [
        { name: 'CSS', icon: 'fa-brands fa-css3-alt', className: 'cssSkill', percentage: 62 },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', className: 'bootStrapSkill', percentage: 60 },
        { name: 'ReactStrap', icon: 'fa-solid fa-layer-group', className: 'reactStrapSkill', percentage: 55 }
    ];

    // JavaScript Skills Data
    const jsSkills = [
        { name: 'ReactJS', icon: 'fa-brands fa-react', className: 'reactSkill', percentage: 45 },
        { name: 'NodeJS', icon: 'fa-brands fa-node-js', className: 'nodeJsSkill', percentage: 70 },
        { name: 'KnexJS', icon: 'fa-solid fa-cubes', className: 'knexJsSkill', percentage: 50 },
        { name: 'jQuery', icon: 'fa-solid fa-dollar-sign', className: 'jQuerySkill', percentage: 52 },
        { name: 'VueJS', icon: 'fa-brands fa-vuejs', className: 'vueJsSkill', percentage: 50 }
    ];

    // Backend Skills Data
    const backendSkills = [
        { name: 'MySQL', icon: 'fa-solid fa-database', className: 'phpMySqlSkill', percentage: 55 },
        { name: 'MongoDB', icon: 'fa-solid fa-leaf', className: 'mongoDbSkill', percentage: 50 },
        { name: 'PostgreSQL', icon: 'fa-solid fa-chart-simple', className: 'postgreSqlSkill', percentage: 45 }
    ];

    // Other Skills Data
    const otherSkills = [
        { name: 'Git', icon: 'fa-brands fa-git-alt', className: 'gitSkill', percentage: 60 },
        { name: 'Heroku', icon: 'fa-solid fa-cube', className: 'herokuSkill', percentage: 50 },
        { name: 'AWS', icon: 'fa-brands fa-aws', className: 'awsSkill', percentage: 45 }
    ];

    // Full Time Experience Data
    const fullTimeExperiences = [
        {
            position: 'Software Developer',
            icon: 'fa-solid fa-laptop-code',
            companyName: 'BrainBees Solutions Pvt Ltd (FirstCry)',
            companyUrl: 'https://www.firstcry.com/',
            companyTooltip: 'FirstCry',
            duration: 'Aug 2021 - May 2023',
            responsibilities: [
                'Work in CRM(Customer Relationship Management)-Team as Full-Stack Developer.',
                'Developed REST API using the Express framework along backend logic.',
                'Designed FrontEnd User-Interface using VueJS.',
                'FrontEnd User Interface Integration with REST APIs.',
                'Tools: NodeJS, ExpressJS, VueJS, PostgresSQL and Sequelize.'
            ]
        },
        {
            position: 'Associate Software Developer',
            icon: 'fa-solid fa-laptop-code',
            companyName: 'Insurgics Health Solution Pvt. Ltd.',
            companyUrl: 'https://www.momkidcare.com/',
            companyTooltip: 'MomKidCare',
            duration: 'Nov 2020 - Aug 2021',
            responsibilities: [
                'Public Website User Interface manipulation using Pug, Javascript and jQuery.',
                'Develop REST APIs using Express Framework along with Backend Logic.',
                'FrontEnd User Interface Integration with Rest APIs.',
                'Database Integration and developed MongoDB Queries sing Mongoose.',
                'Configuring and Managing website Deployment over AWS(EC2, IAM User and S3-Bucket)',
                'Cluster and Swagger Implementation on Project.',
                'Tools: NodeJS, ExpressJS, ReactJS, ReactStrap, MongoDB, Mongoose, Pug, Jira and Trello.',
                {
                    type: 'project',
                    name: 'MomKidCare',
                    url: 'https://www.momkidcare.com/'
                }
            ]
        }
    ];

    // Internship Experience Data
    const internshipExperiences = [
        {
            position: 'Intern FullStack Web Developer',
            icon: 'fa-solid fa-terminal',
            companyName: 'Insurgics Health Solution Pvt. Ltd.',
            companyUrl: 'https://www.momkidcare.com/',
            companyTooltip: 'MomKidCare',
            duration: 'Mar - Nov 2020',
            responsibilities: [
                'Public Website User Interface manipulations using Pug, Javascript and Jquery.',
                'Develop Vendor and Admin Dashboard using CORE-UI theme using ReactJS and ReactStrap.',
                'Develop REST APIs using Express Framework along with Backend Logic.',
                'FrontEnd User Interface Integration with Rest APIs.',
                'Database Integration and developed MongoDB Queries sing Mongoose.',
                'Tools: NodeJS, ExpressJS, ReactJS, ReactStrap, MongoDB, Mongoose and Pug.',
                {
                    type: 'project',
                    name: 'MomKidCare',
                    url: 'https://www.momkidcare.com/'
                }
            ]
        },
        {
            position: 'Intern Back-End Developer',
            icon: 'fa-solid fa-server',
            companyName: 'EntranceZone',
            companyUrl: 'https://www.entrancezone.com/',
            companyTooltip: 'EntranceZone',
            duration: 'Nov 2019',
            responsibilities: [
                'Developed REST APIs using the Express FrameWork.',
                'Developed Backend Logic.',
                'Database Integration and developed PostgreSQL queries using KnexJS.',
                'Tools: NodeJS and PostgreSQL.',
                {
                    type: 'project',
                    name: 'EntranceZone',
                    url: 'https://www.entrancezone.com/'
                }
            ]
        },
        {
            position: 'Intern Software Developer',
            icon: 'fa-solid fa-laptop-code',
            companyName: 'iTM (iTechMission) Pvt. Ltd.',
            companyUrl: 'http://www.itechmission.org/',
            companyTooltip: 'iTM',
            duration: 'Jul - Oct 2019',
            responsibilities: [
                'Developed Public Website User Interface using php(WordPress).',
                'Developed Backend logic.',
                'Database Integration with User Interface and developed SQL Queries.',
                'Tools: Core php, WordPress(CMS) and MySQL.',
                {
                    type: 'project',
                    name: 'Learning4Impact',
                    url: 'https://learning4impact.org/'
                }
            ]
        }
    ];

    return (
        <motion.div
            className='mainProfileDiv fade-in'
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Skills Column */}
            <motion.div
                className='skills'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className='a skill'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <i className="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i> Skills
                </motion.h2>

                {/* HTML Section */}
                <motion.div
                    className='skillHeader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className='a'>
                        <i className="fa-solid fa-code" aria-hidden="true"></i> HTML
                    </h3>
                </motion.div>
                <div className='skillContentDetails'>
                    {htmlSkills.map((skill, index) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            percentage={skill.percentage}
                            delay={0.4 + index * 0.1}
                        />
                    ))}
                </div>

                {/* CSS Section */}
                <motion.div
                    className='skillHeader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h3 className='a'>
                        <i className="fa-brands fa-css3-alt" aria-hidden="true"></i> CSS
                    </h3>
                </motion.div>
                <div className='skillContentDetails'>
                    {cssSkills.map((skill, index) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            percentage={skill.percentage}
                            delay={0.6 + index * 0.1}
                        />
                    ))}
                </div>

                {/* JavaScript Section */}
                <motion.div
                    className='skillHeader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <h3 className='a'>
                        <i className="fa-brands fa-js-square" aria-hidden="true"></i> JavaScript
                    </h3>
                </motion.div>
                <div className='skillContentDetails'>
                    {jsSkills.map((skill, index) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            percentage={skill.percentage}
                            delay={0.8 + index * 0.1}
                        />
                    ))}
                </div>

                {/* Back-End Section */}
                <motion.div
                    className='skillHeader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <h3 className='a'>
                        <i className="fa-solid fa-server" aria-hidden="true"></i> Back-End
                    </h3>
                </motion.div>
                <div className='skillContentDetails'>
                    {backendSkills.map((skill, index) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            percentage={skill.percentage}
                            delay={1.0 + index * 0.1}
                        />
                    ))}
                </div>

                {/* Other Skills Section */}
                <motion.div
                    className='skillHeader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <h3 className='a'>
                        <i className="fa-solid fa-rocket" aria-hidden="true"></i> Other
                    </h3>
                </motion.div>
                <div className='skillContentDetails'>
                    {otherSkills.map((skill, index) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            percentage={skill.percentage}
                            delay={1.2 + index * 0.1}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Experience Column */}
            <motion.div
                className='experience'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.h2
                    className='a skill'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <i className="fa-solid fa-user-tie" aria-hidden="true"></i> Work Experience
                </motion.h2>

                {/* Full Time Section */}
                <motion.div
                    className='skillHeader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className='a'>
                        <i className="fa-solid fa-building" aria-hidden="true"></i> Full Time
                    </h3>
                </motion.div>

                {fullTimeExperiences.map((exp, index) => (
                    <ExperienceCard key={`fulltime-${index}`} experience={exp} index={index} />
                ))}

                {/* Internships Section */}
                <motion.div
                    className='skillHeader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className='a'>
                        <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i> Internships
                    </h3>
                </motion.div>

                {internshipExperiences.map((exp, index) => (
                    <ExperienceCard
                        key={`internship-${index}`}
                        experience={exp}
                        index={fullTimeExperiences.length + index}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ProfileTab;
