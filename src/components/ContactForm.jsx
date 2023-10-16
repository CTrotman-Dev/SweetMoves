import React, { useState, useEffect } from "react";


const ContactForm = (props) => {
    const [show, setShow] = useState(true);
 
    useEffect(() => {
        submitFormHook();
     }, []); 
 
    function submitFormHook(){
    var form = document.getElementById('customForm');
    window.Pageclip.form(form, {
      onSubmit: function (event) { },
      onResponse: function (error, response) { },
      successTemplate: '<span>Thanks for the message!</span>'
    });
}

    return (
        <div className="contact-card">
        
        
            <form id="customForm" action="https://send.pageclip.co/cI8r293LxDgRQSqp8QiwmmUWOV547ASr/Contact_Us" className="pageclip-form contact-form" method="post">

                <input type="text" placeholder="Full name" name="full_name" required />
                <input type="text" placeholder="Email" name="email" required />

                <textarea name="message" placeholder="Enter message here" rows={5} cols={50} required />


                <button onClick={() => setShow(!show)}>{show ? 'Add Extra Info' : 'Hide'}</button>
                <div className={show ? "hide" : "show"} id="dvNR">
                    <input type="text" placeholder="Contact Number" name="contact_number" />
                    <div className="row">
                        <div className="col-5">
                            <label className="pt-4 txt-right">Moving Date</label>
                        </div>
                        <div className="col-7">
                            <input className="" type="date" placeholder="Moving Date" name="move_date" />
                        </div>
                    </div>
                    <textarea name="old_Address" placeholder="Old Address" rows={5} cols={50} />
                    <textarea name="new_Address" placeholder="New Address" rows={5} cols={50} />
                    <input type="text" placeholder="Bed amount" name="bed_count" />
                    <div className="row">
                        <div className="col-6">
                            <label className="txt-right">Any garage content?</label>
                        </div>
                        <div className="col-6">
                            <input className="" type="checkbox" placeholder="contentGarage" name="content_Garage" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="txt-right">Any garden content?</label>
                        </div>
                        <div className="col-6">
                            <input className="" type="checkbox" placeholder="contentGarden" name="content_Garden" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="txt-right">Do you require a packing service?</label>
                        </div>
                        <div className="col-6">
                            <input className="" type="checkbox" placeholder="servicePacking" name="service_Packing" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="txt-right">Do you require a dismantle service?</label>
                        </div>
                        <div className="col-6">
                            <input className="" type="checkbox" placeholder="serviceDismantle" name="service_Dismantle" />
                        </div>
                    </div>
                    <input type="text" placeholder="Special Attention Items" name="special_Attention" />
                    <input type="text" placeholder="Storage length" name="storage_Count" />
                </div>
                <input type="text" name="subject" defaultValue="Customer Enquiry" className="invis" />
                <button type="submit" className="button btn-success pageclip-form__submit">
                    <span>Send Message</span>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;