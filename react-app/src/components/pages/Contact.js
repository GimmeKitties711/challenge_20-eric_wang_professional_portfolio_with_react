import { React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
//import { Link } from 'react-router-dom';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page from refreshing
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.querySelector('#email-empty-or-invalid-notif').classList.add('warning');
            return;
        }

        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            console.log("Message sent successfully.");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
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
