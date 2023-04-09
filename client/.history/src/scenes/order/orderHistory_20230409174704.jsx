
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
        {/* {display.map((item) => (
            console.log(item)
        ))}; */}
                    
                    {display &&
        display.map((el) => {
            {el.map}
          return (
            <tr key={el._id}>
                 <td>{el._id}</td>
                 
            {/* <td>{el.shortDescription}</td>
            <td>{el.longDescription}</td>
            <td>{el.price} CAD</td>
            <td>{el.category}</td>
            <td><img src={el.image} alt="" /></td> */}
         
            </tr>

            
          );
        })}
                 

    </div>
  )
}

export default OrderHistory;