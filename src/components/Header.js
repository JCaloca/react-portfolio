import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function Header() {
    const [currentPage, setCurrentpage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentpage(page);

    return (
        <div> 
            <h1>Hello World!</h1>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}

export default Header;