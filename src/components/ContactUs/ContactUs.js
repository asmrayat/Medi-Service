
import React from 'react';
import './ContactUs.css';



const ContactUs = () => {

    return (
        <div className="conUS">
            <div className="contBar ">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"><h3>Contact Us By Email </h3></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Write Your Text Here</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-lg">Send</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ContactUs;