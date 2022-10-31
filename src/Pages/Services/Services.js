import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <h1 className="text-primary text-center">Our services</h1>
      <Row>
        {
            services.map(service =><Service
                key = {service.id}
                service = {service}
            ></Service>)
        }
      </Row>
    </Container>
  );
};

export default Services;
