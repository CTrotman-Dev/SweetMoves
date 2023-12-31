import React from "react";
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import Seo from "../components/Seo";

import Image1 from "./../images/img1.jpg";
import Image2 from "./../images/img2.jpg";
import Image3 from "./../images/img3.jpg";
import Image4 from "./../images/img4.jpg";
import Image5 from "./../images/img5.jpg";
import Image6 from "./../images/img6.jpg";
import Image7 from "./../images/img7.jpg";
import Image9 from "./../images/img9v2-sm.jpg";
import Image16 from "./../images/img16.jpg";
import Image17 from "./../images/img17.jpg";
import Image18 from "./../images/img18.jpg";
import Image19 from "./../images/img19.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Services = () => {
    const metaData = [
        {
            name: "keywords",
            content: "services, removals, home, office, packing, unpacking, assembly,Dismantling, reassembly, furniture, loading, un-loading, cleaning, man and van, van",
        },
    ];
    return (
        <div>
            <Seo
                title="SweetMoves Services"
                description="The Services page for SweetMoves which lists and explains all services provided."
                meta={metaData} />
            <TitleBanner text="Services" />

            <div className="row service-content">
                <div className="col-lg-6 m-0 p-0 services-section">

                    <p className="service-details">At SweetMoves, we offer a range of services to make your moving experience as smooth and stress-free as possible. Whether you are moving house, office, or just need some extra storage space, we have the solution for you. Here are some of the services we provide:</p>
                    <ul className="service-list">
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
                        {/* <li>
                            Dismantling and reassembly of furniture
                        </li> */}
                        <li>
                            Loading and unloading of vehicles
                        </li>
                        <li>
                            Clean-up
                        </li>
                    </ul>
                    <p className="service-details">View more information about our services below.</p>
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image1} alt="Image Alt" />
                    {/* <img src="images/img1.jpg" alt="hero-image" className="service-img"/> */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image2} alt="Image Alt" />
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="House moves" />
                    <div className="services-section">
                        <div className="col-12">
                            <p className="service-details">We have several modern and well-equipped vehicles, and a team of friendly and professional movers who will take care of your belongings with care and respect. We can also help you with packing and unpacking, furniture assembly, dismantling and reassembly of furniture, loading and unloading of vehicles, and clean-up.</p>
                        </div>
                    </div>

                    {/* We can handle a range of property from Studio Flats up to Four bed Houses.  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="Office moves" />
                    <div className="services-section">
                        <div className="col-12">
                            <p className="service-details">We understand that moving office can be a daunting and disruptive task. That’s why we offer a fast and efficient service that minimizes the downtime and hassle for your business. We can move your office furniture, equipment, files, and documents safely and securely. We can also help you with packing and unpacking, furniture assembly, dismantling and reassembly of furniture, loading and unloading of vehicles, and clean-up.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image4} alt="Image Alt" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image17} alt="Image Alt" />
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="Storage" />
                    <div className="services-section">
                        <div className="col-12">
                            <p className="service-details">If you need some extra space to store your belongings temporarily or long-term, we have the solution for you. We offer secure and affordable storage units in various sizes to suit your needs. You can access your storage unit anytime you want, and we can also arrange delivery and collection of your items if needed.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="Packing and unpacking" />
                    <div className="services-section">
                        <div className="col-12">
                            <p className="service-details">Packing and unpacking can be one of the most tedious and time-consuming parts of moving. That’s why we offer a full or partial packing and unpacking service to make your life easier. We can supply all the necessary packing materials, such as boxes, tape, bubble wrap, and labels. We can also pack your items carefully and efficiently, ensuring that they are well-protected during transit. And we can unpack them for you at your new location, placing them where you want them.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image18} alt="Image Alt" />
                </div>
            </div>
            {/* <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image6} alt="Image Alt" />
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="Furniture assembly" />
                    <p className="service-details">If you have bought new furniture or need to assemble existing furniture after moving, we can help you with that too. We have the tools and skills to assemble any type of furniture quickly and correctly. We can also help you with dismantling and reassembly of furniture if needed.</p>
                </div>
            </div> */}
            <div className="row">

                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image19} alt="Image Alt" />
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="Dismantling and reassembly of furniture" />
                    <div className="services-section">
                        <div className="col-12">
                            <p className="service-details">Sometimes, furniture is too big or bulky to fit through doors or stairs. In that case, we can help you with dismantling and reassembly of furniture. We can take apart your furniture carefully and safely, making sure that all the parts are labeled and organized. And we can put them back together at your new location, restoring them to their original condition.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="Loading and unloading of vehicles" />
                    <div className="services-section">
                        <div className="col-12">
                            <p className="service-details">Loading and unloading of vehicles can be a physically demanding and risky task. We have the equipment and expertise to load and unload your items safely and efficiently, avoiding any damage or injury. We can also help you with arranging the items in the vehicle to maximize the space and stability.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <LazyLoadImage className="service-img" src={Image16} alt="Image Alt" />
                </div>

            </div>
            <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    {/* <img src="images/img9v2-sm.jpg" alt="hero-image" className="service-img"/> */}
                    <LazyLoadImage className="service-img" src={Image9} alt="Image Alt" />
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <TitleBanner text="Clean-up" />
                    <div className="services-section">
                        <div className="col-12">
                            <p className="service-details">Moving can leave behind a lot of mess and clutter. That’s why we offer a clean-up service to make your moving more pleasant. We can clean up your old or new location after moving, leaving it spotless and tidy.</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
            <div className="col-lg-4"></div>
            <div className="services-section col-lg-4">
                <p className="mt-4 mx-2">If you are interested in any of our services, please contact us today for a free quote. </p>
                <p className="mt-4 mx-2">We are happy to answer any questions you may have and tailor our services to your specific needs.</p>
                <p className="mt-4 mx-2">
                    To learn more about our services or to schedule a free consultation, please contact us today.
                </p>
                <Link className="btn btn-lg btn-about" to={"/contact"}>
                    Contact Us
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Services;