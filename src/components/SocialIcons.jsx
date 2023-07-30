import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const SocialIcons = () => {

    return (
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/craig-trotman-80237267/">
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/CTrotman-Dev">
                <FontAwesomeIcon className="social-icon" icon={faGithub} />
            </a>
        
        </div>
    );
}

export default SocialIcons;