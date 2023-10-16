import React from "react";


function CardDetails(props) {
    return (
        
        <div className="fb-post-container">
            <iframe src={props.url} title="fb-posts" height={props.height} width={props.width} className="fb-post" ></iframe>
            
        </div>
        
    );
}

export default CardDetails;