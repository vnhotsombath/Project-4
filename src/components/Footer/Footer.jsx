import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <Segment vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
        <Container textAlign="center">
          <Grid divided stackable>
            <Grid.Column width={20}>
              <Header as="h4" content="TheGoodEatsCompany 2022" />
              <p>Who doesn't Love Good Eats and Good Company?</p>
            </Grid.Column>
          </Grid>

          <Divider section />
          <List horizontal divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
