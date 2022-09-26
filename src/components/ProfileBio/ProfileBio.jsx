import React from 'React';
import { Grid, Segment } from 'semantic-ui-react';

export default function ProfileBio({user}) {
    return (
        <Grid textAlign="center" columns= {2}>
            <Grid.Column textAlign="left" style={{ maxWidth: 450}}>
                <Segment vertical>
                    <h2>{user.username}</h2>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}