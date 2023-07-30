import React, {useState} from "react";

const NameValueDetails = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick(){
        setIsVisible(!isVisible);
    }

    return (
        <div className="details-section" onClick={handleClick}>
            <h4 className="details-title">
                {props.title}
            </h4>
            <div className={isVisible ? "detailed-info" : "hidden-detailed-info"}>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    );
}

export default NameValueDetails;