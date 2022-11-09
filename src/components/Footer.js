import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav-container'>
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      
        <Navbar.Brand className='footer-style'>Jordan Kwan</Navbar.Brand>
        <div className="circle"></div>
        <Navbar.Brand className='footer-style'>Marc Wagner</Navbar.Brand>
        <div className="circle"></div>
        <Navbar.Brand className='footer-style'>Mandela Steele</Navbar.Brand>
        <div className="circle"></div>
        <Navbar.Brand className='footer-style2'>Nerissa Leynes</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
