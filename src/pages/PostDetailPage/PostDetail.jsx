import React, { useState, useEffect, useCallback  } from "react";
import { useParams } from "react-router-dom"; 

import PageHeader from "../../components/Header/Header";
import PostDisplay from "../../components/PostDisplay/PostDisplay";

import Loading from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { Grid } from "semantic-ui-react";

import * as postsAPI from "../../utils/postApi";
import * as likesAPI from "../../utils/likesApi";


export default function PostDetail({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  async function addLike(postId) {
    // Where is the postId defined in the UI?

    try {
      const response = await likesAPI.create(postId);
      console.log(response, "from add like");
      getPost();
    } catch (err) {
      console.log(err, " err from server");
      setError("error adding like");
    }
  }

  async function removeLike(likeId) {
    try {
      const response = await likesAPI.removeLike(likeId);
      console.log(response, " remove like");
      getPost();
    } catch (err) {
      console.log(err);
      setError("error removing like");
    }
  }

  
  const getPost = useCallback(async () => {
    try {
      const response = await postsAPI.getPost(posts);
      setPosts([response.data.posts]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setLoading(false);
      setError("Post does not exist! Please try again.");
    }
  }, [posts]);

  useEffect(() => {
    getPost();
  }, [posts, getPost]);


  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <ErrorMessage error={error} />
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
        <Grid.Column>
          <PostDisplay
            itemsPerRow={1}
            posts={posts}
            isProfile={true}
            loading={loading}
            loggedUser={loggedUser}
            addLike={addLike}
            removeLike={removeLike}
            setPosts={setPosts}
            
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}