import { React, useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page from refreshing
    }

    const handleMouseEnterAll = (e) => {
        if (e.target.name === 'Name') {
            document.querySelector('#name-empty-notif').classList.add('hiddenUntilNeeded');
        } else if (e.target.name === 'Email') {
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
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    placeholder="Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveNotEmail}
                ></input>
                <p id="name-empty-notif" className="hiddenUntilNeeded">Please enter a name.</p>
                <label>Email:</label>
                <input
                    type="text"
                    required
                    placeholder="Email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveEmail}
                >
                </input>
                <p id="email-empty-or-invalid-notif" className="hiddenUntilNeeded"></p>
                <label>Message:</label>
                <textarea
                    placeholder="Message"
                    name="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onMouseEnter={handleMouseEnterAll}
                    onMouseLeave={handleMouseLeaveNotEmail}
                >
                </textarea>
                <p id="message-empty-notif" className="hiddenUntilNeeded">Please enter a message.</p>
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
