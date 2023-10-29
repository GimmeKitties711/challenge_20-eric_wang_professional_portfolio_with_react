import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.imgSrc} alt={props.title}/>
            <Link to={props.repo} target="_blank" rel="noopener noreferrer">GitHub repo</Link>
            <Link to={props.deployed} target="_blank" rel="noopener noreferrer">Deployed application</Link>
        </div>
    );
}

// required props: title, imgSrc, repo, deployed

/*

<p>Password Generator</p>
<img src={challenge3} alt="challenge 3"/>
<Link to="https://github.com/GimmeKitties711/challenge_3-dynamic_random_password_generator" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
<Link to="https://gimmekitties711.github.io/challenge_3-dynamic_random_password_generator/" target="_blank" rel="noopener noreferrer">Deployed application</Link>

*/