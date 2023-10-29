import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="https://github.com/GimmeKitties711" target="_blank" rel="noopener noreferrer">GitHub</Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/eric-wang-41312b54/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                </li>
                <li>
                    <Link to="https://www.youtube.com/channel/UC94cthBuJW6dNJE-gZsjx5Q" target="_blank" rel="noopener noreferrer">YouTube</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer; // always showing on page
