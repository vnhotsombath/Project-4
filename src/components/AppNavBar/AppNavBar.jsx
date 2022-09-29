import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


export default function navigationBar({ user }){
   
    return (
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">TheGoodEatsCo.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item><LinkContainer to="/"><Button variant="success">Home</Button></LinkContainer></Nav.Item><br />
                <Nav.Item><LinkContainer to="/login"><Button variant="success">Login</Button></LinkContainer></Nav.Item><br />
                <Nav.Item><Button variant="success">About</Button></Nav.Item><br />
                <Nav.Item><LinkContainer to="/checkout"><Button variant="success">CheckOut</Button></LinkContainer></Nav.Item><br />
                <Nav.Item><LinkContainer to="/signup"><Button variant="success">Sign Up</Button></LinkContainer></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}