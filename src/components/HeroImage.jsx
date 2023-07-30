import React from "react";

const HeroImage = (props) => {
    return (
        <div className="hero-container">
            <img src={props.imgSrc} alt="hero-image"/>

        </div>
    );
}

export default HeroImage;