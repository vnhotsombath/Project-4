import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function MenuPage(props){
    return(
        <Card style={{ width: '18rem', height: '20rem' }}>
            <Card.Img variant='top' src="/images/KBBQ.jpeg" />
            <Card.Body><Card.Title>Title</Card.Title>
            <Card.Text>FOOD DESCRIPTION HERE</Card.Text></Card.Body>
            <Button variant="success">Add To Cart</Button>
        </Card>
    )
}