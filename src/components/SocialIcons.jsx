import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const SocialIcons = () => {

    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/sweetmoves22/">
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            </a>
            <a href="https://wa.me/+447701360672">
                <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            </a>
            <a href="mailto:sweetmoves22@gmail.com">
                                            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                                        </a>
                                        <a href="tel:+447701360672">
                                            <FontAwesomeIcon icon={faPhone} className="social-icon" />
            </a>
        </div>
    );
}

export default SocialIcons;