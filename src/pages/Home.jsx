import React from "react";

import HeroImage from "../components/HeroImage";
import QuickLinks from "../components/QuickLinks";
import AnimateInOut from "../components/Animation/AnimateInOut";
import CarouselComponent from "../components/CarouselComponent";
import HeroTabbed from "../components/HeroTabbed";

const Home = () => {
    return (
        <div>
        <CarouselComponent />
        <HeroTabbed />
            {/* <HeroImage imgSrc="/logo.png" /> */}
            <AnimateInOut visible="true" delay="0" in="animate__fadeInUp" out="">
                <QuickLinks />
            </AnimateInOut>
        </div>
    );
}

export default Home;