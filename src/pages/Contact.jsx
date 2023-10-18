import React from "react";
import ContactForm from "../components/ContactForm";
import TitleBanner from "../components/TitleBanner";
import SocialIconsDetailed from "../components/SocialIconsDetailed";
import Seo from "../components/Seo";

const Contact = () => {
    const metaData = [
        {
            name: "keywords",
            content: "contact,services, removals, home, office, packing, unpacking, assembly,Dismantling, reassembly, furniture, loading, un-loading, cleaning, man and van, van",
        },
    ];
    return (
        <div>
            <Seo
                title="SweetMoves Contact"
                description="The Contact page for SweetMoves which lists and explains all services provided."
                meta={metaData} />
            <TitleBanner text="Contact" />

            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-page">
                        <div className="SocialIconsDetailed">
                            <div className="row">
                                <SocialIconsDetailed />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="contact-page">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;