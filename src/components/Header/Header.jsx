import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon, Image } from 'semantic-ui-react';

export default function PageHeader({ loggedUser }){
    console.log(loggedUser, "loggedUser in header");
    return(
        <Segment clearing>
            <Header as="h2" floated="left">
                    <Link to="/"><Image 
                    name="home"
                    size="small"
                    circular src={"https://i.imgur.com/TgOFHKs.png" }/></Link>
            </Header>
            <Header as='h2' floated='right'>
                Logout
            </Header>
        </Segment>
    );
}