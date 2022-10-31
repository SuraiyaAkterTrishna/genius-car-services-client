import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <Container fluid>
      <h1 className="text-primary text-center text-uppercase my-5">
        Our Experts
      </h1>
      <Row className="gy-5">
        {experts.map((expert) => (
          <Col xs={12} md={6} lg={4} xl={4}>
            <Expert key={expert.id} expert={expert}></Expert>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experts;
