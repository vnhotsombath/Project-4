import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import AddPost from "../../components/AddPost/AddPost";

import { Grid } from "semantic-ui-react";
import * as postsAPI from "../../utils/postApi";

export default function Write({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  async function handleAddPost(post) {
    
    try {
      console.log('creating post!');
      const response = await postsAPI.create(post); // waiting for the json to be return from the server and parsed by us!

      // data is the response from the api, the result of the .then if(res.ok) return res.json() in the create postAPI utils function
      console.log(response);
      setPosts([response.data, ...posts]); /// ...posts would keep all the posts in the previous states array
    } catch (err) {
      // this is the error from the throw block, in the postsAPI.create function
      console.log(err.message);
      setError("Error creating post, please try again");
    }
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="header-clearance">
        <Grid.Column textAlign="center">
          <p className="large-font-size sub-header">Blog Post</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ width: 150 }}>
        </Grid.Column>
        <Grid.Column style={{ width: 450 }}>
          <AddPost handleAddPost={handleAddPost} />
          <p>{error}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}