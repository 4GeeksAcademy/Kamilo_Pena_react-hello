
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

export default function NavigationBar () {
  
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{backgroundColor:'#495057', width:5000}}>
        <Navbar.Brand href="#" style={{color:'white'}}><strong style={{marginLeft:292}}>Start Boostrap</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{marginLeft:490}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:'white'}}>About</Nav.Link>
            <Nav.Link href="#action2" style={{color:'white'}}>Service</Nav.Link>
            <Nav.Link href="#action4" style={{color:'white'}}>Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

