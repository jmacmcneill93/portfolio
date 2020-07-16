import React from 'react';
import info from './info.json';
import Background from './projectBackGround';
import './projects.css';

class Projects extends React.Component {
    render() {
        return (
            <>
                <Background />
                <div className="cardContainer">
                    {info.map((item) => {
                        return (
                            <div className="card">
                                <div className="front">
                                    <img className="webSiteImg" src={item.img} href={item.href} alt="projects" />
                                    <div className="cardInfo">
                                        <h3 className="itemTitle">{item.title}</h3>
                                        <hr />
                                        <h4 className="itemLanguage">{item.languages}</h4>
                                    </div>
                                </div>
                                <div className="back">
                                    <h4 className="itemLanguage">{item.languages}</h4>
                                    <p className="itemDescription">{item.description}</p>
                                    <div className="btns">
                                    <button className="btnNetlify"><a className="btnNetlifyText" href={item.netlify}>Netlify</a></button>
                                    <button className="btnGithub">< a className="btnGithubText" href={item.github}>Github</a></button>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </>
        );
    }
}

export default Projects;