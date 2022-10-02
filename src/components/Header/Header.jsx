import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

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
          Logout
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
      </Header>
    </Segment>
  );
}
return (
  <Segment clearing>
      <Header as="h2" floated="right">
        <Link to="/">
          <Icon name="home" color= "orange" />
        </Link>
        <Link to="/login">
          Login
        </Link>
        <Link to="/signup">
          Sign Up
        </Link>
      </Header>
    </Segment>

)
}
