
import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import { setItems } from "../../state";
import { useSelector, useDispatch } from 'react-redux';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const urlForServer = "http://localhost:3200/";
    const [display, setDisplay] = useState([]);
      var [price, setPrice] = useState(0);
  var [taxPrice, setTaxPrice] = useState(0);
  var [totalPrice, settTotalPrice] = useState(0);
  const token = window.localStorage.getItem("token");

    const fetchData = async () => {
        let res = await axios.get(urlForServer + "order",{
          headers: {
            Authorization: token
          }
        });
        console.log(res.data);
        setDisplay(res.data);
        console.log(display);
      };


    // async function getItems() {
    //     // const items = await fetch(
    //     //   // "http://localhost:1337/api/items?populate=image",
       
    //     //   { method: "GET" }
    //     // );
    //     let histories = await axios.get(urlForServer + "order");
    //     // const itemsJson = await items.json();
    //     dispatch(setItems(histories.data));
    //   }
    
      useEffect(() => {
        // getItems();
        fetchData();
      }, []);

      const  add =(a)=>{
  price=price+a;
  taxPrice=price*0.13;
  totalPrice=price+taxPrice;
  console.log(price);


}

const checkTheBill=()=>{
  alert("We received you request. Our staff is coming.")
}

  return (
    
    <div style={{width:"80%", margin:"80px auto"}}>

        <h1>Order History</h1>
        {token==="admin"?<div>asd</div>}
      
        {display.map((item) => {
            add(item.subPrice)
              return(<div key={item._id}>
                <h2>Order {item._id}</h2>
                {item.order.map((orderItem, index) => (
                  
                  <div key={index} >
                  
                   <p>{orderItem.name} {orderItem.price} CAD x {orderItem.count} </p>
            
                  </div>
                ))}
      
                <p>Subtotel Price: {item.subPrice} CAD</p>
                <p>Date: {item.date}</p>
                <hr/>
              </div>
            )
       
    })}
                    <h2>Subtotal: ${price.toFixed(2)} </h2> 
                    <h2>Tax: ${taxPrice.toFixed(2)} </h2> 
                    <h2>Total Price: ${totalPrice.toFixed(2)} </h2> 
                
                    <button onClick={checkTheBill}>Check the Bill</button>
    </div>
   
  )
}

export default OrderHistory;