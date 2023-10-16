import React from "react";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Image from "./../images/img-nobg.jpg";
import WhyUs from "./WhyUs";
import HeroTabbed from "./HeroTabbed";
import CarouselComponent from "./CarouselComponent";
const Parallax = (props) => {

  return (
//     <ParallaxProvider>
//       <ParallaxBanner
//         layers={[
//           { image: Image, speed: -20 },
//           { image: Image, speed: -10 },
//         ]}
//         className="aspect-[2/1]"
//       >
//       </ParallaxBanner>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-8xl text-white font-thin">Hello World!</h1>
// <WhyUs />
// <HeroTabbed />
// <CarouselComponent/>

//         </div>
      
//     </ParallaxProvider>
<ParallaxProvider>
<div className="App">
  <ParallaxBanner
    className="hero-banner"
    layers={[
      {
        image: 'https://source.unsplash.com/random',
        amount: 0.2,
      },
      {
        image: 'https://source.unsplash.com/random',
        amount: 0.5,
      },
    ]}
    style={{
      height: '500px',
    }}
  >
    <h1>React Scroll Parallax</h1>
  </ParallaxBanner>
</div>
</ParallaxProvider>
  );
}

export default Parallax;