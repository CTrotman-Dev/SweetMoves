import React from "react";
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import MyMap from "../components/MyMap";
import SocialIconsDetailed from "../components/SocialIconsDetailed";
import Seo from "../components/Seo";

const About = () => {
    const metaData = [
        {
          name: "keywords",
          content: "about,services, removals, home, office, packing, unpacking, assembly,Dismantling, reassembly, furniture, loading, un-loading, cleaning, man and van, van",
        },
      ];
    return (
        <div className="row">
                    <Seo
                title="SweetMoves About Us"
                description="The About page for SweetMoves which lists and explains all services provided."
                meta={metaData} />
            <TitleBanner text="About Us" />
            <div className="col-md-6">
                <div className="about-content txt-left">
                    {/* <h1>SweetMoves: Making your move a sweet success</h1> */}
                    {/* <h1>SweetMoves: Moving made sweet and easy, with a smile.</h1>  */}
                    <p>
                    Welcome to SweetMoves, the Cardiff based Removal company that operates across the UK, offering home and office removals, storage, and packaging services.
                    </p>
                    <p>
                    Whether you are moving across the street or across the country, we are here to make your move as sweet as possible. We have several years of experience in the moving industry, and we pride ourselves on our professionalism, reliability, and affordability.
                    </p>
                    <p>
                        We have several modern vehicles, a team of trained and friendly staff, and a range of flexible options to suit your needs and budget. We also provide free quotes, insurance cover, and customer support throughout your move. At SweetMoves, we understand that moving can be stressful and time-consuming, but we are here to take care of everything for you.
                    </p>
                    <p>
                        From packing your belongings with care and efficiency, to transporting them safely and securely, to unpacking and setting them up at your new location, we will handle every aspect of your move. You can trust us with your stuff, because we treat it like our own. We also offer storage solutions for those who need some extra space or time before or after their move.
                    </p>
                    <p>
                    We offer secure and affordable storage units in various sizes to suit your needs. You can access your storage unit anytime you want, and we can also arrange delivery and collection of your items if needed. We also offer packaging materials and services for those who want to pack their own things or need some help with it. We have boxes, bubble wrap, tape, labels, and everything else you might need to pack your items properly. We can also provide professional packing assistance if you prefer to leave it to the experts.
                    </p>
                    <p>
                    No matter what your moving needs are, SweetMoves has you covered. We are the sweet spot for all your moving needs. Contact us today to get a free quote and book your move with us.
                    </p>
                    <h3>
                        <Link className="btn btn-lg btn-about" to={"/contact"}>
                            Get a Free Quote!
                        </Link>

                    </h3>
                    <div className="col-md-6">
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

                    </div>
                    <div className="col-md-6">
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
                        To learn more about our services or to schedule a free consultation, please contact us today.
                    </div>



                    <h3>
                        <Link className="btn btn-lg btn-about" to={"/services"}>
                            See our Services
                        </Link>

                    </h3>
                </div>
            </div>
            <div className="col-md-6">
                {/* <SocialIcons /> */}
                <div className="contact-page">
                    <SocialIconsDetailed />
                </div>
                <MyMap />

                {/* <CarouselComponent /> */}
            </div>
        </div>
    );
}

export default About;