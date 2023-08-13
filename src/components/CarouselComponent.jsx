import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image1 from "./../images/img1.jpg";
import Image2 from "./../images/img2.jpg";
import Image3 from "./../images/img3.jpg";
import Image4 from "./../images/img4.jpg";
import Image5 from "./../images/img5.jpg";
import Image6 from "./../images/img6.jpg";
import Image7 from "./../images/img7.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CarouselComponent = () => {
    return (
        <Carousel dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000}>
            <div className="img-carousel">
                <LazyLoadImage src={Image1} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image2} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image3} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image4} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image5} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image6} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image7} alt="Image Alt" />
            </div>
            {/* <div className="img-carousel">
                <img src="images/img8.jpg" />
            </div> */}
            {/* <div className="img-carousel">
                <img src="images/img9v2-sm.jpg" />
            </div> */}

        </Carousel>
    );
}

export default CarouselComponent;