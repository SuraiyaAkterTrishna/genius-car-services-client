import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1>Oops!! Mechanic is sleeping..</h1>
            <img width='80%' src={sleeping} alt="cat" />
        </div>
    );
};

export default NotFound;