import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="App-footer">
            <ul className="notResume">
                <li>
                    <Link to="https://github.com/GimmeKitties711" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/eric-wang-41312b54/" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                </li>
                <li>
                    <Link to="https://www.youtube.com/channel/UC94cthBuJW6dNJE-gZsjx5Q" className="nav-link" target="_blank" rel="noopener noreferrer">YouTube</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer; // always showing on page
