import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Form from "../components/Form";
import TitleBanner from "../components/TitleBanner";

const Contact = () => {
    return (
        <div>
            <TitleBanner text="Contact" />

            <div className="row">
            <div className="col-sm-6">
                    <table className="contact-list">
                    <tbody>
                        <tr>
                            <td>
                            <a href="mailto:sweetmoves22@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                                </a>
                            </td>
                            <td>
                                <p>sweetmoves22@gmail.com</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <a href="tel:+447701360672">
                                <FontAwesomeIcon icon={faPhone} className="social-icon" />
                                </a>
                            </td>
                            <td>
                                <p>07701 360672</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <a href="https://api.whatsapp.com/send?phone=+447701360672">
                                <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
                                </a>
                            </td>
                            <td>
                                <p>+447701 360672</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <a href="https://www.facebook.com/T.SRemovals0/">
                                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                                </a>
                            </td>
                            <td>
                                <p>T.SRemovals</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>



                </div>
                <div className="col-sm-6">
                    <p>
                        Please use the form to send an email (NOTE: this will open default email app.)
                    </p>
                    <Form />
                </div>
                
            </div>


        </div>
    );
}

export default Contact;