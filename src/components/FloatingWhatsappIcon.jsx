import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const FloatingWhatsappIcon = () => {

    return (
        <div className="floating-icons">
            <a href="https://api.whatsapp.com/send?phone=+447701360672">
                <FontAwesomeIcon className="social-icon" size="6x" beat icon={faWhatsapp} />
            </a>

        
        </div>
    );
}

export default FloatingWhatsappIcon;