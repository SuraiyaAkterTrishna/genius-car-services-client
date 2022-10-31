import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect( () => {
    fetch('services.json')
    .then(res=> res.json())
    .then(data => setServices(data));
  },[]);
  return (
    <div>
      <h1>Here is all the services: {services.length}</h1>
    </div>
  );
};

export default Services;
