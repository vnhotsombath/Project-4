import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";




export default function HomePage(){
    return(
       <Grid>
        <Grid.Row>
            <Grid.Column>
                <PageHeader />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Introduction />
            </Grid.Column>
        </Grid.Row>
       </Grid>
    )
}