import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1>This is home component</h1>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;