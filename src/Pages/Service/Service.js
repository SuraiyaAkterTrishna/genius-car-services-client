import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, name, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  }
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h4>{name}</h4>
          </Card.Title>
          <Card.Text>
            <p>Price: ${price}</p>
            <p>{description}</p>
          </Card.Text>
          <Button onClick={() => navigateToServiceDetail(_id)} variant="primary">Book: {name}</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Service;
