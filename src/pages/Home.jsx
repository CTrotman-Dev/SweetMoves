import React from "react";

import HeroImage from "../components/HeroImage";
import QuickLinks from "../components/QuickLinks";
import AnimateInOut from "../components/Animation/AnimateInOut";
import CarouselComponent from "../components/CarouselComponent";
import HeroTabbed from "../components/HeroTabbed";

const Home = () => {
    return (
        <div>
            <HeroImage imgSrc="images/img4-lg2.jpg" />
            <div>
                <div className="why-us-container">
                    <div className="row">
                        <div className="col-md-3 why-us-section">
                            <h1>Quality equipment</h1> We have a fleet of modern and well-maintained vehicles that can accommodate any size or type of move. We also have high-quality moving equipment and tools, such as dollies, straps, blankets, pads, and ramps, to ensure that your items are loaded and unloaded safely and securely.
                        </div>
                        <div className="col-md-3 why-us-section">
                            <h1>Competitive prices</h1> We offer fair and affordable prices for our services, without compromising on quality or safety. We also have no hidden fees or extra charges, so you can be sure that the price we quote is the price you pay. We also have various discounts and offers for our loyal and new customers, such as 10% off for referrals, 15% off for repeat customers, and 20% off for students and seniors.
                        </div>
                        <div className="col-md-3 why-us-section">
                            <h1>Professional staff</h1> We have a team of trained and experienced movers who are friendly, courteous, and respectful. They will handle your belongings with care and efficiency, and make sure that everything is delivered to your new location in the same condition as it was when it left your old one. They will also follow your instructions and preferences, and answer any questions or concerns you might have along the way.
                        </div>

                        <div className="col-md-3 why-us-section">
                            <h1>Customer satisfaction</h1> We are committed to providing you with the best moving experience possible. We have a 100% satisfaction guarantee policy, which means that if you are not happy with our service for any reason, we will do everything we can to make it right. We value your feedback and suggestions, and we strive to exceed your expectations.
                        </div>

                    </div>
                </div>
            </div>
            <HeroTabbed />
            <CarouselComponent />

            {/* <HeroImage imgSrc="/logo.png" /> */}
            {/* <AnimateInOut visible="true" delay="0" in="animate__fadeInUp" out="">
                <QuickLinks />
            </AnimateInOut> */}
        </div>
    );
}

export default Home;