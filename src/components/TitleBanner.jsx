import React from "react";

const TitleBanner = (props) => {

    return (
        <div className="title-banner">
            <h1 className="title-text">
                {props.text}
            </h1>

        </div>
    );
}

export default TitleBanner;