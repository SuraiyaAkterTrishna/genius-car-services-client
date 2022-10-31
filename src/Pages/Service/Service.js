import React from 'react';

const Service = ({service}) => {
    const {id, name, description, price} = service;
    return (
        <div>
            <h1>This is service:{id}</h1>
        </div>
    );
};

export default Service;