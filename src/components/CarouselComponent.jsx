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

// import Image8 from "./../images/img8.jpg";
// import Image9 from "./../images/img9v2-sm.jpg";
// import Image10 from "./../images/img10.jpg";
// import Image11 from "./../images/img11.jpg";
// import Image12 from "./../images/img12.jpg";

// import Image13 from "./../images/img13.jpg";
// import Image14 from "./../images/img14.jpg";
// import Image15 from "./../images/img15.jpg";
// import Image16 from "./../images/img16.jpg";
import Image8 from "./../images/new1.jpg";
import Image9 from "./../images/new2.jpg";
import Image10 from "./../images/new3.jpg";
// import Image11 from "./../images/new4.jpg";
import Image12 from "./../images/new5.jpg";
import Image14 from "./../images/new6.jpg";
import Image15 from "./../images/new9.jpg";
// import Image16 from "./../images/new8.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

const CarouselComponent = () => {
    return (
        <Carousel dynamicHeight={false} centerMode={false} showThumbs={false} showArrows={true} autoPlay={true} infiniteLoop={true} interval={5000}>
             
            <div className="img-carousel">
                <LazyLoadImage src={Image9} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image8} alt="Image Alt" />
            </div>
            <div className="img-carousel">
                <LazyLoadImage src={Image10} alt="Image Alt" />
            </div>
            {/* <div className="img-carousel">
                <LazyLoadImage src={Image11} alt="Image Alt" />
            </div> */}
            <div className="img-carousel">
                <LazyLoadImage src={Image12} alt="Image Alt" />
            </div>
            
            <div className="img-carousel">
                <LazyLoadImage src={Image14} alt="Image Alt" />
            </div>
             <div className="img-carousel">
                <LazyLoadImage src={Image15} alt="Image Alt" />
            </div>
           {/* <div className="img-carousel">
                <LazyLoadImage src={Image16} alt="Image Alt" />
            </div> */}
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

        </Carousel>
    );
}

export default CarouselComponent;