import React from 'react'
import './about.css';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { FaFile, FaBorderNone } from 'react-icons/fa'
import ResumeLink from '../Resume/portfolioResume.pdf';

class About extends React.Component {
    render() {
        return (
            <div>
                <div className="landing-grid">
                    <img
                        src="../images/josh_mcneill.jpg"
                        alt="Josh McNeill"
                        className="portfolioImage"
                    />
                    <div className="aboutInfo">
                        <h1>Front-End Web Developer</h1>
                        <hr />
                        <p className="aboutText">HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MySQL</p>
                        <hr />
                        <p className="aboutText">Hey my name is Josh McNeill and I am a North Carolina based web developer who loves to create beautiful and clean web applications. It is a true passion of mine to be able to take a webpage, apply my creativity to it and turn it into something great.   </p>
                    </div>
                    <div className="contactBoxes">
                        <div className="contactInfo">
                            <h2 className="contactHead">Contact Information</h2>
                            <hr />
                            {/* <p className="contactText"><span className="spanText">Phone</span> : 704-995-1377</p> */}
                            <p className="contactText"><span className="spanText">Email</span> : joshmcneill1993@gmail.com</p>
                            <div className="socialIcons">
                                <SocialMediaIconsReact icon="github" url="https://github.com/jmacmcneill93" className="github" target="blank" rel="no-opener" iconColor="white" backgroundColor="black" iconSize="5" roundness="20%" borderColor="white" borderWidth="1" borderStyle="solid">Github</SocialMediaIconsReact>
                                <SocialMediaIconsReact icon="linkedin" url="https://www.linkedin.com/in/joshua-alexander-mcneill/" className="linkedin" target="blank" rel="no-opener" iconColor="white" backgroundColor="black" iconSize="5" roundness="20%" borderColor="white" borderWidth="1" borderStyle="solid">LinkedIn</SocialMediaIconsReact>
                            </div>
                        </div>
                        <div className="contactResume">
                            <h2 className="contactHead">Check Out My Resume!</h2>
                            <hr />
                            <p className="resumeText">Click below to view or download!</p>
                            <a href={ResumeLink} target="_blank" rel="noopener noreferrer"><FaFile style={{textDecoration: 'none', color: 'white', height: '32px', width: '35px', }} /></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;
