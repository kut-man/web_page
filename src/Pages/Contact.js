import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pdwvf9a', 'template_e9pba1p', e.target, 'user_gbguGQSWNN1nYTouV1Kx3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert("Message has been sent. Thank you!")
    };

    return (
        <form className="contact" onSubmit={sendEmail}>
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Let's Talk </div>
            <div>
                <div className="contact-form">
                    <div className="name-container">
                        <div>
                            <h6>First Name</h6>
                            <input className='first-name-input' name='from_name'></input>
                        </div>

                        <div>
                            <h6>Last Name</h6>
                            <input className='last-name-input' name='from_surname'></input>
                        </div>
                    </div>

                    <h6>Email</h6>
                    <input required type='email' className='email-input' name='from_email'></input>

                    <h6>Subject</h6>
                    <input required type='text' className='subject-input' name='subject'></input>

                    <h6>Message</h6>
                    <textarea required type='text' className='message-text' name='message'></textarea>

                    <input className='contact-form-submit-input' type="submit" value="Send" />
                   
                </div>
            </div>
        </form>
    )
}
