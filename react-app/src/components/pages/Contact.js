import { React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'

/*
sources that helped me write this code:

1. How to write forms in React: https://www.youtube.com/watch?v=IkMND33x0qQ
2. Submit events in React: https://www.youtube.com/watch?v=pJiRj02PkJQ
3. How to use emailjs to send an email from a contact form: https://www.youtube.com/watch?v=bMq2riFCF90
4. emailjs documentation: https://www.emailjs.com/docs/examples/reactjs/
*/

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const resetDefaultValues = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page from refreshing
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.querySelector('#email-empty-or-invalid-notif').classList.add('warning');
            return;
        }

        emailjs.sendForm("service_z5t00tf", "template_tu38g3b", form.current, "M0UpWdHRA02mFSk35")
        .then((result) => {
            console.log(result.text);
            console.log("Message sent successfully.");
        }, (error) => {
            console.log(error.text);
        });

        resetDefaultValues();
    }

    const handleMouseEnterAll = (e) => {
        if (e.target.name === 'Name') {
            document.querySelector('#name-empty-notif').classList.add('hiddenUntilNeeded');
        } else if (e.target.name === 'Email') {
            document.querySelector('#email-empty-or-invalid-notif').classList.remove('warning');
            document.querySelector('#email-empty-or-invalid-notif').classList.add('hiddenUntilNeeded');
        } else if (e.target.name === 'Message') {
            document.querySelector('#message-empty-notif').classList.add('hiddenUntilNeeded');
        }
    }

    const handleMouseLeaveNotEmail = (e) => {
        if (e.target.value === '') {
            if (e.target.name === 'Name') {
                document.querySelector('#name-empty-notif').classList.remove('hiddenUntilNeeded');
            } else if (e.target.name === 'Message') {
                document.querySelector('#message-empty-notif').classList.remove('hiddenUntilNeeded');
            }
        }
    }

    const handleMouseLeaveEmail = (e) => {
        if (e.target.value === '') {
            document.querySelector('#email-empty-or-invalid-notif').textContent = 'Please enter an email address.';
            document.querySelector('#email-empty-or-invalid-notif').classList.remove('hiddenUntilNeeded');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(e.target.value)) {
                document.querySelector('#email-empty-or-invalid-notif').textContent = 'Please enter a valid email address.';
                document.querySelector('#email-empty-or-invalid-notif').classList.remove('hiddenUntilNeeded');
            }
        }
    }

    return (
        <div className="formContainer">
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
                    onChange={(e) => setName(e.target.value)}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveNotEmail}
                ></input>
                <p id="name-empty-notif" className="hiddenUntilNeeded">Please enter a name.</p>
                <label>Email:</label>
                <input
                    type="email"
                    required
                    placeholder="Email"
                    name="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveEmail}
                >
                </input>
                <p id="email-empty-or-invalid-notif" className="hiddenUntilNeeded"></p>
                <label>Message:</label>
                <textarea
                    rows="4"
                    placeholder="Message"
                    name="Message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveNotEmail}
                >
                </textarea>
                <p id="message-empty-notif" className="hiddenUntilNeeded">Please enter a message.</p>
                <input
                    type="submit"
                    value="Send"
                    id="submitBtn"
                />
            </form>
        </div>
    );
}
