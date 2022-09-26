import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from "../../components/Header/Header";

export default function MenuPage(){
    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{maxWidth: 750}}>
                    <h1>THIS IS WHERE THE MENU GOES</h1>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            
    )
}