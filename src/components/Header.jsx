import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./Logo";

function Header() {
  return (
    <Navbar collapseOnSelect className="navbar" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="/" to="/" className="logo-link">
      <Logo />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="me-0">
        <Nav.Link eventKey="0" as={Link} className="nav-item" href="/" to="/">Home</Nav.Link>
        <Nav.Link eventKey="1" as={Link} className="nav-item" href="/services" to="/services">Services</Nav.Link>
        <Nav.Link eventKey="2" as={Link} className="nav-item" href="/reviews" to="/reviews">Reviews</Nav.Link>
        <Nav.Link eventKey="3" as={Link} className="nav-item" href="/about" to="/about">About</Nav.Link>
        <Nav.Link eventKey="4" as={Link} className="nav-item" href="/contact" to="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
  );
}

export default Header;