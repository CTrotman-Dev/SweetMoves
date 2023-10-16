import React from "react";
import { Link } from "react-router-dom";
import TitleBanner from "./TitleBanner";
//import Image from "./../images/img9v2-sm.jpg";
import Image from "./../images/new2.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import CarouselComponent from "./CarouselComponent";

const HeroImage = (props) => {
    return (
        <div className="row hero-container">
            <div className="col-xl-6 m-0 p-0">
                <TitleBanner text="Making your move a sweet success" />
                <div className="hero-text-container row">

                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        {/* <h1>SweetMoves: Moving made sweet and easy, with a smile.</h1> */}
                        <p>
                            Welcome to SweetMoves, the Cardiff based Removal company that operates across the UK, offering home and office removals, storage, and packaging services.
                        </p>
                        <p>
                            Whether you are moving across the street or across the country, we are here to make your move as sweet as possible. We have several years of experience in the moving industry, and we pride ourselves on our professionalism, reliability, and affordability.
                        </p>

                        <p>
                            No matter what your moving needs are, SweetMoves has you covered. We are the sweet spot for all your moving needs. Contact us today to get a free quote and book your move with us.
                            
                        </p>
                        {/* SweetMoves: The sweetest way to move your home or business. */}
                        <Link className="btn btn-about btn-lg btn-cta" to={"/contact"} >
                            Get a Free Enquiry!
                        </Link>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
            <div className="col-xl-6 m-0 p-0">
                <LazyLoadImage className="hero-img" src={Image} alt="Hero Image Alt" />
                {/* <div className=" hero-img">
                <CarouselComponent />
                </div> */}
            </div>





        </div>
    );
}

export default HeroImage;