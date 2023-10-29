import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import profilePic from '../../src/Derpy_kitty.jpg';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        // render a certain page based on currentPage
        if (currentPage === 'About Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <AboutMe />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header className="App-header">
            <h1>Eric Wang</h1>
            <h2>GimmeKitties711</h2>
            <img src={profilePic} className="App-logo" alt="profile picture" />
            {/* pass in the props to be used by the Navigation function in ./Navigation.js */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <div className="contentContainer">
                {renderPage()}
            </div>
        </div> 
    );
}
