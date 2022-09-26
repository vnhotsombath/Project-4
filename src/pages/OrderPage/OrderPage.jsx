import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from "../../components/Header/Header";

export default function OrderPage(){
    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            
                <h1>Place your orders here!</h1>
        </Grid>
    )
}