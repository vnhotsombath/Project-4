import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export default function MenuPage(props){
    const [quantity, setQuantity] = useState()
    const handleIncrement = () => {
        if ( quantity < 20 ) {
            setQuantity()
        }
    }
    const handleDecrement = () => {
        if ( quantity > 1) {
            setQuantity()
        }
    }

    return(
        <Card style={{ width: '18rem', height: '20rem' }}>
            <Card.Img variant='top' src="/images/KBBQ.jpeg" />
            <Card.Body><Card.Title>Title</Card.Title>
            <Card.Text>FOOD DESCRIPTION HERE</Card.Text></Card.Body>
            <Col>
            <Button variant="outline-dark" onclick={handleIncrement}>+</Button>
            <Button variant="outline-dark" onclick={handleDecrement}>-</Button></Col>
            <Col xs={1}></Col>
            <Button variant="success">Add To Cart</Button>
        </Card>
    )
}