import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import profilePic from '../../src/Derpy_kitty_with_background_cropped.png';

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
            <div className="headerComponentsContainer">
                <img src={profilePic} className="spinner" alt="profile pic" />
                <header className="App-header">
                    <h1 id="real-name" className="names">Eric Wang</h1>
                    <h2 className="names">GimmeKitties711</h2>
                    {/* pass in the props to be used by the Navigation function in ./Navigation.js */}
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                </header>
            </div>
            <div className="contentContainer">
                {renderPage()}
            </div>
        </div> 
    );
}
