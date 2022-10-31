import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = ({ service }) => {
  const { id, img, name, description, price } = service;
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
          <Button variant="primary">Book: {name}</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Service;
