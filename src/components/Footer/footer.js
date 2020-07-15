import React from 'react';
import './footer.css';
import { SocialMediaIconsReact } from 'social-media-icons-react';





class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                    <p>©Josh McNeill Portfolio; 2020, All Rights Reserved</p>
                    <div className="socialIcons">
                    <SocialMediaIconsReact icon="github" url="https://github.com/jmacmcneill93" className="github" target="blank" rel="no-opener" iconColor="white" backgroundColor="black" iconSize="5" roundness="20%" borderColor="white" borderWidth="1" borderStyle="solid">Github</SocialMediaIconsReact>
                    <SocialMediaIconsReact icon="linkedin" url="https://www.linkedin.com/in/joshua-alexander-mcneill/" className="linkedin" target="blank" rel="no-opener" iconColor="white" backgroundColor="black" iconSize="5" roundness="20%" borderColor="white" borderWidth="1" borderStyle="solid">LinkedIn</SocialMediaIconsReact>
                </div>
                </footer>

            </div>
        );
    }
}
export default Footer;