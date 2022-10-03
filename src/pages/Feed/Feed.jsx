import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";

import { Grid } from "semantic-ui-react";

// this says import all the export function calls as postsAPI.functionName
import * as postsAPI from "../../utils/postApi";
import * as likesAPI from "../../utils/likesApi";

export default function Feed({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function addLike(postId) {
    try {
      const response = await likesAPI.create(postId);
      console.log(response, "from add like");
      getPosts();
   
    } catch (err) {
      console.log(err, " err from server");
      setError("error adding like");
    }
  }

  async function removeLike(likeId) {
    try {
      const response = await likesAPI.removeLike(likeId);
      console.log(response, " remove like");
      getPosts();
    } catch (err) {
      console.log(err);
      setError("error removing like");
    }
  }


  async function getPosts() {
    try {
      const response = await postsAPI.getAll();
      console.log(response, " data");
      setPosts([...response.data]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setLoading(false);
    }
  }

  useEffect(() => {
    //Getting posts, C(R)UD
    console.log("USEEFFECTTTTTTTT")
    getPosts();
  }, []); // This is useEffect runs once when the Feed component

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <Loading />
      </>
    );
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 800 }}>
          <PostGallery
            posts={posts}
            numPhotosCol={1}
            isProfile={false}
            removeLike={removeLike}
            addLike={addLike}
            loading={loading}
            loggedUser={loggedUser}
            getPosts={getPosts}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
