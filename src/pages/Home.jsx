import React from "react";


import HeroImage from "../components/HeroImage";
import HeroImageV2 from "../components/HeroImageV2";
import QuickLinks from "../components/QuickLinks";
import AnimateInOut from "../components/Animation/AnimateInOut";
import CarouselComponent from "../components/CarouselComponent";
import HeroTabbed from "../components/HeroTabbed";
import WhyUs from "../components/WhyUs";



const Home = () => {
    return (
        <div>
            {/* <HeroImage imgSrc="images/img4-lg2.jpg" logoSrc="images/new-logo-sm.jpg" /> */}
            {/* <HeroImage imgSrc="images/img9.jpg" logoSrc="images/new-logo-sm.jpg" /> */}
            <HeroImageV2 imgSrc="images/img9v2-sm.jpg" logoSrc="images/new-logo-sm.jpg"/>
            <WhyUs />
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