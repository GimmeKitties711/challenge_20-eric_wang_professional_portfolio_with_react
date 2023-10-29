import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.imgSrc} className="thumbnail" alt={props.title}/>
            <Link to={props.repo} target="_blank" rel="noopener noreferrer">GitHub repo</Link>
            <Link to={props.deployed} target="_blank" rel="noopener noreferrer">Deployed application</Link>
        </div>
    );
}

// required props: title, imgSrc, repo, deployed
