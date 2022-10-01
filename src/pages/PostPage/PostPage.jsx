import React, { useState, useEffect } from "react";

import PageNav from "../../components/PageNav/PageNav";
import PageFooter from "../../components/PageFooter/PageFooter";
import AddPosts from "../../components/AddPost/AddPost";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as postsApi from "../../utils/postApi";

export default function Post({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function handleAddPost(post) {
    try {
      setLoading(true);
      const response = await postsApi.create(post);
      console.log(response);
      setPosts([response.data, ...posts]);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError("Error creating Post, please try again");
    }
  }
  async function getPosts() {
    try {
      const response = await postsApi.getAll();
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

    getPosts();
  }, []); 

  if (error) {
    return (
      <>
        <PageNav handleLogout={handleLogout} loggedUser={loggedUser} />
        <ErrorMessage error={error} />;
        <PageFooter />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageNav handleLogout={handleLogout} loggedUser={loggedUser} />
        <Loading />
        <PageFooter />
      </>
    );
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <PageNav />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddPosts handleAddPost={handleAddPost} />
          </Col>
        </Row>
        <Row>
          <Col>
            <PageFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
}
