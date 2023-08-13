import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTruckFast, faAward, faPeopleCarryBox, faStar } from '@fortawesome/free-solid-svg-icons'

const WhyUs = (props) => {

    return (
        <div className="why-us-container container-fluid px-5">
        <div className="row">
            <div className="col-lg-3 why-us-section p-3">
                <div className="col-12">
                    <FontAwesomeIcon icon={faTruckFast} className="txt-lg" />
                    <h2>Quality equipment</h2> We have a fleet of modern and well-maintained vehicles that can accommodate any size or type of move. We also have high-quality moving equipment and tools, such as dollies, straps, blankets, pads, and ramps, to ensure that your items are loaded and unloaded safely and securely.
                </div>
            </div>
            <div className="col-lg-3 why-us-section p-3">
                <div className="col-12">
                    <FontAwesomeIcon icon={faAward} className="txt-lg" />
                    <h2>Competitive prices</h2> We offer fair and affordable prices for our services, without compromising on quality or safety. We also have no hidden fees or extra charges, so you can be sure that the price we quote is the price you pay. We also have various discounts and offers for our loyal and new customers, such as 10% off for referrals, 15% off for repeat customers, and 20% off for students and seniors.
                </div>
            </div>
            <div className="col-lg-3 why-us-section p-3">
                <div className="col-12">
                    <FontAwesomeIcon icon={faPeopleCarryBox} className="txt-lg" />
                    <h2>Professional staff</h2> We have a team of trained and experienced movers who are friendly, courteous, and respectful. They will handle your belongings with care and efficiency, and make sure that everything is delivered to your new location in the same condition as it was when it left your old one. They will also follow your instructions and preferences, and answer any questions or concerns you might have along the way.
                </div>
            </div>

            <div className="col-lg-3 why-us-section p-3">
                <div className="col-12 py-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <h2>Customer satisfaction</h2> We are committed to providing you with the best moving experience possible. We have a 100% satisfaction guarantee policy, which means that if you are not happy with our service for any reason, we will do everything we can to make it right. We value your feedback and suggestions, and we strive to exceed your expectations.
                </div>
            </div>

        </div>
    </div>
    );
}

export default WhyUs;