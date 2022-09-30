import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


export default function navigationBar({ user }){
   
    return (
        <Navbar bg="light" expand="lg" >
          <Container>
            <Navbar.Brand>TheGoodEatsCo.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item><LinkContainer to="/"><Navbar.Brand><Button variant="success">Home</Button></Navbar.Brand></LinkContainer></Nav.Item><br />
                <Nav.Item><LinkContainer to="/login"><Navbar.Brand><Button variant="success">Login</Button></Navbar.Brand></LinkContainer></Nav.Item><br />
                
                <Nav.Item><LinkContainer to="/signup"><Navbar.Brand><Button variant="success">Sign Up</Button></Navbar.Brand></LinkContainer></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}