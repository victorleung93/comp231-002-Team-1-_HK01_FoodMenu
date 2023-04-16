
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
      if(token==="admin"){}
      else{
        <p>asdasd</p>
      }
        
    </div>
   
  )
}

export default OrderHistory;