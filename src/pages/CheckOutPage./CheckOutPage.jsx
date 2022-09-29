import React, { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";

import Cart from "../../components/Cart/Cart";
import PageNav from "../../components/PageNav/PageNav";
import PageFooter from "../../components/PageFooter/PageFooter";

import * as ordersAPI from "../../utils/orderApi";


export default function CheckOut({ loggedUser }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function handleAddOrder(order){
        try {
            setLoading(true);
            const response = await ordersAPI.create(order);
            console.log(response);
            setOrders([response.data, ...orders]);
            setLoading(false);        
        } catch (err){
            console.log(err.message);
            setError('Error creating post, please try again');
        }
    }

    async function getOrders(){
        try{
            const response = await ordersAPI.getAll();
            console.log(response, " data");
            setOrders([...response.data]);
            setLoading(false);
        } catch (err) {
            console.log(err.message, "this is the error");
            setLoading(false);
        }
    }

    useEffect(() => {
        getOrders();
    }, []);

    if(loading){
        return(
            <>
            <PageNav loggedUser={loggedUser} />
            <Loading />
            </>
        );
    }

    return(
        <>
        <PageNav />
            <h1>Place your orders here!</h1>
            <Cart handleAddOrder={handleAddOrder} />
        <PageFooter />
            
        </>
    )
}