import React, { useState, useEffect } from 'react';
import AddOrder from '../../components/AddOrder/AddOrder';


export default function OrderPage(){
    return(
        <div>
            <h1>Place your orders here!</h1>
            <AddOrder />
            
        </div>
    )
}