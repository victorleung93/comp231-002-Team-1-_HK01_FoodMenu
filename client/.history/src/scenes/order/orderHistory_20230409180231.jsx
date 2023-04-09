
import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import { setItems } from "../../state";
import { useSelector, useDispatch } from 'react-redux';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const urlForServer = "http://localhost:3200/";
    const [display, setDisplay] = useState(null);
    const fetchData = async () => {
        let res = await axios.get(urlForServer + "order");
        console.log(res.data);
        setDisplay(res.data);
        
      };


    async function getItems() {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let histories = await axios.get(urlForServer + "order");
        // const itemsJson = await items.json();
        dispatch(setItems(histories.data));
      }
    
      useEffect(() => {
        getItems();
        fetchData();
      }, []);

  return (
    <div style={{width:"80%", margin:"80px auto"}}>

        <h1>Order History</h1>
      
        {display.map(order => (
        <div key={order._id}>
          <h2>Order ID: {order._id}</h2>
          <ul>
            {order.order.map(item => (
              <li key={item._id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.count}</p>
              </li>
            ))}
          </ul>
          <p>Subtotal: ${order.subPrice.toFixed(2)}</p>
          <p>Tax: ${order.tax.toFixed(2)}</p>
          <p>Total: ${order.totalPrice.toFixed(2)}</p>
        </div>
      ))}
      ))} */}
    </div>
   
  )
}

export default OrderHistory;