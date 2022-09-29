import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function MealCard({ meal }){
    return(
        <Card style={{ width: '18rem'}}>
            <Link to={`/meals/${meal._id}`}><Card.Img variant='top' src={meal.image} /></Link>
            <Card.Body><Card.Title><strong>{meal.title}</strong></Card.Title>
            <Card.Text as="div">{meal.description}</Card.Text></Card.Body>
            <ListGroup.Item>{meal.calories}</ListGroup.Item>
            <ListGroup.Item>{meal.price}</ListGroup.Item>
            <Button variant="success">Add To Cart</Button>
        </Card>
    )
}