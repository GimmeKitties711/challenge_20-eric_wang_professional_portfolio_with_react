import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <form name="submitCity" id="submit-city" method="post">
                <div>Name:</div>
                <input type="text" name="cityName" placeholder="Name" />
                <div>Email:</div>
                <input type="text" name="cityName" placeholder="Email" />
                <div>Message:</div>
                <input type="text" name="cityName" placeholder="Message" />
                <input type="submit" id="search-btn" value="Submit" />
            </form>
        </div>
    );
}
