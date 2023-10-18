import React from "react";
import HeroImageV2 from "../components/HeroImageV2";
import CarouselComponent from "../components/CarouselComponent";
import HeroTabbed from "../components/HeroTabbed";
import WhyUs from "../components/WhyUs";
import Seo from "../components/Seo";
import ParallaxImg from "../components/ParallaxImg";

const Home = () => {
    const metaData = [
        {
            name: "keywords",
            content: "home, services, removals, home, office, packing, unpacking, assembly,Dismantling, reassembly, furniture, loading, un-loading, cleaning, man and van, van",
        },
    ];
    return (
        <div>
            <Seo
                title="SweetMoves Homepage"
                description="The Home page for SweetMoves which lists and explains all services provided."
                meta={metaData} />
                
                {/* <ParallaxImg /> */}
               
                
            <HeroImageV2 />
            <WhyUs />
            <HeroTabbed />
            <CarouselComponent />
        </div>
    );
}

export default Home;