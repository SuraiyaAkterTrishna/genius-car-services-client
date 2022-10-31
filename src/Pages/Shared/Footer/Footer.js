import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p>copyright @ {year}</p>
        </footer>
    );
};

export default Footer;