import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";

import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostGallery from "../../components/PostGallery/PostGallery";
import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import * as postsApi from "../../utils/postApi"
import userService from "../../utils/userService";


export default function ProfilePage({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { username } = useParams(); // username is defined in the App folder in the Router path="/:username"

  async function removePost(postId) {
    try {
      postsApi.deletePost(postId);
      getProfile();
      setLoading(false)
    } catch (err) {
      console.log("err", "This is the error")
      setError(err)
      setLoading(false)
    }
  }

  const getProfile = useCallback(async () => {
    try {
      const response = await userService.getProfile(username); 
      setLoading(false);
      setProfileUser(response.data.user);
      setPosts(response.data.posts);

      console.log(response);
    } catch (err) {
      console.log(err.message);
      setError("Profile does not exist! You are in the wrong in place"); // < this is message we leave the user
      // to see
    }
  }, [username]);

  useEffect(() => {
    console.log("firing!");
    // When the page loads, lets send a get request to the server
    // to get whoever's profile page I'm on. (example, localhost:3000/jim) <-- jim's profile info I want to get

    getProfile();
  }, [username, getProfile]);

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
    <Grid>
      <Grid.Row>
        <Grid.Column>
		<PageHeader handleLogout={handleLogout} loggedUser={loggedUser}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={profileUser} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 1000 }}>
        <p><h1>Recent Posts</h1></p>
          <PostGallery
            posts={posts}
            numPhotosCol={1}
            isProfile={true}
            loading={loading}
            loggedUser={loggedUser}
            removePost={removePost}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
