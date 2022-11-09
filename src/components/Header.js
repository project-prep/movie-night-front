import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import '../Header.css';

class Header extends React.Component {
  render() {
    return (
      <Container className="headerCont">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className= "Header">Movie Night</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>

          <Link to="/main" className="nav-link">Main</Link>

          <Link to="/about" className="nav-link">About Us</Link>

        </NavItem>
      </Navbar></Container>
    )
  }
}

export default Header;
