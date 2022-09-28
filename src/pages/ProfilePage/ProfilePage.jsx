import React, { useState, useEffect } from 'react';

import ProfileBio from "../../components/ProfileBio/ProfileBio";
import AddOrder from "../../components/Cart/Cart";
import OrderPostDisplay from "../../components/OrderPostDisplay/OrderPostDisplay";
import Loading from "../../components/Loader/Loader";

import userService from "../../utils/userService";
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function ProfilePage({ loggedUser }){
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
        
        <ErrorMessage error={error} />;
        </>
    );
}
if (loading) {
    return (
        <>
        
        </>
    )
}



    return(
        <div>
        <h1>Your Orders!</h1>
        <br></br>
                   <h1>Add Orders</h1>
                </div>
            
    )
}