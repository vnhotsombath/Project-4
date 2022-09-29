import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


export default function AddOrderForm(props){
    // create the state, pay attention to how the inputs are setup
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        city: "",
        zip: "",
    })

    //The function that handles the changes on the input, look at the inputs for the name of it

    function handleSubmit(e){
        e.preventDefault();

    }

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }

    return(
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="name" 
                    value={state.firstName}
                    placeholder="Enter First Name" 
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="name" 
                    value={state.lastName}
                    placeholder="Enter Last Name"
                    onChange={handleChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                placeholder="1234 Main St"
                value={state.address}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                placeholder="Apartment/Studio/Floor"
                value={state.address2}
                onChange={handleChange} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange}
                     value={state.city} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control onChange={handleChange}
                    value={state.zip} />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit"> Next </Button>
        </Form>
       
    )
}