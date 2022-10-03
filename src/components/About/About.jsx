import React from "react";
import { Container, Header, List, Icon, Divider } from "semantic-ui-react";
import HeaderPage from "../Header/Header";
import Footer from "../Footer/Footer";
import './About.css';

const About = (props) => {

    return (
        <>
        
        <React.Fragment>
        <HeaderPage />
            <Container
                className='about-container'
            >
                <Header as='h1' textAlign="center">About</Header>
                <Divider section />
                <Header as='h2' textAlign='left' className='about-header'>What theGoodEatsCo?</Header>
                <p>
                    theGoodEatsCo. is a blogging and social media tool built for food lovers. Here, you can effortlessly share your favorite dishes from all over the world!
                </p>
                <Header as='h2' textAlign='left' className='about-header'>What can I share?</Header>
                Each blog post includes a...
                <List bulleted>
                    <List.Item>title</List.Item>
                    <List.Item>description</List.Item>
                    <List.Item>photo upload</List.Item>
                </List>
                <Header as='h2' textAlign='left' className='about-header'>How can I see other posts?</Header>
                <p>Browse the homepage to see all posts that currently exist in theGoodEatsCo, and click each post to see that person's posts.</p>
                <Divider hidden />
                <Header as='h1' textAlign="center">Contact</Header>
                <Divider section />
                <Container className='about-contact'>
                    <List animated>
                        <List.Item>
                            <Icon name="marker" />
                            <List.Content>Atlanta, Ga</List.Content>
                        </List.Item>
                        <List.Item
                            icon='mail'
                            content="email"
                        />
                        <List.Item>
                            <Icon name='phone square' />
                           <List.Content>(123)-456-7890</List.Content></List.Item>
                    </List>
                </Container>
            </Container>
            <Footer />
        </React.Fragment>
        </>
    );
}

export default About;