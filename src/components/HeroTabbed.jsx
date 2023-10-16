import React, { useState } from "react";
import { Link } from "react-router-dom";

import FBPost from "./FBPost"

import Image1 from "./../images/new3.jpg";
import Image2 from "./../images/new2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroTabbed = (props) => {
    const [img1, setImg1] = useState(true);
    const [img2, setImg2] = useState(false);
    const [img3, setImg3] = useState(false);

    function showImage(img) {
        switch (img) {
            case 1:
                setImg1(true);
                setImg2(false);
                setImg3(false);
                break;
            case 2:
                setImg1(false);
                setImg2(true);
                setImg3(false);
                break;
            case 3:
                setImg1(false);
                setImg2(false);
                setImg3(true);
                break;
            default:
                setImg1(true);
                setImg2(false);
                setImg3(false);
                break;
        }
    }
    return (
        <div className="hero-tabbed-container">
            <div className="row">
                <div className="hero-tab-menu col-md-4">
                   
                <div onClick={() => showImage(1)} className={img1 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            Services
                        </h3>

                    </div>
                   <div onClick={() => showImage(2)} className={img2 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            About 
                        </h3>

                    </div>
                    <div onClick={() => showImage(3)} className={img3 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            Reviews
                        </h3>

                    </div>

                </div>
                <div className="hero-tab-image col-md-8">
                    {img1 &&
                        <div className="detail-tab">
                            <h1>Removals</h1>
                            <LazyLoadImage src={Image1} alt="Image Alt" />
                            <p>At SweetMoves, we provide a range of Removal services.</p>
                            <p>
                                Do you need a hand moving home or Office? 
                            </p>
                            {/* <Link className="btn btn-lg btn-cta" to={"/SweetMoves/contact"} >
                                Click here
                            </Link> */}
                            <Link className="btn btn-lg btn-cta" to={"/services"} >
                                View All Services
                            </Link>
                        </div>
                    }
                    {img2 &&
                        <div className="detail-tab">
                            <h1>SweetMoves</h1>
                            <LazyLoadImage src={Image2} alt="Image Alt" />
                            <p>
                                We are a Cardiff based Removal company that operates across the UK.</p>
                                <p>Offering home and office removals, storage, and packaging services.
                            </p>
                            {/* <Link className="btn btn-lg btn-cta" to={"/SweetMoves/about"} >
                                Click here
                            </Link> */}
                            <Link className="btn btn-lg btn-cta" to={"/about"} >
                                Learn more
                            </Link>
                        </div>
                    }
                    {img3 &&
                        <div className="detail-tab">
                            <h1>Customer feedback</h1>
                            <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsue.johns.7374%2Fposts%2Fpfbid01MqMa7eRA5TLG85XfCYrKuPQemz89Wx3wuVDFrMf5EeDejDcQqRAtUMVC5wLnnXYl&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeniewkcss%2Fposts%2Fpfbid0qpuLQ2AREGS8iCrB9qxrZTjFTBoS4WKJqrv9CMHfHaVRDq7u9c5fMgU2WQRRZZral&show_text=true&width=500" />
                            <p>
                                Take a looking at more of our reviews.
                            </p>
                            {/* <Link className="btn btn-lg btn-cta" to={"/SweetMoves/clients"} >
                                Click here
                            </Link> */}
                            <Link className="btn btn-lg btn-cta" to={"/reviews"} >
                                See All Reviews
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default HeroTabbed;