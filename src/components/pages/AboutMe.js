import React from 'react';
import profilePic from '../../../src/pics/Derpy_kitty.jpg';

export default function AboutMe() {
    return (
        <div className="sectionContainer">
            <h1 id="about-me-title">About Me</h1>
            <img id="about-me-profile-pic" src={profilePic} alt="profile pic" />
            <p id="about-me-paragraph">
                My name is Eric Wang and I am a full-stack web developer. I have learned how to program using JavaScript and its related technologies, such as Express, MongoDB, and Node. During my time in UC Berkeley's web development boot camp, I have published quite a few projects in my GitHub repository, which can be found through the link in the footer labeled 'GitHub'. You can also view samples from my portfolio, my contact information, and my resume by clicking on the corresponding header options. I hope you enjoy looking at my projects, and please feel free to submit a message if you have any questions for me.
            </p>
        </div>
    );
}
