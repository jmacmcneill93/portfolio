import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './nav.css'
import Resume from '../Resume/Resume (2).pdf';




class Nav extends React.Component {
    render() {
        return (
            <div className="App">
                <nav id="navbar">
                    <div className="container">
                        <h1 className="logo">Joshua Alexander McNeill</h1>
                        <ul>
                            <li>
                                <NavLink to="/" exact>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Projects">Projects</NavLink>
                            </li>
                            <li>
                                <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                            <li>
                                <NavLink to ="/Contact">Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Nav;