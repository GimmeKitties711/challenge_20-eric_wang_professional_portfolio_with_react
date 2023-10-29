import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About Me');
    // render the hoe page by default (on page load)

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
            {/* pass in the props to be used by the Navigation function in ./Navigation.js */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
