import React from 'react';
import Project from '../Project'

import challenge6 from '../../pics/challenge_6_thumbnail.png';
import challenge11 from '../../pics/challenge_11_thumbnail.png';
import challenge21 from '../../pics/challenge_21_thumbnail.png';
import project1 from '../../pics/project_1_thumbnail.png';
import project2 from '../../pics/project_2_thumbnail.png';
import project3 from '../../pics/project_3_thumbnail.png';

export default function Contact() {
    return (
        <div className="sectionContainer">
            <h1 id="portfolio-title">Portfolio</h1>
            <div className="portfolioContainer">
                <div id="assignments-container">
                    <Project title="Interactive Weather App" imgSrc={challenge6} repo="https://github.com/GimmeKitties711/challenge_6-interactive_weather_forecast_app" deployed="https://gimmekitties711.github.io/challenge_6-interactive_weather_forecast_app/" />
                    <Project title="Organized Note Taker" imgSrc={challenge11} repo="https://github.com/GimmeKitties711/challenge_11-organized_note_taking_app" deployed="https://organized-note-taking-app-ab8f1d884f19.herokuapp.com/" />
                    <Project title="Book Search Engine" imgSrc={challenge21} repo="https://github.com/GimmeKitties711/challenge_21-personalized_book_search_engine_with_graphql" deployed="https://personalized-book-search-app-c1a85de82eb6.herokuapp.com/" />
                </div>
                <div id="projects-container">
                    <Project title="Kitty Quest" imgSrc={project1} repo="https://github.com/xqzo/Kitty-Quiz" deployed="https://xqzo.github.io/Kitty-Quiz/" />
                    <Project title="Fit Squad" imgSrc={project2} repo="https://github.com/carlosmb001/fit_squad" deployed="https://fit-squad-805c3e11f44f.herokuapp.com/" />
                    <Project title="Code-E the Code Bot" imgSrc={project3} repo="https://github.com/Cleffy/Best-Code-Bot-Ever" deployed="https://best-code-bot-ever-6c020fa64dc5.herokuapp.com/" />
                </div>
            </div>
        </div>
    );
}
