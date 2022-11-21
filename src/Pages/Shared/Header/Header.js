import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="30px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/service">Services</Nav.Link>
            <Nav.Link as={Link} to="/expert">Experts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user && <>
                <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                <Nav.Link as={Link} to="manage">Manage</Nav.Link>
              </>
            }
            {
              user ?
                <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign Out</button>
                :
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
