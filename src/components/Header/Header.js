import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;