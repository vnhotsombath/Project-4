import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import "./Header.css";

export default function PageHeader({ loggedUser, handleLogout }) {
  console.log(loggedUser, "loggedUser in header");
  
  if (loggedUser) {
  return (
    <Segment clearing>
      <Header as="h2" floated="right">
      <Link to="/write">
            <Icon name="edit" color="orange" avatar/>
            </Link>
        <Link to="/">
          <Icon name="home" color= "orange" />
        </Link>

        <Link to="" onClick={handleLogout}>
        <Icon name="sign out" color="orange"></Icon>
        </Link>
      </Header>
      <Header as="h2" floated="left">
      <Link to={`/${loggedUser?.username}`}>
          <Image
            src={
                loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link>
        TheGoodEatsCo.
      </Header>
    </Segment>
  );
}
return (
  <Segment clearing>
    <Header as="h1" floated="left">
          <Image
            src={"https://i.imgur.com/x7pzPhG.png"}
            size="small"
          ></Image>
        </Header>
      <Header className="Header-Nav" as="h1" floated="right">
        <Link to="/">
          <Icon name="home" color= "orange" />
        </Link>
        <Link to="/about" color="orange">About</Link> /
        <Link to="/login">
        <Icon name="sign-in" color="orange"></Icon>
        Login
        </Link> /
        <Link to="/signup"> 
        <Icon name="signup" color="orange"></Icon>
        Sign Up</Link>
      </Header>
    </Segment>

)
}
