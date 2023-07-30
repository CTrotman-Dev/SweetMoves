import React from "react";

import QuickLinkCard from "./QuickLinkCard";

const QuickLinks = () => {
    return (
        <div className="quick-link-container row">
            <QuickLinkCard text="See our Clients" link="/clients" imgSrc="https://images.pexels.com/photos/7875939/pexels-photo-7875939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <QuickLinkCard text="Get in touch" link="/contact" imgSrc="https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <QuickLinkCard text="Find out more" link="/about" imgSrc="https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
    );
}

export default QuickLinks;