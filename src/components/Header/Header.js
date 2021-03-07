import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Explore Countries</h1>
            <nav>
                <a href="/home">Home</a>
            </nav>
        </div>
    );
};

export default Header;