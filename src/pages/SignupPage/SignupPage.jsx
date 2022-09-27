import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";



function isPasswordMatch(passwordOne, passwordConf) {
  return passwordOne === passwordConf;
}

export default function SignUpPage(props) {
  const [error, setError] = useState({
    message: '',
    passwordError: false
  });

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const navigate = useNavigate();

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  // const [selectedFile, setSelectedFile] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isPasswordMatch(state.password, state.passwordConf)) return setError({message: 'Passwords Must Match!', passwordError: true });
    setError({message: '', passwordError: false})

    try {
      await userService.signup(state);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      console.log(err);
      setError({message: err.message, passwordError: false });
    }
  }

  return (
    <Card>
      <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required />
              </Form.Group>
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
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
            error={error.passwordError}
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>     
        </Card.Body>
        </Card>
        
  );
}
