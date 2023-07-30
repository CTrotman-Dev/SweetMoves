import React, { useState, useEffect } from "react";


import NameValueCell from "./NameValueCell";


import AnimateInOut from "../Animation/AnimateInOut";

const NameValueTable = (props) => {

    return (
        <div>
            {props.data.map((x, i) =>
                <AnimateInOut key={i} visible="true" delay="0" in="" out="">
                    <NameValueCell 
                        company={x.company}
                        role={x.role}
                        length={x.length}
                        languages={x.languages}
                        info={x.info}
                    />
                </AnimateInOut>
            )}
        </div>
    );
}

export default NameValueTable;

