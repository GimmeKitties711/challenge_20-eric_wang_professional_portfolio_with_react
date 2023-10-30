import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../../../src/Resume-Eric_Wang.pdf';

export default function Resume() {
    return (
        <div className="sectionContainer">
            <h1>Resume</h1>
            <Link to={resume} target="_blank" download="Resume-Eric_Wang">
                <Button className="downloadBtn">Download my resume</Button>
            </Link>
            <h3>Front-end skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end skills</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            <h3>General skills</h3>
            <ul>
                <li>Asking questions</li>
                <li>Documentation</li>
                <li>Proofreading</li>
                <li>Teamwork</li>
                <li>Testing</li>
                <li>Troubleshooting</li>
                <li>Writing comments</li>
            </ul>
        </div>
    );
}

// source for how to create a file download button in React: https://stackoverflow.com/questions/55313748/download-file-by-clicking-a-button-in-reactjs
