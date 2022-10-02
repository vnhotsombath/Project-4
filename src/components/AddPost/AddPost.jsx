import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, TextArea } from "semantic-ui-react";

export default function AddPostForm(props) {
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  const navigate = useNavigate();

  function handleFileInput(e) {
    console.log(e.target.files, " < - this is e.target.files!");
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("title", state.title);
    formData.append("content", state.content);
    props.handleAddPost(formData);
    navigate("/");
    }
   
 
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="title"
          value={state.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <Form.Input>
          <TextArea
          className="form-control"
          name="content"
          value={state.content}
          placeholder="Content Here"
          onChange={handleChange}
          required
        /></Form.Input>
          <Form.Input
            type="file"
            name="photo"
            placeholder="upload image"
            onChange={handleFileInput}
          />
        <Button type="submit" className="btn">
          Add Post
        </Button>
      </Form>
    </>
  );
}
