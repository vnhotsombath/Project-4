import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { Navigate, useNavigate } from "react-router-dom";

import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

export default function SignUpPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [selectedFile, setSelectedFile] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", selectedFile);

    for (let key in state) {
      formData.append(key, state[key]);
    }

    console.log(formData, "<--FORMDATA, YOU CANT SEE THIS!");
    console.log(
      formData.forEach((item) => console.log(item)),
      "<--THIS LETS YOU SEE THE KEY VALUES IN FORMDATA"
    );

    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin();

      navigate("/");
    } catch (err) {
      console.log(err);
      setError({ message: err.message, passwordError: false });
    }
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh " }}
      verticalAlign="middle>"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Image src="https://i.imgur.com/MtLTwjH.png" />
          Sign Up{" "}
        </Header>
        <Form>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              required
            />
            <Form.Input
              name="email"
              placeholder="email"
              value={state.email}
              required
            />
            <Form.Input
              name="password"
              placeholder="password"
              value={state.password}
              required
            />
            <Form.Input
              name="passwordConf"
              placeholder="passwordConf"
              value={state.passwordConf}
              required
            />
            <Button type="submit" className="btn">
              Sign Up
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}
