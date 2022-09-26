import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default function PageHeader(){
    return(
        <Segment>
            <Header as='h2'
               content='HEADER'
               subheader='New menu every Week!'>
            </Header>
        </Segment>
    )
}