import React from "react";

import Form from "../components/Form";
import TitleBanner from "../components/TitleBanner";

const Contact = () => {
    return (
        <div>
            <TitleBanner text="Contact" />

            <div className="row">
                <div className="col-md-6">
                    <p>
                        Please use the form to send an email (NOTE: this will open default email app.)
                    </p>
                    <Form />
                </div>
              
            </div>


        </div>
    );
}

export default Contact;