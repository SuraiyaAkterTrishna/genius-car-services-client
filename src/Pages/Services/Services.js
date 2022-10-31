import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container fluid>
      <h1 className="text-primary text-center text-uppercase my-5">Our Services</h1>
      <Row className="gy-4">
          {services.map((service) => (
            <Col xs={12} md={6} lg={4} xl={4}>
            <Service key={service.id} service={service}></Service>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Services;
