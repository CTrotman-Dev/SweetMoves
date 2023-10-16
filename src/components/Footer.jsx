import React from "react";

import SocialIcons from "./SocialIcons";
import FloatingWhatsappIcon from "./FloatingWhatsappIcon";

const Footer = () => {
    function Copyright() {
        return (
            <div>
                {'Copyright © Craig Trotman '}
                {new Date().getFullYear()}.
            </div>
        );
    }

    return (
        <div className="footer sticky-bottom">
        <FloatingWhatsappIcon />
            <SocialIcons />
            <Copyright />
        </div>
    );
};

export default Footer;
