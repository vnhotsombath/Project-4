import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import AddOrder from "../../components/AddOrder/AddOrder";
import OrderPostDisplay from "../../components/OrderPostDisplay/OrderPostDisplay";

import userService from "../../utils/userService";
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MenuPage(){
const [orders, setOrders] = useState([]);
const [profileUser, setProfileUser] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

const { username } = useParams;

const getProfile = useCallback(async () => {
    try{
        const response = await userService.getProfile(username);
        setLoading(false);
        setProfileUser(response.data.user);
        setOrders(response.data.orders);
        
        console.log(response);
    } catch(err){
        console.log(err.message);
        setError('Profile does not exist! You are not in the right place')
    }
}, [username]);

useEffect(() => {
    console.log("USE EFFECT FIRING");
    getProfile();
}, [username, getProfile]);

if (error) {
    return(
        <>
        <PageHeader />
        <ErrorMessage error={error} />;
        </>
    );
}
if (loading) {
    return (
        <>
        <PageHeader />
        <Loading />
        </>
    )
}



    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{maxWidth: 750}}>
                    <OrderPostDisplay />
                   <h1>Your Orders!</h1>
                </Grid.Column>
                <Grid.Row centered>
                <Grid.Column style={{maxWidth: 750}}>
                    <AddOrder />
                   <h1>Add Orders</h1>
                </Grid.Column>
            </Grid.Row>
            </Grid.Row>
            </Grid>
            
    )
}