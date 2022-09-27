import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

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
    
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId='username'>
          <FormLabel>Username</FormLabel>
            <FormControl
              type="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}></FormControl>
              </FormGroup>
            <FormGroup controlId='email'>
          <FormLabel>Email Address</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}></FormControl>
              </FormGroup>
            <FormGroup controlId='password'>
          <FormLabel>Password</FormLabel>
            <FormControl
            error={error.passwordError}
              type="password"
              placeholder="Enter password"
              value={state.password}
              onChange={handleChange}></FormControl>
              </FormGroup>
            <FormGroup controlId='confirmPassword'>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
            error={error.passwordError}
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
            />
            </FormGroup>
            <Button type="submit" className="btn" color="green">
              Sign Up
            </Button>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>     
    );
  }
