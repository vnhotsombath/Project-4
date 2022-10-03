import { Image, Grid, Segment } from "semantic-ui-react";

function ProfileBio({ user }) {
  return (
    <Grid textAlign="center" columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Image
            src={`${
              user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } `}
            avatar
            size="small"
          />
        </Grid.Column>
        <Grid.Column textAlign="center" style={{ maxWidth: 800 }}>
          <Segment vertical>
            <h3>{user.username}</h3>
          </Segment>
          <Segment>
            <span> Bio: {user.bio}</span>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ProfileBio;
