import React from 'react';
import './HomePageComp.css';
import Card from 'react-bootstrap/Card';

export default function HomePageComp(){
    return(
        
        <div className="Background">
        <Card className="meal">
            <Card.ImgOverlay>
                <Card.Title><h1>M E A L S</h1></Card.Title>
                <Card.Text>
                    Delivered To Your DoorStep!
                </Card.Text>
            </Card.ImgOverlay>
        </Card></div>
        
    );
}