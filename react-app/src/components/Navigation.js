import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ currentPage, handlePageChange }) { // destructure the props
    return (
        <ul className="notResume">
            <li>
                <Link
                    to="#aboutme"
                    onClick={() => handlePageChange('About Me')}
                    // this is similar to elem.addEventListener('click', function)
                    className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                    // if the current page is About Me, then modify the appearance of the link with the 'active' class
                >
                    About Me
                </Link>
            </li>
            <li>
                <Link
                    to="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li>
                <Link
                    to="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            <li>
                <Link
                    to="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    )
}

export default Navigation; // always showing on page
