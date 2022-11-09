import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <main>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav-container'>
        <Navbar.Brand className='footer-text'>Join Us For More Updates</Navbar.Brand>
      
        <Navbar.Brand className='footer-style left'>Jordan Kwan</Navbar.Brand>
        <div className="circle"></div>
        <Navbar.Brand className='footer-style'>Marc Wagner</Navbar.Brand>
        <div className="circle"></div>
        <Navbar.Brand className='footer-style'>Mandela Steele</Navbar.Brand>
        <div className="circle"></div>
        <Navbar.Brand className='footer-style2'>Nerissa Leynes</Navbar.Brand>
        <Navbar.Brand className='footer-style2 sign-up'>Subscribe Now!</Navbar.Brand>
        <input className="email-input" placeholder='Enter Your Email' />
        <Button variant="secondary" className='footerBtn'>Sign-up</Button>{' '}
      </Navbar>
      </main>
    )
  }
}

export default Footer;
