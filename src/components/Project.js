import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
    return (
        <div className="projectContainer">
            <p className="projectElem projectTitle">{props.title}</p>
            <img src={props.imgSrc} className="thumbnail" alt={props.title}/>
            <Link to={props.repo} className="projectElem nav-link" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
            <Link to={props.deployed} className="projectElem nav-link" target="_blank" rel="noopener noreferrer">Deployed application</Link>
        </div>
    );
}

// required props: title, imgSrc, repo, deployed
