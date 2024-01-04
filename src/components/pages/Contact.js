import { React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

/*
sources that helped me write this code:

1. how to write forms in React: https://www.youtube.com/watch?v=IkMND33x0qQ
2. submit events in React: https://www.youtube.com/watch?v=pJiRj02PkJQ
3. how to use EmailJS to send an email from a contact form: https://www.youtube.com/watch?v=bMq2riFCF90
4. EmailJS documentation: https://www.emailjs.com/docs/examples/reactjs/
*/

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // track the state of all three form fields

    const form = useRef();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /*
    emailRegex can be broken down as follows:

    /^             // start of string
    1. [^\s@]+     // at least one character that is not whitespace or @
    2. @           // the @ character
    3. [^\s@]+     // at least one character that is not whitespace or @
    4. \.          // the . character
    5. [^\s@]+     // at least one character that is not whitespace or @
    $/             // end of string

    source: https://regex101.com/
    */

    const resetDefaultValues = () => {
        setName('');
        setEmail('');
        setMessage('');
    } // this function is called after the form is submitted to clear the fields and hide any warning messages

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page from refreshing
        if (!emailRegex.test(email)) {
            return;
        }

        emailjs.sendForm("service_z5t00tf", "template_tu38g3b", form.current, "M0UpWdHRA02mFSk35")
        .then((result) => {
            console.log(result.text);
            console.log("Message sent successfully.");
            // console will show "OK" followed by "Message sent successfully."
        }, (error) => {
            console.log(error.text);
        });

        resetDefaultValues(); // clear form
    }

    const handleMouseEnterAll = (e) => { // mouse goes back into the fields
        if (e.target.name === 'Name') {
            document.querySelector('#name-empty-notif').classList.remove('revealed');
            document.querySelector('#name-empty-notif').classList.add('hiddenUntilNeeded');
            // hide empty name warning message
        } else if (e.target.name === 'Email') {
            document.querySelector('#email-empty-or-invalid-notif').classList.remove('revealed');
            document.querySelector('#email-empty-or-invalid-notif').classList.add('hiddenUntilNeeded');
            // hide empty/invalid email warning message
        } else if (e.target.name === 'Message') {
            document.querySelector('#message-empty-notif').classList.remove('revealed');
            document.querySelector('#message-empty-notif').classList.add('hiddenUntilNeeded');
            // hide warning message about empty message
        }
    } // for the sake of brevity, this function's name only describes what happens when the mouse enters the fields, but it is also used to hide the warning messages when the user types in the fields

    const handleMouseLeaveNotEmail = (e) => { // mouse leaves name or message fields
        if (e.target.value === '') { // if the field is empty
            if (e.target.name === 'Name') {
                document.querySelector('#name-empty-notif').classList.remove('hiddenUntilNeeded');
                document.querySelector('#name-empty-notif').classList.add('revealed');
                // reveal empty name warning message
            } else if (e.target.name === 'Message') {
                document.querySelector('#message-empty-notif').classList.remove('hiddenUntilNeeded');
                document.querySelector('#message-empty-notif').classList.add('revealed');
                // reveal warning message about empty message
            }
        }
    }

    const handleMouseLeaveEmail = (e) => { // mouse leaves the email field
        if (e.target.value === '') { // if the field is empty
            document.querySelector('#email-empty-or-invalid-notif').textContent = 'Please enter an email address.';
            document.querySelector('#email-empty-or-invalid-notif').classList.remove('hiddenUntilNeeded');
            document.querySelector('#email-empty-or-invalid-notif').classList.add('revealed');
            // reveal empty email warning message
        } else {
            if (!emailRegex.test(e.target.value)) {
                document.querySelector('#email-empty-or-invalid-notif').textContent = 'Please enter a valid email address.';
                document.querySelector('#email-empty-or-invalid-notif').classList.remove('hiddenUntilNeeded');
                document.querySelector('#email-empty-or-invalid-notif').classList.add('revealed');
                // reveal invalid email warning message
            }
        }
    }

    return (
        <div className="sectionContainer formContainer">
            <form
                ref={form}
                id="contact-form"
                onSubmit={handleSubmit}
            >
                <h1>Contact Me</h1>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    placeholder="Name"
                    name="Name"
                    id="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        handleMouseEnterAll(e);
                    }}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveNotEmail}
                ></input>
                <p id="name-empty-notif" className="warningMessage hiddenUntilNeeded">Please enter a name.</p>
                <label>Email:</label>
                <input
                    type="email"
                    required
                    placeholder="Email"
                    name="Email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        handleMouseEnterAll(e);
                    }}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveEmail}
                >
                </input>
                <p id="email-empty-or-invalid-notif" className="warningMessage hiddenUntilNeeded">Please enter an email address.</p>
                <label>Message:</label>
                <textarea
                    rows="4"
                    required
                    placeholder="Message"
                    name="Message"
                    id="message"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        handleMouseEnterAll(e);
                    }}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveNotEmail}
                >
                </textarea>
                <p id="message-empty-notif" className="warningMessage hiddenUntilNeeded">Please enter a message.</p>
                <input
                    type="submit"
                    value="Send"
                    id="submitBtn"
                />
            </form>
        </div>
    );
}
