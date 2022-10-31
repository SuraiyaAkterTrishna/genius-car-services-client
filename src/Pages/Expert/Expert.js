import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Expert = ({ expert }) => {
  const { img, name } = expert;
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h4>{name}</h4>
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Expert;
