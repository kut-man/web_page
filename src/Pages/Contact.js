import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';

const style = {
    border: '1px solid black',
    borderRadius: '100px',
    background: 'transparent',
    padding: "5px 30px 5px 30px"
}

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
                    <input className='email-input' name='from_email'></input>

                    <h6>Subject</h6>
                    <input className='subject-input' name='subject'></input>

                    <h6>Message</h6>
                    <textarea className='message-text' name='message'></textarea>

                    <input style={style} type="submit" value="Send" />

                </div>
            </div>
        </form>
    )
}
