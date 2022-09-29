import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function MealCard(props){
    


    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant='top' src={props.image} />
            <Card.Body><Card.Title><strong>{props.title}</strong></Card.Title>
            <Card.Text as="div">{props.description}</Card.Text></Card.Body>
            <ListGroup.Item>{props.calories}</ListGroup.Item>
            <ListGroup.Item>{props.price}</ListGroup.Item>
            <Button variant="success">Add To Cart</Button>
        </Card>
    )
}