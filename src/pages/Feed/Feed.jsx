import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";

import { Grid } from "semantic-ui-react";


import * as postsAPI from "../../utils/postApi";
import * as likesAPI from "../../utils/likesApi";

export default function Feed({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function addLike(postId) {
    try {
      const response = await likesAPI.create(postId);
      getPosts();
   
    } catch (err) {
      setError("error adding like");
    }
  }

  async function removeLike(likeId) {
    try {
      const response = await likesAPI.removeLike(likeId);
      getPosts();
    } catch (err) {
      setError("error removing like");
    }
  }


  async function getPosts() {
    try {
      const response = await postsAPI.getAll();
      setPosts([...response.data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []); 

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <ErrorMessage error={error} />;
        <Footer />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <Loading />
        <Footer />
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
