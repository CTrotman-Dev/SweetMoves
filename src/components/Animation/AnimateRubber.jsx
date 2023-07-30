import React from "react";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const AnimateRubber = (props) => {

    return (

        <AnimationOnScroll initiallyVisible={true} delay={500} animateIn="animate__rubberBand">
           {props.children}
        </AnimationOnScroll>
    );
}

export default AnimateRubber;