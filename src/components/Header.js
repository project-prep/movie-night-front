import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className= "Header">My Favorite Movies</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>

          <Link to="/about" className="nav-link">About Us</Link>

          <Link to="/main" className="nav-link">Main</Link>
        </NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
