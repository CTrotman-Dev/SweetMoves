import React, {useState} from "react";

import NameValueList from "./NameValueList";
import NameValueDetails from "./NameValueDetails";

const NameValueCell = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick(){
        setIsVisible(!isVisible);
    }

    
    return (

        <div className="row row-container">
            <h1 className="heading-text">
                {props.company}
            </h1>
            <div className="col-md-6 left-col">

                <h3>
                    {props.role}
                </h3>
                <p>
                    {props.length}
                </p>

            </div>
            <div className="col-md-6 right-col language-section" onClick={handleClick}>
           {isVisible ? 
                <ul className="two-col">
                    {props.languages.map((x, i) =>
                    <NameValueList key={x + i} title={x} content={x} />
                    )}
                </ul> :
                <ul className="two-col">
                    {props.languages.slice(0,3).map((x, i) =>
                    <NameValueList key={x + i} title={x} content={x} />
                    )}
                    <li>View All........</li>
                </ul>
           }
            </div>
            

                {props.info.map((x, i) =>
                    <NameValueDetails key={x[0] + i} title={x[0]} content={x[1]} />
                )}

           
        </div>
    );
}

export default NameValueCell;