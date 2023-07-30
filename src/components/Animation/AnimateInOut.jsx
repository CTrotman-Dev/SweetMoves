import React from "react";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const AnimateInOut = (props) => {

    return (

        <AnimationOnScroll initiallyVisible={props.visible} delay={props.delay} animateIn={props.in} animateOut={props.out}>
            {props.children}
        </AnimationOnScroll>
    );
}

export default AnimateInOut;