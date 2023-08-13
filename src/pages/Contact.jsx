import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Form from "../components/Form";
import TitleBanner from "../components/TitleBanner";
import SocialIconsDetailed from "../components/SocialIconsDetailed";

const Contact = () => {
    return (
        <div>
            <TitleBanner text="Contact" />

            <div className="row">
                <div className="col-sm-6">
                    <div className="contact-page">
                        <div className="row contact-list">
                            <SocialIconsDetailed />
                        </div>
                    </div>


                </div>
                <div className="col-sm-6">
                    <div className="contact-page">
                        <p>
                            Please use the form to send an email (NOTE: this will open default email app.)
                        </p>
                        <Form />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Contact;