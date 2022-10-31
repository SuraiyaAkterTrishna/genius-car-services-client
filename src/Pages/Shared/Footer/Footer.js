import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-dark text-white'>
            <p className='p-5'>copyright @ {year}</p>
        </footer>
    );
};

export default Footer;