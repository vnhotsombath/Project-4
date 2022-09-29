import React, { useState, useEffect } from "react";
import Cart from "../../components/Cart/Cart";
import AppNavBar from "../../components/AppNavBar/AppNavBar";
import PageFooter from "../../components/PageFooter/PageFooter";


export default function CheckOut(){
    return(
        <>
        <AppNavBar />
            <h1>Place your orders here!</h1>
            <Cart />
        <PageFooter />
            
        </>
    )
}