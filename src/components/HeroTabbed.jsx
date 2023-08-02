import React, { useState } from "react";
import { Link } from "react-router-dom";

import FBPost from "./FBPost"

const HeroTabbed = (props) => {
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(true);
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
                    <div onClick={() => showImage(2)} className={img2 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            About 
                        </h3>

                    </div>
                    <div onClick={() => showImage(1)} className={img1 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            Services
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
                            <img src="images/van2.jpg" alt="hero image" />
                            <p>
                                Do you need a hand moving home? Get in contact today.
                            </p>
                            {/* <a className="btn btn-lg btn-cta" href="https://play.google.com/store/apps/details?id=com.CDT.Eggscape" >
                                Click here
                            </a> */}
                            <Link className="btn btn-lg btn-cta" to={"/SweetMoves/contact"} >
                                Click here
                            </Link>
                        </div>
                    }
                    {img2 &&
                        <div className="detail-tab">
                            <h1>SweetMoves</h1>
                            <img src="images/van1.jpg" alt="hero image" />
                            <p>
                                We are a family run removals company. Contact us today.
                            </p>
                            {/* <a className="btn btn-lg btn-cta" href="https://ctrotman-dev.github.io/WoodmansDairy-react/" >
                                Click here
                            </a> */}
                            <Link className="btn btn-lg btn-cta" to={"/SweetMoves/about"} >
                                Click here
                            </Link>
                        </div>
                    }
                    {img3 &&
                        <div className="detail-tab">
                            <h1>Customer feedback</h1>
                            {/* <img src="https://cdn.pixabay.com/photo/2017/06/14/16/20/network-2402637__480.jpg" alt="hero image" /> */}
                            <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsue.johns.7374%2Fposts%2Fpfbid01MqMa7eRA5TLG85XfCYrKuPQemz89Wx3wuVDFrMf5EeDejDcQqRAtUMVC5wLnnXYl&show_text=true&width=500" />
        <FBPost height="200px" width="500px" url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeniewkcss%2Fposts%2Fpfbid0qpuLQ2AREGS8iCrB9qxrZTjFTBoS4WKJqrv9CMHfHaVRDq7u9c5fMgU2WQRRZZral&show_text=true&width=500" />
                            <p>
                                Looking at all of our reviews.
                            </p>
                            <Link className="btn btn-lg btn-cta" to={"/SweetMoves/clients"} >
                                Click here
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default HeroTabbed;