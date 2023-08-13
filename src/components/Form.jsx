import React, { useState } from "react";

const Form = (props) => {

    const [show, setShow] = useState(true)

    return (
        <div className="contact-card">
            <form action="https://send.pageclip.co/E3XGNxyvpXaW8eovvBFLD6IfNEcUZSEa" className="pageclip-form contact-form" method="post">
                
                <input type="text" placeholder="Full name" name="fullname" required />
                <input type="text" placeholder="Email" name="email" required />
               
                <textarea name="message" placeholder="Enter message here" rows={5} cols={50} required />

                {show}
                <button onClick={() => setShow(!show)}>{show ? 'Add Extra Info':'Hide'}</button>
                    {show ? <div></div> :
                        <div className="not-required" id="dvNR">
                        {/* <button className="btn" onClick={() => setShow(!show)}>Hide</button> */}
                            <input type="text" placeholder="Contact Number" name="contact" />
                            <input type="date" placeholder="Moving Date" name="moveDate" />
                            <textarea name="oldAdd" placeholder="Old Address" rows={5} cols={50} />
                            <textarea name="newAdd" placeholder="New Address" rows={5} cols={50} />
                            <input type="text" placeholder="Bed amount" name="bedCount" />
                            <div className="row">
                                <label className="w-50">Any garage content?</label>
                                <input className="w-50" type="checkbox" placeholder="contentGarage" name="contentGarage" />
                            </div>
                            <div className="row">
                                <label className="w-50">Any garden content?</label>
                                <input className="w-50" type="checkbox" placeholder="contentGarden" name="contentGarden" />
                            </div>
                            <div className="row">
                                <label className="w-50">Do you require a packing service?</label>
                                <input className="w-50" type="checkbox" placeholder="servicePacking" name="servicePacking" />
                            </div>
                            <div className="row">
                                <label className="w-50">Do you require a dismantle service?</label>
                                <input className="w-50" type="checkbox" placeholder="serviceDismantle" name="serviceDismantle" />
                            </div>
                            <input type="text" placeholder="Special Attention Items" name="specialAttention" />
                            <input type="text" placeholder="Storage length" name="storageCount" />
                        </div>
                    }
                
                <input type="text" name="subject" defaultValue="Customer Enquiry" className="invis" />
                <button type="submit" className="button btn-success pageclip-form__submit">
                    <span>Send</span>
                </button>
                
            </form>
        </div>
    );
}

export default Form;