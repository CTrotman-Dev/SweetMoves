import React from "react";
import Image from "./../images/new-logo-sm.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = () => {
    return (
        <div className="logo">
            {/* <img className="logo-img" src="images/new-logo-sm.jpg" alt="logo for SweetMoves" /> */}
            <LazyLoadImage className="logo-img" src={Image} alt="logo for SweetMoves" />
        </div>
    );
}

export default Logo;