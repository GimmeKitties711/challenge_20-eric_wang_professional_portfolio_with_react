import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <Link to="../../../src/Resume-Eric_Wang.pdf" target="_blank" download>
                <Button className="downloadBtn">Download my resume</Button>
            </Link>
            <h3>Front-end skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>responsive design</li>
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
        </div>
    );
}
