import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

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
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Image src="https://i.imgur.com/MtLTwjH.png" />
          Sign Up
        </Header>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
            error={error.passwordError}
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
            error={error.passwordError}
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Sign Up
            </Button>
          </Segment>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}
