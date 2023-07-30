import React, { useState } from "react";

const Form = (props) => {
    const [contact, setContact] = useState({
        fullname: "",
        email: "",
        contactNo: "",
        moveDate:"",
        oldAddress:"",
        newAddress:"",
        bedCount:"",
        contentGarage:"",
        contentGarden:"",
        servicePacking:"",
        serviceDismantle:"",
        specialAttention:"",
        storageCount:"",
        message: ""
    });

    function handleFormChanges(event) {
        const { value, name } = event.target;
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleSubmit(event){
        window.open("mailto:c.trotman92@gmail.com?subject=Customer%20Enquiry&body="+contact.message);
        event.preventDefault();
    }

    return (
        <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
                <input onChange={handleFormChanges} value={contact.fullname} type="text" placeholder="Full name" name="fullname" />
                <input onChange={handleFormChanges} value={contact.email} type="text" placeholder="Email" name="email" />
                <input onChange={handleFormChanges} value={contact.contactNo} type="text" placeholder="Contact Number" name="contact" />
                <input onChange={handleFormChanges} value={contact.moveDate} type="date" placeholder="Moving Date" name="moveDate" />
                <textarea onChange={handleFormChanges} value={contact.oldAddress} name="oldAdd" placeholder="Old Address" rows={5} cols={50} />
                <textarea onChange={handleFormChanges} value={contact.newAddress} name="newAdd" placeholder="New Address" rows={5} cols={50} />
                <input onChange={handleFormChanges} value={contact.bedCount} type="text" placeholder="Bed amount" name="bedCount" />
                <div className="row">
                    <label className="w-50">Any garden content?</label>
                    <input className="w-50" onChange={handleFormChanges} value={contact.contentGarage} type="checkbox" placeholder="contentGarage" name="contentGarage" />
                </div>
                <div className="row">
                    <label className="w-50">Any garden content?</label>
                    <input className="w-50" onChange={handleFormChanges} value={contact.contentGarden} type="checkbox" placeholder="contentGarden" name="contentGarden" />
                </div>
                <div className="row">
                    <label className="w-50">Do you require a packing service?</label>
                    <input className="w-50" onChange={handleFormChanges} value={contact.servicePacking} type="checkbox" placeholder="servicePacking" name="servicePacking" />
                </div>
                <div className="row">
                    <label className="w-50">Do you require a dismantle service?</label>
                    <input className="w-50" onChange={handleFormChanges} value={contact.serviceDismantle} type="checkbox" placeholder="serviceDismantle" name="serviceDismantle" />
                </div>
                <input onChange={handleFormChanges} value={contact.specialAttention} type="text" placeholder="Special Attention Items" name="specialAttention" />
                <input onChange={handleFormChanges} value={contact.storageCount} type="text" placeholder="Storage length" name="storageCount" />

                <textarea onChange={handleFormChanges} value={contact.message} name="message" placeholder="Enter message here" rows={5} cols={50} />
                <button type="submit" className="contact-btn btn btn-lg">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Form;