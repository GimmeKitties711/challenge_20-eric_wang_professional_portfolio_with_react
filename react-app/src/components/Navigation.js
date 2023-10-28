import React from 'react';

function Navigation({ currentPage, handlePageChange }) { // destructure the props
    return (
        <ul>
            <li>
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    // this is similar to elem.addEventListener('click', function)
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    // if the current page is Home, then modify the appearance of the link with the active class
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li>
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation; // always showing on page
