import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import CarouselComponent from "../components/CarouselComponent";
import TitleBanner from "../components/TitleBanner";

const About = () => {
    return (
        <div className="row">
            <TitleBanner text="About" />
            <div className="about-content col-md-6">
                <h1>
                    About Us
                </h1>
                <p> SweetMoves is a family-run home removals company that operates out of Cardiff. We offer a wide range of services, including house moves, office moves, and storage.
                </p>
                <p>
                We believe that moving should be a positive experience, and we're committed to making sure that our customers are happy with our services. We offer 24/7 service, so we can accommodate your schedule. And we offer an additional fee for moves that take place between 21:00 and 06:00.
                </p>
                <p>
                We're confident that we can provide you with the best possible moving experience. So please contact us today to schedule a free consultation.
                </p>
                <p>
                SweetMoves was founded in 2001 by [owner's name] and his wife. They started the company because they wanted to help people move their belongings with ease and peace of mind.
                </p>
                <p>
                Over the past 20 years, SweetMoves has grown to become one of the leading home removals companies in the area. We have a team of experienced and professional movers who are dedicated to providing our customers with the best possible service.
                </p>
                <h3>Our Values</h3>
<p>
At SweetMoves, we believe in the following values:
</p>
<ul>
    <li>
    Excellence: We strive to provide our customers with the highest quality of service.
    </li>
    <li>
    Integrity: We are honest and trustworthy, and we always put our customers first.
    </li>
    <li>
    Teamwork: We work together as a team to ensure that our customers are satisfied.
    </li>
    <li>
    Communication: We communicate effectively with our customers throughout the moving process.
    </li>
</ul>


<h3>Our Services</h3>
<ul>
    <li>
    House moves
    </li>
    <li>
    Office moves
        </li>
        <li>
        Storage
        </li>
        <li>
        Packing and unpacking
        </li>
        <li>
        Furniture assembly
        </li>
        <li>
        Dismantling and reassembly of furniture
        </li>
        <li>
        Loading and unloading of vehicles
        </li>
        <li>
        Clean-up
        </li>

</ul>
                <h3>
                    <Link className="btn btn-lg btn-about" to={"/contact"}>
                    To learn more about our services or to schedule a free consultation, please contact us today.
                    </Link>

                </h3>

            </div>
            <div className="col-md-6">
                {/* <MyMap /> */}
                <CarouselComponent />
            </div>
        </div>
    );
}

export default About;