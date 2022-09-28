import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import PageFooter from '../../components/PageFooter/PageFooter';

import { useNavigate, Link } from "react-router-dom";


export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch(err) {
      setError(err.message);
    }
  }

  return (
    <>
    <AppNavBar />
<Card>
      <Card.Body>
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
              required/>
              </Form.Group>
            <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
            <Form.Control
            error={error.passwordError}
              name="password"
              type="password"
              placeholder="Enter password"
              value={state.password}
              onChange={handleChange}
              required/>
              </Form.Group>
             <Button variant="primary" type="submit">
              Log In
            </Button>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>     
        </Card.Body>
        </Card> 

        <PageFooter />
        </>
    );
  }
