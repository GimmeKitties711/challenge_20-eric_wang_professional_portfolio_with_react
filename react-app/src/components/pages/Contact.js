import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <form name="submitMessage" id="submit-message" method="post">
                <div>Name:</div>
                <input type="text" name="name" placeholder="Name" />
                <div>Email:</div>
                <input type="text" name="email" placeholder="Email" />
                <div>Message:</div>
                <input type="text" name="message" placeholder="Message" />
                <input type="submit" id="submit-btn" value="Submit" />
            </form>
        </div>
    );
}
