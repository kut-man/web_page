import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pdwvf9a', 'template_41ht47e', e.target, 'user_gbguGQSWNN1nYTouV1Kx3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <form className="contact" onSubmit={sendEmail}>
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Let's Talk </div>
            <div>
                <div className="contact-form">

                    <h6 style={{ display: "inline-block", width: "54.5%" }}>First Name</h6>

                    <h6 style={{ display: "inline-block" }}>Last Name</h6>

                    <input className='first-name-input' style={{ width: "250px" }} name='from_name'></input>

                    <input className='last-name-input' style={{ width: "250px", float: "right" }} name='from_surname'></input>

                    <h6>Email</h6>

                    <input className='email-input' style={{ width: "100%" }} name='from_email'></input>

                    <h6>Subject</h6>

                    <input className='subject-input' style={{ width: "100%" }} name='subject'></input>

                    <h6>Message</h6>

                    <textarea className='message-text' style={{ width: "100%", height: "100px" }} name='message'></textarea>

                    <input type="submit" value="Send" />

                </div>
            </div>
        </form>
    )
}
