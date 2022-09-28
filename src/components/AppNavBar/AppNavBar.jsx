import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


export default function navigationBar({ user}){
   
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">TheGoodEatsCo.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/"><Nav.Link href="#home"><Button variant="success">Home</Button></Nav.Link></LinkContainer>
                <LinkContainer to="/login"><Nav.Link href="#link"><Button variant="success">Login</Button></Nav.Link></LinkContainer>
                <Nav.Link href="#About"><Button variant="success">About</Button></Nav.Link>
                <LinkContainer to="/"><Nav.Link href="#checkout"><Button variant="success">CheckOut</Button></Nav.Link></LinkContainer>
                <LinkContainer to="/signup"><Nav.Link href="#Sign Up"><Button variant="success">Sign Up</Button></Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}