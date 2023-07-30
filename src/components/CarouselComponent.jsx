import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
    return (
        <Carousel dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000}>
            <div className="img-carousel">
                <img src="images/sm-logo.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div className="img-carousel">
                <img src="images/van1.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div className="img-carousel">
                <img src="images/van2.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div className="img-carousel">
                <img src="images/move1.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div className="img-carousel">
                <img src="images/move2.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div className="img-carousel">
                <img src="images/move3.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;