import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function AddPostForm(props){
    const [state, setState] = useState({
        title: "",
        description: "",
    });

    const [selectedFile, setSelectedFile] = useState("");

    function handleFileInput(e){
        console.log(e.target.files, "<--this is e.target.files!");
        setSelectedFile(e.target.files[0]);
    }

    function handleChange(e){
        setState({
            title: e.target.value,
            description: e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", state.title)
        formData.append("photo", selectedFile);
        formData.append("description", state.description);
        props.handleAddPost(formData);
    }

    return (
        <Form onSubmit={handleSubmit}>
        <InputGroup>
        <InputGroup.Text>Title</InputGroup.Text>
        <Form.Control
        placeholder="title"
        aria-label="title"
        onChange={handleChange}
        required />
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control 
        as ="textarea" 
        aria-label="With textarea"
        onChange={handleChange}
        required
         />
        <br></br>
        <Form.Control
              name="photo"
              type="file"
              placeholder="upload image"
              onChange={handleFileInput}
              required />
              <Button variant="success" as="input" type="submit" value="Submit" size="sm" />
        </InputGroup>
       </Form>
    )
}