import React from "react";

import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

const AnimateScroll = (props) => {

    return (
        <Reveal effect="fadeInUp" effectOut="fadeOutLeft">
            {props.children}
        </Reveal>
    );
}

export default AnimateScroll;