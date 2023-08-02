import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const SocialIcons = () => {

    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/T.SRemovals0/">
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+447701360672">
                <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            </a>

        </div>
    );
}

export default SocialIcons;