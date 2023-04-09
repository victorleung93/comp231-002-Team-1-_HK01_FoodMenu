
import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";

const OrderHistory = () => {

    const urlForServer = "http://localhost:3200/";
    async function getItems() {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let items = await axios.get(urlForServer + "");
        // const itemsJson = await items.json();
        dispatch(setItems(items.data));
      }
    
      useEffect(() => {
        getItems();
      }, []);
  return (
    <div style={{width:"80%", margin:"80px auto"}}>

        <h1>Order History</h1>

    </div>
  )
}

export default OrderHistory;