import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const SocialIconsDetailed = () => {

    return (
        <div className="SocialIconsDetailed">

            <div className="social-container">
                <a href="mailto:sweetmoves22@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="social-icon2" />
                </a>
                <a href="mailto:sweetmoves22@gmail.com">
                    <label className="social-text">sweetmoves22@gmail.com</label>
                </a>
            </div>

            <div className="social-container">
                <a href="tel:+447701360672">
                    <FontAwesomeIcon icon={faPhone} className="social-icon2" />
                </a>
                <a href="tel:+447701360672">
                    <label className="social-text">07701 360672</label>
                </a>
            </div>
            <div className="social-container">
                <a href="https://wa.me/+447701360672">
                    <FontAwesomeIcon icon={faWhatsapp} className="social-icon2" />
                </a>
                <a href="https://wa.me/+447701360672">
                    <label className="social-text">+447701 360672</label>
                </a>
            </div>
            <div className="social-container">
                <a href="https://www.facebook.com/sweetmoves22/">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon2" />
                </a>
                <a href="https://www.facebook.com/sweetmoves22/">
                    <label className="social-text">SweetMoves</label>
                </a>
            </div>
        </div>
    );
}

export default SocialIconsDetailed;