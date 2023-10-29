import React from 'react';
import { Link } from 'react-router-dom';

import challenge3 from '../../pics/challenge_3_thumbnail.png';
import challenge5 from '../../pics/challenge_5_thumbnail.png';
import challenge9 from '../../pics/challenge_9_thumbnail.png';
import project1 from '../../pics/project_1_thumbnail.png';
import project2 from '../../pics/project_2_thumbnail.png';
import project3 from '../../pics/project_3_thumbnail.png';

export default function Contact() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                <p>Password Generator</p>
                <img src={challenge3} alt="challenge 3"/>
                <Link to="https://github.com/GimmeKitties711/challenge_3-dynamic_random_password_generator" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
                <Link to="https://gimmekitties711.github.io/challenge_3-dynamic_random_password_generator/" target="_blank" rel="noopener noreferrer">Deployed application</Link>
            </div>
            <div>
                <p>Work Day Scheduler</p>
                <img src={challenge5} alt="challenge 5"/>
                <Link to="https://github.com/GimmeKitties711/challenge_5-dynamic_daily_planner" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
                <Link to="https://gimmekitties711.github.io/challenge_5-dynamic_daily_planner/" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
            </div>
            <div>
                <p>README Generator</p>
                <img src={challenge9} alt="challenge 9"/>
                <Link to="https://github.com/GimmeKitties711/challenge_9-user_informed_readme_generator" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
                <Link to="https://www.youtube.com/watch?v=K2HNEFVI21M" target="_blank" rel="noopener noreferrer">Walkthrough video</Link>
            </div>
            <div>
                <p>Kitty Quest</p>
                <img src={project1} alt="project 1"/>
                <Link to="https://github.com/xqzo/Kitty-Quiz" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
                <Link to="https://xqzo.github.io/Kitty-Quiz/" target="_blank" rel="noopener noreferrer">Deployed application</Link>
            </div>
            <div>
                <p>Fit Squad</p>
                <img src={project2} alt="project 2"/>
                <Link to="https://github.com/carlosmb001/fit_squad" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
                <Link to="https://fit-squad-805c3e11f44f.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed application</Link>
            </div>
            <div>
                <p>Code-E the Code Bot</p>
                <img src={project3} alt="project 3"/>
                <Link to="https://github.com/Cleffy/Best-Code-Bot-Ever" target="_blank" rel="noopener noreferrer">GitHub repo</Link>
                <Link to="https://best-code-bot-ever-6c020fa64dc5.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed application</Link>
            </div>
        </div>
    );
}
