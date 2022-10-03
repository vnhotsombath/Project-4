import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import AddPost from "../../components/AddPost/AddPost";
import "./Write.css";

import { Grid } from "semantic-ui-react";
import * as postsAPI from "../../utils/postApi";

export default function Write({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  async function handleAddPost(post) {
    try {
      const response = await postsAPI.create(post);

      console.log(response);
      setPosts([response.data, ...posts]);
    } catch (err) {
      setError("Error creating post, please try again");
    }
  }

  return (
    <>
      <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
      <Grid
        className="write-hero-image"
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ width: "450px" }}>
          <Grid.Row>
            <Grid.Column> </Grid.Column>
          </Grid.Row>
          <Grid.Row className="header-clearance">
            <Grid.Column textAlign="center">
              <p>
                <h1>POST YOUR MEAL</h1>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <AddPost handleAddPost={handleAddPost} />
              <p>{error}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
}
